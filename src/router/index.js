import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/presentation",
    name: "Presentation",
    component: () => import("../views/Presentation.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/Contact.vue")
  },
  {
    path: '/admin-skynet',
    name: 'Admin Skynet',
    component: () => import('../views/AdminSkyNet.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
