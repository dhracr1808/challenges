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
    component: () => import("./../views/ProductsView.vue"),
  },

  {
    path: "/home",
    name: "Home",
    meta: { home: false },
    component: () => import("./../views/Homeview.vue"),
  },

  {
    path: "/galery",
    name: "Galery",
    meta: { home: false },
    component: () => import("./../views/Galery.vue"),
  },

  {
    path: "/carrosel",
    name: "Carrosel",
    meta: { home: false },
    component: () => import("./../views/Carrosel.vue"),
  },
];

export const router = createRouter({ routes, history: createWebHistory() });
