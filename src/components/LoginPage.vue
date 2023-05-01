<template>
  <section class="bg-[url('./assets/backgroundImage.svg')]">
    <div class="flex justify-center items-center h-screen">
      <div class="relative bg-white w-2/5 py-12 px-20 drop-shadow-xl">
        <div v-if="noRecoveryLinkNeeded">
          <header class="flex flex-col justify-center items-center">
            <img src="../assets/companyLogo.svg" alt="CompanyLogo" />
            <div class="my-2 font-semibold flex flex-col items-center">
              <div>IntroCept Employee</div>
              <div>Portal</div>
            </div>
          </header>

          <main class="border-t-2 flex flex-col gap-4">
            <div v-if="rememberedPassword">
              <div class="py-6 font-bold text-2xl">Login to your account</div>

              <form class="text-slate-500 flex flex-col">
                <label class="mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your email@introcept.co"
                  class="border-2 rounded p-3"
                  v-model="email"
                />

                <label class="mt-8 mb-2">Password</label>
                <div
                  class="flex border-2 rounded focus:ring-2 focus:ring-violet-300"
                >
                  <input
                    :type="isPasswordVisible ? 'password' : 'text'"
                    placeholder="your password"
                    class="grow p-3 focus-none focus:outline-none"
                    v-model="password"
                  />
                  <div
                    class="flex px-3 relative"
                    v-on:click="togglePasswordVisibility"
                  >
                    <img
                      v-if="isPasswordVisible"
                      src="../assets/eyeImage.svg"
                    />
                    <img v-else src="../assets/crossedEyeImage.svg" />
                  </div>
                </div>

                <button @click="submitForm">
                  <!-- //TODO:removelink -->
                  <RouterLink
                    :to="{ name: 'EmployeeListingPage' }"
                    class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
                  >
                    Login
                  </RouterLink>
                </button>
              </form>
              <div class="flex justify-center">
                <button
                  @click="changePassword"
                  class="py-4 text-indigo-600 font-bold"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div v-else-if="!rememberedPassword">
              <div class="text-2xl font-bold py-10">Reset your password</div>
              <div class="pb-6 text-slate-500">
                Enter the email associated with your account and we'll send an
                email with instructions to reset your password.
              </div>

              <form class="text-slate-500 flex flex-col">
                <label class="mb-2 font-bold"
                  >We'll send a recovery link to</label
                >
                <input
                  type="email"
                  placeholder="your email@introcept.co"
                  class="border-2 rounded p-3"
                  v-model="email"
                />
              </form>
              <div
                class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
              >
                <button @click="recoveryLink">Continue</button>
              </div>
              <div class="flex justify-center">
                <button
                  @click="changePassword"
                  class="py-4 text-indigo-600 font-bold flex items-center gap-2"
                >
                  <img src="../assets/backIcon.svg" />
                  Return to login
                </button>
              </div>
            </div>
          </main>
        </div>
        <div
          v-else-if="!noRecoveryLinkNeeded"
          class="flex flex-col items-center"
        >
          <img src="../assets/mailLogo.svg" />
          <div class="py-5 font-bold text-2xl">Verify your email address</div>
          <div class="flex flex-col justify-center items-center">
            <div>We sent a recovery link at</div>
            <div class="text-indigo-600">{{ email }}</div>
          </div>
          <div
            class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
          >
            <button @click="resetPassword">GO TO EMAIL</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      isPasswordVisible: "false",
      rememberedPassword: "true",
      noRecoveryLinkNeeded: "true",
    };
  },
  validations() {
    return {
      email: { required, email }, //TODO:define email format
      password: { required }, //TODO:define password
    };
  },

  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      if (!result) {
        console.log("error");
        return;
      }
      console.log("success");
    },

    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    changePassword() {
      this.rememberedPassword = !this.rememberedPassword;
    },
    recoveryLink() {
      this.noRecoveryLinkNeeded = !this.noRecoveryLinkNeeded;
    },
    resetEmail() {},
  },
};
</script>
