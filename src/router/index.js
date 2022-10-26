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
    {
      path: '/camera',
      name: 'camera',
      component: () => import('../views/CameraView.vue')
    },
    {
      path: '/device',
      name: 'device',
      component: () => import('../views/DeviceFeatures.vue')
    },
    {
      path: '/speech',
      name: 'speech',
      component: () => import('../views/SpeechView.vue')
    },
    {
      path: '/mysterious',
      name: 'mysterious',
      component: () => import('../views/MysteriousView.vue')
    },
  ]
})

export default router
