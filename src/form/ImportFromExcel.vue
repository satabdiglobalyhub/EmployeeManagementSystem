<template>
  <div class="flex justify-between">
    <div class="text-xl">IMPORT DATA FILE</div>
    <button
      @click="backToList"
      class="border-2 rounded p-3 bg-indigo-600 text-white font-bold flex justify-center items-center gap-2"
    >
      <img src="../assets/backIcon.svg" class="bg-white w-3" />
      Back to List
    </button>
  </div>

  <div class="flex gap-3 mt-10 text-indigo-600">
    <img src="../assets/uploadIcon.svg" />
    Upload your file
  </div>
  <div class="flex flex-col items-center gap-4 border p-10 m-10 h-80">
    <div class="text-xl">Drop your file here</div>
    <div class="flex gap-4 mt-6">
      <span><img src="../assets/csvIcon.svg" /></span>
      <span><img src="../assets/xlsxIcon.svg" /></span>
    </div>
    <div class="flex items-center gap-2">
      <span><img src="../assets/line.svg" /></span>
      <span>OR</span>
      <span><img src="../assets/line.svg" /></span>
    </div>
    <div
      @click="browseFiles"
      @dragover.prevent
      @drop="handleFileDrop"
      class="border-2 rounded p-3 w-52 bg-indigo-600 text-white font-bold flex justify-center items-center gap-2"
    >
      <div>
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          multiple
          @change="handleFileChange"
        />
        <button class="flex">Choose a file</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["importEmployee"],
  methods: {
    backToList() {
      this.$emit("importEmployee", false);
    },
    browseFiles() {
      this.$refs.fileInput.click();
    },
    handleFileDrop(event) {
      event.preventDefault();
      const newFiles = Array.from(event.dataTransfer.files);
      this.selectedFiles.push(...newFiles);
    },
    handleFileChange(event) {
      const newFiles = Array.from(event.target.files);
      this.selectedFiles.push(...newFiles);
    },
  },
};
</script>
