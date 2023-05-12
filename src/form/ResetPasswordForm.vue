<template>
  <div class="border-b-2">
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
      <div class="flex" :class="{ 'text-red-500': !passwordFormatMatch }">
        <img
          v-if="!passwordFormatMatch"
          src="../assets/WarningIcon.svg"
          class="pr-1"
        />
        Password must have atleast 8 characters,1 lowercase,1 uppercase, 1
        number and 1 special character
      </div>
    </div>
    <div class="flex flex-col gap-2 text-slate-500">
      Re-enter new password
      <PasswordField v-model="password.confirm" />
    </div>
    <div v-if="!passwordMatch" class="flex pt-2 text-red-600">
      <img src="../assets/WarningIcon.svg" class="pr-1" />
      The password you entered do not match.
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
import { required, sameAs } from "@vuelidate/validators";

export default {
  components: {
    PasswordField,
    CompanyHeaderLogo,
  },
  emits: ["resetPasswordSuccess"],
  data() {
    return {
      v$: useVuelidate(),
      password: {
        new: "",
        confirm: "",
      },
      passwordMatch: true,
      passwordFormatMatch: true,
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
          sameAs: (value) => value === this.password.new,
        },
      },
    };
  },
  methods: {
    async resetPassword() {
      const result = await this.v$.$validate();
      if (this.password.new != this.password.confirm) {
        this.passwordMatch = false;
      } else if (this.password.new == this.password.confirm) {
        this.passwordMatch = true;
      }
      if (result) {
        this.$emit("resetPasswordSuccess");
      } else if (!result) {
        this.passwordFormatMatch = false;
      }
    },
  },
};
</script>
