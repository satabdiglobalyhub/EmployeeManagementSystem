<template>
  <section
    class="w-3/4 mt-6"
    @keydown.enter="keyEmploymentDetailsEntered()"
    @change="checkValidation()"
  >
    <div class="flex justify-between">
      <span>
        Organization*
        <select class="border-2 rounded p-3 w-full" v-model="introceptCountry">
          <option disabled value="">Please Select</option>
          <option value="introceptAustralia">Introcept Australia</option>
          <option value="introceptNepal">Introcept Nepal</option>
        </select>
      </span>
      <span>
        Join Date*
        <datepicker
          v-model="JoinDate"
          :placeholder="'DD-MM-YYYY'"
          :enable-time-picker="false"
        ></datepicker>
      </span>
    </div>

    <div class="flex justify-between gap-8">
      <span>
        Current Position*
        <InputField :placeholder="'Enter Current Position'" />
      </span>
      <span>
        Work Schedule*
        <select class="border-2 rounded p-3 w-full" v-model="workSchedule">
          <option disabled value="">Please Select</option>
          <option value="introceptAustralia">Monday-Friday(Full time)</option>
          <option value="introceptNepal">Monday-Friday(Part time)</option>
        </select>
      </span>
    </div>

    <div>
      Manager*
      <InputField :placeholder="'Enter Manager'" v-model="managerName" />
    </div>

    <div>
      Manages
      <InputField :placeholder="'Enter Manages'" v-model="managesName" />
    </div>

    <div>
      Superpowers
      <InputField :placeholder="'Enter Superpowers'" v-model="superpower" />
    </div>
  </section>
</template>

<script>
import InputField from "../components/InputField.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import useVuelidate from "@vuelidate/core";
import { required, alpha } from "@vuelidate/validators";

export default {
  components: {
    InputField,
    Datepicker,
  },
  data() {
    return {
      introceptCountry: "",
      JoinDate: "",
      workSchedule: "",
      managerName: "",
      managesName: "",
      superpower: "",
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  emits: ["addKeyEmploymentDetail", "checkValidation"],
  validations() {
    return {
      introceptCountry: { required },
      JoinDate: { required },
      workSchedule: { required },
      managerName: { required, alpha },
    };
  },
  methods: {
    async keyEmploymentDetailsEntered() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      
      this.$emit("addKeyEmploymentDetail", true);
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
