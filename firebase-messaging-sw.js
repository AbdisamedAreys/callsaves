importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC9niHO68k4m5fu8zJN-kCN9b0_frER9ek",
    authDomain: "resellersapp-252.firebaseapp.com",
    databaseURL: "https://resellersapp-252-default-rtdb.firebaseio.com",
    projectId: "resellersapp-252",
    storageBucket: "resellersapp-252.firebasestorage.app",
    messagingSenderId: "890644506014",
    appId: "1:890644506014:web:d6a85165a0eb1ec5cae28f",
    measurementId: "G-JHS1KM8C8J"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification.title;
  const options = { body: payload.notification.body };
  self.registration.showNotification(title, options);
});
