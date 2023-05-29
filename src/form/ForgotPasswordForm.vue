<template>
  <div class="text-2xl font-bold py-10">Reset your password</div>
  <div class="pb-6 text-slate-500">
    Enter the email associated with your account and we'll send an email with
    instructions to reset your password.
  </div>

  <form class="text-slate-500 flex flex-col" @submit.prevent>
    <label class="mb-2 font-bold">We'll send a recovery link to</label>
    <InputField :placeholder="'your email@introcept.co'" v-model="email" />
    <button
      @click="recoveryLink"
      class="border-2 rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
    >
      Continue
    </button>

    <div class="flex justify-center">
      <button
        @click="changePassword"
        class="py-4 text-indigo-600 font-bold flex items-center gap-2"
      >
        <img src="../assets/backIcon.svg" />
        Return to login
      </button>
    </div>
  </form>
</template>

<script>
import InputField from "../components/InputField.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      email: "",
    };
  },
  emits: ["isRecoveryLinkNeeded", "email"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    const emailFormat = /^[a-z]+[.]+[a-z]+@introcept\.co$/;
    return {
      email: {
        required,
        emailFormat: (value) => emailFormat.test(value),
      },
    };
  },
  methods: {
    async recoveryLink() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      } else {
        this.$emit("isRecoveryLinkNeeded", false);
        this.$emit("email", this.email);
      }
    },
    changePassword() {
      this.$emit("isRecoveryLinkNeeded", true);
    },
  },
};
</script>
