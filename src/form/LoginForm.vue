<template>
  <div>
    <div class="py-6 font-bold text-2xl">Login to your account</div>
    <form class="text-slate-500 flex flex-col" @submit.prevent>
      <label class="mb-2">Email</label>
      <InputField :placeholder="'your email@introcept.co'" v-model="email" />

      <div v-if="v$.email.$error" class="flex pt-2 text-red-600">
        <img src="../assets/WarningIcon.svg" class="pr-1" />
        Sorry, we don't recognise this email address
      </div>

      <label class="mt-4 mb-2">Password</label>
      <PasswordField v-model="password" />

      <div v-if="v$.password.$error" class="flex pt-2 text-red-600">
        <img src="../assets/WarningIcon.svg" class="pr-1" />
        Incorrect password. Try again or click Forgot Password to reset it.
      </div>
      <button
        @click="submitForm"
        class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
      >
        Login
      </button>
    </form>
    <div class="flex justify-center">
      <button @click="changePassword" class="py-4 text-indigo-600 font-bold">
        Forgot password?
      </button>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import InputField from "../components/InputField.vue";
import PasswordField from "../components/PasswordField.vue";

export default {
  components: {
    InputField,
    PasswordField,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  emits: ["rememberedPassword"],
  data() {
    return {
      email: "",
      password: "",
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

    changePassword() {
      this.$emit("rememberedPassword", false);
    },
  },
};
</script>
