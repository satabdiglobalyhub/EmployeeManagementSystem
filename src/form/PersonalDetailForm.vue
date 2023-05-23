<template>
  <div class="flex justify-between my-6">
    <div class="w-3/5">
      <form
        @submit.prevent
        @keydown.enter="personalDetailsEntered()"
        @change="checkValidation()"
      >
        <div class="flex gap-4">
          <div>
            <label>First Name*</label>
            <InputField :placeholder="'Enter First Name'" v-model="firstName" />
          </div>
          <div>
            <label>Last Name*</label>
            <InputField :placeholder="'Enter Last Name'" v-model="lastName" />
          </div>
        </div>

        <label>Email Address*</label>
        <InputField
          :placeholder="'Enter Email Address'"
          v-model="emailAddress"
        />

        <div class="flex gap-4">
          <div class="w-3/4">
            <label>Contact Number*</label>
            <div class="flex border-2 rounded">
              <select class="border-r-2 bg-gray-200" v-model="countryCode">
                <option value="977" class="flex">Nepal</option>
                <option value="61" class="flex">Australia</option>
              </select>
              <div class="flex items-center px-2">
                <div v-if="countryCode === '61'">+61</div>
                <div v-else="countryCode === '977'">+977</div>
              </div>

              <InputField
                :placeholder="'Enter Contact Number'"
                v-model="contactNumber"
                class="border-none"
              />
            </div>
          </div>

          <div>
            <label>Date of Birth*</label>
            <div>
              <datepicker
                v-model="dateofBirth"
                :placeholder="'DD-MM-YYYY'"
                :enable-time-picker="false"
              ></datepicker>
            </div>
          </div>
        </div>

        <label>Current Address*</label>
        <InputField
          :placeholder="'Enter Current Address'"
          v-model="currentAddress"
        />

        <div class="flex gap-4">
          <div>
            <label>PAN Number</label>
            <InputField :placeholder="'Enter PAN Number'" v-model="panNumber" />
          </div>

          <div>
            <label>Bank Account Number</label>
            <InputField
              :placeholder="'Enter Account Number'"
              v-model="bankAccountNumber"
            />
          </div>
        </div>

        <label>Documents</label>
        <div class="border-2 border-dotted rounded p-3 w-full flex gap-3">
          <img src="../assets/uploadIcon.svg" />
          Drag a file here or Browse
        </div>
      </form>
    </div>
    <div class="flex flex-col w-1/4 mt-10 text-indigo-600">
      <img src="../assets/defaultEmployeePicture.svg" />
      <div class="p-5 ml-9">Upload Image</div>
    </div>
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";
import useVuelidate from "@vuelidate/core";
import { required, alpha, numeric } from "@vuelidate/validators";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    InputField,
    Datepicker,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      contactNumber: "",
      dateofBirth: "",
      currentAddress: "",
      panNumber: "",
      bankAccountNumber: "",
      countryCode: "977",
    };
  },
  emits: ["addPersonalDetail", "checkValidation"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    const emailFormat = /^[a-z]+[.]+[a-z]+@introcept\.co$/;
    return {
      firstName: {
        required,
        alpha,
      },
      lastName: {
        required,
        alpha,
      },
      emailAddress: {
        required,
        emailFormat: (value) => emailFormat.test(value),
      },
      contactNumber: {
        required,
        numeric,
      },
      dateofBirth: {
        required,
      },
      currentAddress: {
        required,
      },
    };
  },
  methods: {
    async personalDetailsEntered() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.$emit("addPersonalDetail", true);
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
