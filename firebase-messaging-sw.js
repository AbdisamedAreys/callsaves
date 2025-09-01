// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js");

// Your Firebase config
firebase.initializeApp({
 apiKey: "AIzaSyC9niHO68k4m5fu8zJN-kCN9b0_frER9ek",
    authDomain: "resellersapp-252.firebaseapp.com",
    databaseURL: "https://resellersapp-252-default-rtdb.firebaseio.com",
    projectId: "resellersapp-252",
    storageBucket: "resellersapp-252.firebasestorage.app",
    messagingSenderId: "890644506014",
    appId: "1:890644506014:web:d6a85165a0eb1ec5cae28f"
});

// Initialize messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/callsaves/icon.png' // optional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
