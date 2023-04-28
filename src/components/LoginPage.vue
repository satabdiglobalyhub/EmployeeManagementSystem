<template>
  <section class="bg-[url('./assets/backgroundImage.svg')]">
    <div class="flex justify-center items-center h-screen">
      <div class="relative bg-white w-3/5 py-12 px-28 drop-shadow-xl">
        <header class="flex flex-col justify-center items-center">
          <img src="../assets/companyLogo.svg" alt="CompanyLogo" />
          <div class="my-2 font-semibold flex flex-col items-center">
            <div>IntroCept Employee</div>
            <div>Portal</div>
          </div>
        </header>
        <main class="border-t-2 flex flex-col gap-4">
          <div class="py-6 font-bold text-2xl">Login to your account</div>
          <!-- <ValidatoinObserver> -->
          <form
            class="text-slate-500 flex flex-col"
            @submit.prevent="handleSubmit"
          >
            <label class="mb-2">Email</label>
            <input
              type="email"
              placeholder="your email@introcept.co"
              class="border-2 rounded p-3"
              v-model="email"
            />
            <div v-if="emailError" class="text-red-600">{{ emailError }}</div>
            <label class="mt-8 mb-2">Password</label>
            <div class="flex border-2 rounded focus:ring-2">
              <input
                type="password"
                placeholder="your password"
                class="grow p-3 focus:outline-none"
                v-model="password"
              />
              <img
                class="px-3 relative"
                src="../assets/eyeImage.svg"
                alt="Unhide"
              />
            </div>
            <div v-if="passwordError" class="text-red-600">
              {{ passwordError }}
            </div>
            <RouterLink
              :to="{ name: 'EmployeeListingPage' }"
              class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
            >
              Login
            </RouterLink>
          </form>
          <!-- </ValidatoinObserver> -->

          <div class="p-3 text-indigo-600 flex justify-center font-bold">
            Forgot password?
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>
