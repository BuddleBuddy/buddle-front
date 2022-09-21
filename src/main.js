import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";

import axios from 'axios'

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount("#app");