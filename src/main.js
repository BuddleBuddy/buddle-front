import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount("#app");