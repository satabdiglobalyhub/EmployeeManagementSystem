<template>
  <div v-for="index in educationCount" :key="index">
    <div class="py-8 border-b-2 w-2/4">
      <form
        @submit.prevent
        @keydown.enter="educationalDetailsEntered()"
        @change="checkValidation()"
      >
        <div class="flex justify-between mb-3">
          <div class="text-indigo-600 pb-4">Education {{ index }}</div>
          <button
            v-if="index > 1"
            class="flex items-center gap-2 text-red-700"
            @click="deleteEducationDetailForm(index)"
          >
            <img src="../assets/deleteIcon.svg" /> Remove
          </button>
        </div>

        <div class="flex gap-11 mb-3">
          <div>
            <div>Education Level</div>
            <div>
              <InputField
                :placeholder="'Enter Education Level'"
                v-model="educationLevel"
              />
            </div>
          </div>

          <div>
            <div>Passed Year(A.D)</div>
            <div>
              <InputField
                :placeholder="'Enter Passed Year'"
                v-model="passedYear"
              />
            </div>
          </div>
        </div>
        <div>
          <div>Institution</div>
          <div>
            <InputField
              :placeholder="'Enter Institution'"
              v-model="institution"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- <button
    class="text-indigo-600 my-5 border-2 rounded flex items-center gap-2 p-2 shadow-lg"
    @click="addEducationDetailForm"
  >
    <img class="bg-indigo-600" src="../assets/AddIcon.svg" />
    Add More
  </button> -->
</template>

<script>
import InputField from "../components/InputField.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  alpha,
  numeric,
  minLength,
  maxLength,
} from "@vuelidate/validators";

export default {
  components: {
    InputField,
  },

  data() {
    return {
      educationCount: "1",
      educationLevel: "",
      passedYear: "",
      institution: "",
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  emits:["addEducationalDetail","checkValidation"],
  validations() {
    return {
      educationLevel: {
        required,
        alpha,
      },
      passedYear: {
        required,
        numeric,
        minLength: 4,
        maxLength: 4,
      },
      institution: {
        required,
        alpha,
      },
    };
  },
  methods: {
    addEducationDetailForm() {
      this.educationCount++;
    },
    deleteEducationDetailForm(index) {
      console.log("deletedForm", index);
    },
    async educationalDetailsEntered() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.$emit("addEducationalDetail", true);
    },
    async checkValidation() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.$emit("checkValidation", true);
    },
  },
};
</script>
