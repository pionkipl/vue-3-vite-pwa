importScripts('https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js')

console.log('fb loaded');


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
  // Customize notification here
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '/firebase-logo.png'
  // };
  //
  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});

