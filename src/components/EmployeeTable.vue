<template>
  <table>
    <thead>
      <tr>
        <th class="flex">Full Name/Email</th>
        <th>Designation</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Team</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in displayedEmployees" :key="employee.id">
        <div class="flex gap-3 mt-3">
          <img src="../assets/defaultEmployeePicture.svg" />
          <div class="flex flex-col">
            <td>{{ employee.name }}</td>
            <td class="text-indigo-600">{{ employee.email }}</td>
          </div>
        </div>
        <td>{{ employee.designation }}</td>
        <td>{{ employee.phone }}</td>
        <td>{{ employee.status }}</td>
        <td>{{ employee.team }}</td>
        <td>
          <select class="border rounded shadow text-indigo-600">
            <option class="">View Details</option>
            <option>Set as Alumni</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex items-center mt-4 gap-4 text-indigo-600">
    <button
      class="rounded p-2 flex gap-3"
      :disabled="currentPage === 1"
      @click="previousPage"
    >
      <img class="w-3" src="../assets/backIcon.svg" />
      Previous
    </button>

    <div>{{ currentPage }} / {{ totalPages }}</div>

    <button
      class="rounded p-2 flex gap-3"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      Next
      <img class="w-3" src="../assets/nextIcon.svg" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    pageSize: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    displayedEmployees() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.data.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
  },
  methods: {
    previousPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
  },
};
</script>
