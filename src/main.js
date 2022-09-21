import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";

import axios from 'axios'


const VueApp = createApp(App);
VueApp.config.globalProperties.$axios = axios; 
VueApp.use(router);
VueApp.mount("#app");