<template>
  <table>
    <thead>
      <tr>
        <th class="flex">Full Name/Email</th>
        <th class="pl-5">Designation</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Team</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody >
      <tr v-for="(employee, index) in displayedEmployees" :key="employee.id">
        <div class="flex gap-3 mt-3">
          <img src="../assets/defaultEmployeePicture.svg" />
          <div class="flex flex-col">
            <td>{{ employee.name }}</td>
            <td class="text-indigo-600">{{ employee.email }}</td>
          </div>
        </div>
        <td class="pl-5 text-center">{{ employee.designation }}</td>
        <td class="pl-4 ">{{ employee.phone }}</td>
        <td class="pl-2">{{ employee.status }}</td>
        <td class="pl-2">{{ employee.team }}</td>
        <td class="pl-2">
          <select
            class="border rounded shadow text-indigo-600"
            @change="updateStatus(employee, $event.target.value)"
          >
            <option value="default">View Details</option>
            <option value="alumni">Set as Alumni</option>
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
    updateStatus(employee, value) {
      if (value === "alumni") {
        employee.status = !employee.status;
        event.target.value = "default";
      }
    },
  },
};
</script>
