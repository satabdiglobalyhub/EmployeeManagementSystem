<template>
  <div class="flex justify-between my-6">
    <div class="w-3/5">
      <form
        @submit.prevent
        @keydown.enter="personalDetailsEntered()"
        @change="checkValidation()"
      >
        <div class="flex gap-6">
          <div class="flex flex-col gap-1">
            <label>First Name*</label>
            <InputField :placeholder="'Enter First Name'" v-model="firstName" />
          </div>
          <div class="flex flex-col gap-1">
            <label>Last Name*</label>
            <InputField :placeholder="'Enter Last Name'" v-model="lastName" />
          </div>
        </div>

        <div class="mt-3 flex flex-col gap-1">
          <label>Email Address*</label>
          <InputField
            :placeholder="'Enter Email Address'"
            v-model="emailAddress"
          />
        </div>

        <div class="mt-3 flex gap-4">
          <div class="w-3/4 flex flex-col gap-1">
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

          <div class="flex flex-col gap-1">
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

        <div class="mt-3 flex flex-col gap-1">
          <label>Current Address*</label>
          <InputField
            :placeholder="'Enter Current Address'"
            v-model="currentAddress"
          />
        </div>

        <div class="mt-3 flex gap-4">
          <div class="flex flex-col gap-1">
            <label>PAN Number</label>
            <InputField :placeholder="'Enter PAN Number'" v-model="panNumber" />
          </div>

          <div class="flex flex-col gap-1">
            <label>Bank Account Number</label>
            <InputField
              :placeholder="'Enter Account Number'"
              v-model="bankAccountNumber"
            />
          </div>
        </div>

        <div class="mt-3 flex flex-col gap-1">
          <label>Documents*</label>
          <div
            @click="browseFiles"
            @dragover.prevent
            @drop="handleFileDrop"
            class="border-2 border-dotted border-indigo-600 rounded p-3 w-full flex gap-3"
          >
            <img src="../assets/uploadIcon.svg" />
            <div>
              <input
                type="file"
                ref="fileInput"
                style="display: none"
                multiple
                @change="handleFileChange"
              />
              <button class="flex">
                Drag a file here or
                <div class="pl-1 text-indigo-600">Browse</div>
              </button>
            </div>
          </div>
          <div v-if="selectedFiles && selectedFiles.length > 0">
            <ul class="flex gap-2 mt-3">
              <li
                v-for="file in selectedFiles"
                :key="file.name"
                class="flex p-2 border-2 rounded relative"
              >
                <img src="../assets/fileIcon.svg" class="w-7" />
                <div class="px-2 flex flex-col">
                  <div>{{ file.name }}</div>
                </div>

                <button
                  @click="removeFile(file)"
                  class="absolute -right-3 -top-3"
                >
                  <img src="../assets/xIcon.svg" alt="'x'" class="w-8" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>

    <div class="flex flex-col w-1/4 mt-10 text-indigo-600">
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        class="hidden"
        @change="handleImageUpload"
      />
      <label for="imageUpload" class="cursor-pointer">
        <img
          id="previewImage"
          :src="
            selectedImage
              ? selectedImage
              : `/src/assets/defaultEmployeePicture.svg`
          "
          class="w-60 h-60 rounded-full"
        />
        <div class="p-5 ml-8 text-xl">Upload Image</div>
      </label>
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
      selectedFiles: [],
      selectedImage: "",
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
      selectedFiles: {
        required,
      },
      selectedImage: {
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
    browseFiles() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const newFiles = Array.from(event.target.files);
      this.selectedFiles.push(...newFiles);
    },
    handleFileDrop(event) {
      event.preventDefault();
      const newFiles = Array.from(event.dataTransfer.files);
      this.selectedFiles.push(...newFiles);
    },
    removeFile(file) {
      this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.selectedImage = e.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>
