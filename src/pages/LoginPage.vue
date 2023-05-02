<template>
  <section class="bg-[url('./assets/backgroundImage.svg')]">
    <div class="flex justify-center items-center h-screen">
      <div class="relative bg-white w-2/4 py-12 px-20 drop-shadow-xl">
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

              <form class="text-slate-500 flex flex-col" @submit.prevent>
                <label class="mb-2">Email</label>
                <InputField
                  :placeholder="'your email@introcept.co'"
                  v-model="email"
                />

                <div v-if="v$.email.$error" class="flex pt-2 text-red-600">
                  <img src="../assets/WarningIcon.svg" class="pr-1" />
                  Sorry, we don't recognise this email address
                </div>

                <label class="mt-4 mb-2">Password</label>
                <div class="flex">
                  <InputField
                    :type="isPasswordVisible ? 'password' : 'text'"
                    :placeholder="'your password'"
                    class="grow"
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
                <div v-if="v$.password.$error" class="flex pt-2 text-red-600">
                  <img src="../assets/WarningIcon.svg" class="pr-1" />
                  Incorrect password. Try again or click Forgot Password to
                  reset it.
                </div>

                <button
                  @click="submitForm"
                  class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
                >
                  Login
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
                <InputField
                  type="email"
                  :placeholder="'your email@introcept.co'"
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
import { required, email, minLength } from "@vuelidate/validators";
import InputField from "../components/InputField.vue";

export default {
  components: {
    InputField,
  },
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
    const emailFormat = /^[a-z]+[.]+[a-z]+@introcept\.co$/;
    return {
      email: {
        required,
        emailFormat: (value) => emailFormat.test(value),
      },
      password: { required, minLength: minLength(6) },
    };
  },

  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.$router.push("/employeelist");
    },

    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    changePassword() {
      this.rememberedPassword = !this.rememberedPassword;
    },
    async recoveryLink() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.noRecoveryLinkNeeded = !this.noRecoveryLinkNeeded;
    },
  },
};
</script>
