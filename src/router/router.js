import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Introduce.vue";
import Contest from "../views/Contest.vue";
import History from "../views/History.vue";
import Event1 from "../views/Event1.vue";
import Event2 from "../views/Event2.vue";
import Event3 from "../views/Event3.vue";
import Event4 from "../views/Event4.vue";
import Event5 from "../views/Event5.vue";
import Event6 from "../views/Event6.vue";
import Event7 from "../views/Event7.vue";
import Event8 from "../views/Event8.vue";
import Event9 from "../views/Event9.vue";
import Event10 from "../views/Event10.vue";
import Event11 from "../views/Event11.vue";
import Event12 from "../views/Event12.vue";
import Header from "../components/Header.vue";
import EmptyHeader from "../components/EmptyHeader.vue";

const routes = [
  {
      path: '/',
      name: 'Header',
      component: Header,
      children: [
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
      ],
  },
  {
      path: '/',
      name: 'emptyHeader',
      component: EmptyHeader,
      children: [
          {
              path: "/event1",
              component: Event1,
            },
            {
              path: "/event2",
              component: Event2,
            },
            {
              path: "/event3",
              component: Event3,
            },
            {
              path: "/event4",
              component: Event4,
            },
            {
              path: "/event5",
              component: Event5,
            },
            {
              path: "/event6",
              component: Event6,
            },
            {
              path: "/event7",
              component: Event7,
            },
            {
              path: "/event8",
              component: Event8,
            },
            {
              path: "/event9",
              component: Event9,
            },
            {
              path: "/event10",
              component: Event10,
            },
            {
              path: "/event11",
              component: Event11,
            },
            {
              path: "/event12",
              component: Event12,
            },
      ],
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;