<template>
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import LoginPage from "./components/LoginPage.vue";

export default {
  components: {
    LoginPage,
  },
};
</script>
