<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="text-8xl">404</div>
    <div class="text-2xl">Page Not Found</div>
    <RouterLink
        :to="{ name: 'LoginPage' }"
        class="rounded p-3 mt-6 bg-indigo-600 text-white font-bold flex justify-center"
      >
        <div>LogIn Page</div>
      </RouterLink>
  </div>
</template>
