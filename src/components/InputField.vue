<template class="flex flex-col">
  <input
    :placeholderText="placeholderText"
    v-model="inputValue"
    class="border-2 rounded p-3 w-full"
  />
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
};
</script>
