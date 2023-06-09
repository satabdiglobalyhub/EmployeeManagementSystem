import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../pages/LoginPage.vue";
import EmployeeListingPage from "../pages/EmployeeListingPage.vue";

import PageNotFound from "../PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/employeelist",
      name: "EmployeeListingPage",
      component: EmployeeListingPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
