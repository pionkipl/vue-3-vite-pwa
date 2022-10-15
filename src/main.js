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
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: "vue-3-pwa.firebaseapp.com",
  projectId: "vue-3-pwa",
  storageBucket: "vue-3-pwa.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-KSCPZM1BB2"
};

const appFb = initializeApp(firebaseConfig);

const messaging = getMessaging(appFb);

const vapidKey = import.meta.env.VITE_APP_VAPID_KEY;

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      getToken(messaging,{ vapidKey: vapidKey }).then((currentToken) => {
        if (currentToken) {
          onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // ...
          });
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }
  })
}

requestPermission();


const app = createApp(App)

app.use(router)

app.mount('#app')
