<template>
  <input :placeholder="placeholderText" v-model="inputValue" class="border-2 rounded p-3" />
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    placeholderText: {
      type: String,
      default: "Input Data",
    },
  },
  methods: {
    clearInput() {
      this.inputValue = "";
    },
  },
};
</script>
