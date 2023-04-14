import { createRouter, createWebHistory } from "vue-router";
import notFound from "@/views/NotFound.vue";
import returnToLastPage from "@/views/ReturnToLastPage.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files
import routesSpaHope from "./routesSpaHope.js";
import routesSpaMultiply1 from "./routesSpaMultiply1.js";
import routesSpaMultiply2 from "./routesSpaMultiply2.js";
import routesSpaMultiply3 from "./routesSpaMultiply3.js";
import routesSpaTc from "./routesSpaTc.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routesSpaHope,
    ...routesSpaMultiply1,
    ...routesSpaMultiply2,
    ...routesSpaMultiply3,
    ...routesSpaTc,
    {
      path: "/",
        name: "home",
        component:returnToLastPage,
    },
    {
      path: "/index",
        name: "spa-index",
        component: function () {
          return import(
            "../views/M2/spa/index.vue"
          );
        }
    },

    {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: notFound,
    }
  ],
});

export default router;
