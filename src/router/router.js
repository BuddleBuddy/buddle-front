import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Introduce.vue";
import Contest from "../views/Contest.vue";
import History from "../views/History.vue";



const routes = [
    {
      path: "/",
      component: Contest,
    },
    {
      path: "/intro",
      component: Intro,
    },
    {
      path: "/contest",
      component: Contest,
    },
    {
      path: "/history",
      component: History,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;