import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Introduce.vue";
import Contest from "../views/Contest.vue";
import History from "../views/History.vue";
import Place from "../components/intro/place";
import Store from "@/components/intro/store";



const routes = [
    {
      path: "/index.html",
      redirect: "/contest",
    },
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
    },
    {
        path: "/intro/place",
        component: Place
    },
    {
        path: "/intro/store",
        component: Store
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;