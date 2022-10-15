import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/geolocation',
      name: 'geolocation',
      component: () => import('../views/GeolocationView.vue')
    },
  ]
})

export default router
