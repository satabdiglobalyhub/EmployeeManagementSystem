<template>
  <div>
    <CompanyHeaderLogo />
  </div>
  <div class="flex flex-col">
    <div class="text-2xl font-bold pt-10">RESET PASSWORD</div>
    <div class="pt-2 text-slate-500">
      Your new password must be different from previous used one
    </div>
    <div class="py-2 text-slate-500 flex flex-col gap-2">
      Create new password
      <PasswordField v-model="password.new" />

      Password must have atleast 8 characters,1 lowercase,1 uppercase, 1 number
      and 1 special character
    </div>
    <div class="flex flex-col gap-2 text-slate-500">
      Re-enter new password
      <PasswordField v-model="password.confirm" />
    </div>

    <button
      @click="resetPassword"
      class="rounded p-3 mt-8 bg-indigo-600 text-white font-bold"
    >
      Reset Password
    </button>
  </div>
</template>

<script>
import PasswordField from "../components/PasswordField.vue";
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: {
    PasswordField,
    CompanyHeaderLogo,
  },
  data() {
    return {
      v$: useVuelidate(),
      password: {
        new: "",
        confirm: "",
      },
    };
  },
  validations() {
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:";'<>,.?\/]).{8,}$/;
    return {
      password: {
        new: {
          required,
          passwordFormat: (value) => passwordFormat.test(value),
        },
        confirm: {
          required,
          passwordFormat: (value) => passwordFormat.test(value),
        },
      },
    };
  },
  methods: {
    async resetPassword() {
      const result = await this.v$.$validate();
      if (result) {
        alert("Form successfully submitted");
      } else {
        alert("Failed Form Validation");
      }
    },
  },
};
</script>
