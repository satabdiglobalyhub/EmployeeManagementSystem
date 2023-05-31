<template>
  <section class="bg-slate-100 w-full h-screen flex flex-col gap-10">
    <section class="bg-indigo-200 mx-52 border rounded">
      <div class="flex flex-col items-center py-4">
        <img src="../assets/defaultEmployeePicture.svg" class="w-1/6 my-5" />
        <span>{{ employee }}employee.name</span>
        <span>employee.position</span>
      </div>
      <div class="flex justify-between m-5">
        <div class="flex gap-5 justify-start">
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
          <button
            @click="backToList"
            class="rounded p-1 bg-indigo-600 text-white font-bold flex justify-center items-center gap-2"
          >
            <img src="../assets/backIcon.svg" class="bg-white w-3" />
            Back to List
          </button>
        </div>
      </div>
    </section>
    <section class="flex justify-around mx-52 bg-white py-5">
      <div v-if="PersonalDetail">2</div>
    </section>
    <section class="flex justify-around mx-52 bg-white py-5">3</section>
  </section>
</template>

<script>
export default {
  props: {
    data: {},
  },
  data() {
    return {
      PersonalDetail: "true",
      EducationalDetail: "",
    };
  },
  emits: ["viewEmployee"],
  methods: {
    backToList() {
      this.$emit("viewEmployee");
    },
  },
  mounted(){

  },
};
</script>
