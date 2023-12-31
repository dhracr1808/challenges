import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/products?filter=all",
  },
  {
    path: "/products",
    name: "index",
    meta: { home: true },
    component: () => import("./../App.vue"),
  },
];

export const router = createRouter({ routes, history: createWebHistory() });
