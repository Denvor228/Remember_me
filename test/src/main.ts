import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import DefaultLayout from "./layouts/Default-layout.vue";
import YouTube from "vue3-youtube";
import Page1 from "../src/views/lesson-1.vue";
import Page2 from "../src/views/lesson-2.vue";
import Page3 from "../src/views/lesson-3.vue";
import Page4 from "../src/views/lesson-4.vue";
import Page5 from "../src/views/lesson-5.vue";

const router = createRouter({
  routes: [
    {
      path: "/lesson1",
      name: "Home",
      component: Page1,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "/lesson2",
      name: "lesson2",
      component: Page2,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "/lesson3",
      name: "lesson3",
      component: Page3,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "/lesson4",
      name: "lesson4",
      component: Page4,
      meta: {
        layout: "default-layout",
      },
    },
    {
      path: "/lesson5",
      name: "lesson5",
      component: Page5,
      meta: {
        layout: "default-layout",
      },
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);

app.component("default-layout", DefaultLayout);
app.component("YouTube", YouTube);

app.use(router);
app.mount("#app");
