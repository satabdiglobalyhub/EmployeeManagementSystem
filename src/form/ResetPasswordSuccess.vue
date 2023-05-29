<template>
  <div class="border-b-2">
    <CompanyHeaderLogo />
  </div>
  <div class="flex flex-col gap-10 py-6">
    <div class="font-bold text-3xl mt-4">Password Reset Successfull</div>
    <div class="text-slate-500">
      Your password has ben reset. Please click next to login.
    </div>
    <button
      @click="returnToLogin"
      class="border-2 rounded p-3 bg-indigo-600 text-white font-bold flex justify-center"
    >
      Return to Login
    </button>
  </div>
</template>

<script>
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
export default {
  components: {
    CompanyHeaderLogo,
  },
  emits: ["noRecoveryLinkNeeded", "rememberedPassword"],
  methods: {
    returnToLogin() {
      this.$emit("noRecoveryLinkNeeded", true);
      this.$emit("rememberedPassword", true);
    },
  },
};
</script>
