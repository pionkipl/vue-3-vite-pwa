import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('refresh my')
  },
  onOfflineReady() {
    console.log('offline my')
  },
})

const app = createApp(App)

app.use(router)

app.mount('#app')
