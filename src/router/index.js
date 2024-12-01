import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../view/about.vue')
    },
    {
      path: '/jpxs',
      name: 'jpxs',
      component: () => import('../view/jpxs.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../view/contact.vue')
    },
    {
      path: '/',
      redirect: '/home',
    },
  ]
})
export default router
