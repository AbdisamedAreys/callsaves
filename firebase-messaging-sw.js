// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC9niHO68k4m5fu8zJN-kCN9b0_frER9ek",
  projectId: "resellersapp-252",
  messagingSenderId: "890644506014",
  appId: "1:890644506014:web:d6a85165a0eb1ec5cae28f",
});

const messaging = firebase.messaging();

// Background handler
messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/callsaves/icon.png' // optional
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
