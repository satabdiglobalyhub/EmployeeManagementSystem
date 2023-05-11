<template>
  <div
    class="flex border-2 rounded focus:ring-2 focus:ring-indigo-600"
    tabindex="0"
  >
    <InputField
      :type="!isPasswordVisible ? 'password' : 'text'"
      :placeholder="'your password'"
      class="border-none contain"
      v-model="password"
    />

    <div class="flex px-3" v-on:click="togglePasswordVisibility">
      <img v-if="!isPasswordVisible" src="../assets/eyeImage.svg" />
      <img v-else src="../assets/crossedEyeImage.svg" />
    </div>
  </div>
</template>

<script>
import InputField from "./InputField.vue";

export default {
  components: {
    InputField,
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    password: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {
      isPasswordVisible: false,
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>
