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

  <section class="bg-slate-100 w-full h-screen">
    <div class="flex justify-center pt-8">
      <div class="relative bg-white w-3/4 pt-12 pb-4 px-20 drop-shadow-xl">
        <header class="flex justify-between">
          <div class="flex flex-col gap-x-2 justify-between">
            <div class="flex gap-4">
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
              />
            </div>
            <button
              class="rounded p-3 bg-indigo-600 text-white flex justify-center items-center gap-2"
            >
              <img src="../assets/AddIcon.svg" />
              Add Employee
            </button>
            <button
              class="rounded p-3 bg-fuchsia-700 text-white flex justify-center items-center gap-2"
            >
              <img src="../assets/importIcon.svg" />
              Import from Excel
            </button>
          </div>
        </header>

        <body class="mt-10">
          <EmployeeTable :data="usersData" />
        </body>
      </div>
    </div>
  </section>
</template>

<script>
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
import EmployeeTable from "../components/EmployeeTable.vue";
import InputField from "../components/InputField.vue";


export default {
  components: {
    CompanyHeaderLogo,
    EmployeeTable,
    InputField,
 
  },
  data() {
    return {
      usersData: [],
      employeeCount: "",
      employeeName: "",
      
    };
  },

  methods: {
    async fetchEmployeeData() {
      const res = await fetch(
        "https://644b8ddd17e2663b9df22d47.mockapi.io/employee"
      );
      const data = await res.json();
      this.employeeCount = data.length;
      return (this.usersData = data);
    },
  },
  mounted() {
    this.fetchEmployeeData();
  },
};
</script>
