<template>
  <img src="../assets/mailLogo.svg" />
  <div class="py-5 font-bold text-2xl">Verify your email address</div>
  <div class="flex flex-col justify-center items-center">
    <div>We sent a recovery link at</div>
    <div class="text-indigo-600">{{ email }}</div>
  </div>
  <div class="flex justify-center">
    <button
      @click="resetPassword"
      class="rounded p-3 mt-6 bg-indigo-600 text-white font-bold "
    >
      GO TO EMAIL
    </button>
  </div>
</template>

<script>
export default {
  emits: ["toggleResetPassword"],
  props: {
    email: {
      type: String,
      default: "",
    },
  },
  methods: {
    resetPassword() {
      this.$emit("toggleResetPassword", true);
    },
  },
};
</script>
