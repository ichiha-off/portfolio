/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import TopView from "@/views/TopView.vue";

const routes = [
  {
    path: "/",
    name: "TopView",
    component: TopView,
  },
  {
    path: "/product/:id",
    name: "ProductItem",
    component: () => import("@/views/ProductItem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 700);
    });
  },
});

export default router;
