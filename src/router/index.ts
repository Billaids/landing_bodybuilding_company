import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/agbs',
    name: 'agbs',
    component: () => import('../views/AGBs.vue')
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('../views/Datenschutz.vue')
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;