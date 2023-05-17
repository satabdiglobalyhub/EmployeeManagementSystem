<template>
  <header class="flex justify-between items-center">
    <div class="text-3xl">EMPLOYEE DETAILS</div>
    <button
      @click="backToList"
      class="border-2 rounded p-3 bg-indigo-600 text-white font-bold flex justify-center items-center gap-2"
    >
      <img src="../assets/backIcon.svg" class="bg-white w-3" />
      Back to List
    </button>
  </header>
  <section>
    <div class="flex justify-between mt-6 text-xl text-indigo-600">
      <div>Personal Details</div>
      <div>Educational Details</div>
      <div>Key Employment Details</div>
    </div>
    <div>
      <div><PersonalDetailForm /></div>
      <div><EducationalDetailForm /></div>
      <div><KeyEmploymentDetail /></div>
    </div>
  </section>
</template>

<script>
import PersonalDetailForm from "./PersonalDetailForm.vue";
import EducationalDetailForm from "./EducationalDetailForm.vue";
import KeyEmploymentDetail from "./KeyEmploymentDetail.vue";

export default {
  emits: ["addEmployee"],
  components: {
    PersonalDetailForm,
    EducationalDetailForm,
    KeyEmploymentDetail,
  },
  methods: {
    backToList() {
      this.$emit("addEmployee", false);
    },
  },
};
</script>
