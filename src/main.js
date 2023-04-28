import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { ValidationProvider } from "vee-validate";
import "./main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

// Vue.component("ValidationProvider", ValidationProvider);
// Vue.component("ValidationObserver", ValidationObserver);

