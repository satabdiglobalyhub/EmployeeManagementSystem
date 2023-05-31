<template>
  <section class="flex justify-around">
    <div class="h-32" style="transform: scale(0.7)">
      <CompanyHeaderLogo />
    </div>
    <div class="flex items-center gap-4">
      <div class="mt-5 w-12"><img src="../assets/DisplayPicture.jpg" /></div>
      <div class="mt-5">Satabdi Gautam</div>

      <RouterLink
        :to="{ name: 'LoginPage' }"
        class="rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
      >
        <div class="flex px-2"><img src="../assets/logoutIcon.svg" /></div>
        <div>Logout</div>
      </RouterLink>
    </div>
  </section>

  <section v-if="!viewEmployeeDetails" class="bg-slate-100 w-full h-screen">
    <div class="flex justify-center pt-8">
      <div
        class="relative bg-white w-3/4 pt-12 pb-4 px-20 drop-shadow-xl border rounded"
      >
        <div v-if="!addEmployee && !importFromExcel">
          <header class="flex justify-between">
            <div class="flex flex-col gap-x-2 justify-between">
              <div class="flex gap-4 mt-3">
                <div class="text-2xl">EMPLOYEES</div>
                <select class="border rounded shadow text-indigo-600">
                  <option>All</option>
                  <option>Active</option>
                  <option>Alumni</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>QA</option>
                  <option>Product</option>
                  <option>Sales</option>
                  <option>Customer Success</option>
                  <option>Marketing</option>
                  <option>HR & Admin</option>
                </select>
              </div>
              <div>Total {{ employeeCount }} results</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center border rounded gap-2">
                <img src="../assets/searchIcon.svg" class="pl-2" />
                <InputField
                  v-model="employeeName"
                  :placeholder="'Search by name'"
                  class="w-36 border-none"
                  @input="filterEmployees"
                />
              </div>
              <button
                @click="toggleAddEmployee"
                class="rounded p-3 bg-indigo-600 text-white flex justify-center items-center gap-2"
              >
                <img src="../assets/AddIcon.svg" />
                Add Employee
              </button>

              <button
                @click="toggleImportFromExel"
                class="rounded p-3 bg-fuchsia-700 text-white flex justify-center items-center gap-2"
              >
                <img src="../assets/importIcon.svg" />
                Import from Excel
              </button>
            </div>
          </header>

          <body class="mt-10">
            <EmployeeTable
              :data="usersData"
              @viewDetails="toggleEmployeeDetails"
            />
          </body>
        </div>
        <div v-if="addEmployee">
          <AddEmployeeForm @addEmployee="toggleAddEmployee" />
        </div>
        <div v-if="importFromExcel">
          <ImportFromExcel @importEmployee="toggleImportFromExel" />
        </div>
      </div>
    </div>
  </section>

  <section v-else-if="viewEmployeeDetails">
    <ViewEmployeeDetails
      :data="selectedEmployee"
      @viewEmployee="toggleViewEmployee"
    />
  </section>
</template>

<script>
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
import EmployeeTable from "../components/EmployeeTable.vue";
import InputField from "../components/InputField.vue";
import AddEmployeeForm from "../form/AddEmployeeForm.vue";
import ImportFromExcel from "../form/ImportFromExcel.vue";
import ViewEmployeeDetails from "../pages/ViewEmployeeDetails.vue";

export default {
  components: {
    CompanyHeaderLogo,
    EmployeeTable,
    InputField,
    AddEmployeeForm,
    ImportFromExcel,
    ViewEmployeeDetails,
  },
  data() {
    return {
      usersData: [],
      filteredData: "",
      employeeCount: "",
      employeeName: "",
      addEmployee: false,
      importFromExcel: false,
      viewEmployeeDetails: false,
      selectedEmployee: "",
    };
  },

  methods: {
    async fetchEmployeeData() {
      const res = await fetch(
        "https://644b8ddd17e2663b9df22d47.mockapi.io/employee"
      );
      const data = await res.json();
      this.employeeCount = data.length;
      this.filteredData = data;
      return (this.usersData = data);
    },
    filterEmployees() {
      const newData = this.filteredData.filter((user) => {
        const employeeName = user.name.toLowerCase();
        const searchName = this.employeeName.toLowerCase();
        return employeeName.includes(searchName);
      });
      this.usersData = newData;
    },
    toggleAddEmployee() {
      this.addEmployee = !this.addEmployee;
      this.importFromExcel = false;
    },
    toggleImportFromExel() {
      this.importFromExcel = !this.importFromExcel;
    },
    toggleEmployeeDetails(employee) {
      this.viewEmployeeDetails = !this.viewEmployeeDetails;
      this.selectedEmployee = employee;
    },
    toggleViewEmployee() {
      this.viewEmployeeDetails = !this.viewEmployeeDetails;
    },
  },
  mounted() {
    this.fetchEmployeeData();
  },
};
</script>
