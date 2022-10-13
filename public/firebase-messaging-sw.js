importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAvmdBkmAuS3885V0pP0iwwxZhSACYa11I',
  authDomain: "vue-3-pwa.firebaseapp.com",
  projectId: "vue-3-pwa",
  storageBucket: "vue-3-pwa.appspot.com",
  messagingSenderId: '750995842336',
  appId: '1:750995842336:web:2c688768ae4b43e38c2345',
  measurementId: "G-KSCPZM1BB2"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
self.addEventListener('notificationclick', event => {
  console.log(event)
});
