<template>
  <section class="flex justify-around">
    <div class="flex flex-col justify-center">
      <img src="../assets/companyLogo.svg" alt="CompanyLogo" class="h-11" />
      <div class="flex flex-col items-center">
        <div>IntroCept Employee</div>
        <div>Portal</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div>DP</div>
      <div>Name</div>

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
        <table></table>
    </body>
    <footer>
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
