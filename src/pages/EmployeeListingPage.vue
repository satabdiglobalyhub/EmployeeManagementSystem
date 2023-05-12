<template>
  <section class="flex justify-around">
    <div class="p-2">
      <CompanyHeaderLogo />
    </div>
    <div class="flex items-center gap-4">
      <div class="mt-5">DP</div>
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

  <section class="bg-slate-100 h-screen">
    <header class="flex justify-between">
      <div class="flex gap-x-2">
        <div>
          <div>Employees</div>
          <div>total</div>
        </div>
        <div>all</div>
      </div>
      <div>
        <div>search</div>
        <div>add</div>
        <div>import</div>
      </div>
    </header>
    <body>
      <EmployeeTable :data="users"/>
    </body>

    <footer class="flex">
      <div>backlogo</div>
      <div>Prev</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>Next</div>
      <div>nextlogo</div>
    </footer>
  </section>
</template>

<script>
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
import EmployeeTable from "../components/EmployeeTable.vue";
export default {
  components: {
    CompanyHeaderLogo,
    EmployeeTable,
  },
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
      ],
    };
  },
};
</script>
