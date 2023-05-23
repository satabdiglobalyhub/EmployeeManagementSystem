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
    <div class="flex justify-start gap-7 mt-6 text-xl text-indigo-600">
      <div
        :class="{
          'bg-indigo-600': PersonalDetail,
          'text-white': PersonalDetail,
          rounded: PersonalDetail,
          'p-1': PersonalDetail,
        }"
      >
        Personal Details
      </div>
      <div
        :class="{
          'bg-indigo-600': !PersonalDetail && EducationalDetail,
          'text-white': !PersonalDetail && EducationalDetail,
          rounded: !PersonalDetail && EducationalDetail,
          'p-1': !PersonalDetail && EducationalDetail,
        }"
      >
        Educational Details
      </div>
      <div
        :class="{
          'bg-indigo-600': !PersonalDetail && !EducationalDetail,
          'text-white': !PersonalDetail && !EducationalDetail,
          rounded: !PersonalDetail && !EducationalDetail,
          'p-1': !PersonalDetail && !EducationalDetail,
        }"
      >
        Key Employment Details
      </div>
    </div>
    <div>
      <div v-if="PersonalDetail">
        <PersonalDetailForm
          @addEmployee="backToList"
          @addPersonalDetail="gotoEducationDetails"
          @checkValidation="gotoEducationDetails"
        />
      </div>
      <div v-if="!PersonalDetail && EducationalDetail">
        <EducationalDetailForm
          @addEducationalDetail="gotoKeyEmplomentDetails"
          @checkValidation="gotoKeyEmplomentDetails"
        />
      </div>
      <div v-if="!PersonalDetail && !EducationalDetail">
        <KeyEmploymentDetail />
      </div>
    </div>
    <div class="flex justify-end gap-6 border-t-2 p-4">
      <button @click="backToList" class="bg-slate-100 p-2 border rounded">
        Cancel
      </button>
      <button
        @click="detailsEntered"
        class="bg-indigo-600 text-white p-2 border rounded"
      >
        Save and Countinue
      </button>
    </div>
  </section>
</template>

<script>
import PersonalDetailForm from "./PersonalDetailForm.vue";
import EducationalDetailForm from "./EducationalDetailForm.vue";
import KeyEmploymentDetail from "./KeyEmploymentDetail.vue";

export default {
  emits: ["addEmployee", "addPersonalDetail"],
  data() {
    return {
      PersonalDetail: true,
      EducationalDetail: true,
    };
  },
  components: {
    PersonalDetailForm,
    EducationalDetailForm,
    KeyEmploymentDetail,
  },
  methods: {
    backToList() {
      this.$emit("addEmployee", false);
    },
    gotoEducationDetails() {
      this.PersonalDetail = false;
    },
    gotoKeyEmplomentDetails() {
      this.EducationalDetail = false;
    },
    detailsEntered() {
      console.log("entered");
    },
  },
};
</script>
