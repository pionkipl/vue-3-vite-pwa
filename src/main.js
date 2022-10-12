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

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: "vue-3-pwa.firebaseapp.com",
  projectId: "vue-3-pwa",
  storageBucket: "vue-3-pwa.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-KSCPZM1BB2"
};

// Initialize Firebase
const appfb = initializeApp(firebaseConfig);

const messaging = getMessaging(appfb);

const vapidKey = import.meta.env.VITE_APP_VAPID_KEY;

getToken(messaging, { vapidKey:  vapidKey}).then((currentToken) => {
  if (currentToken) {
    console.log('hello')
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  })
}

requestPermission();

const app = createApp(App)

app.use(router)

app.mount('#app')
