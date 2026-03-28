// firebase-config.js
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjspj1rS3F3zt_VhCvY6ypDsU9IfAAvP0",
    authDomain: "shipremit.firebaseapp.com",
    databaseURL: "https://shipremit-default-rtdb.firebaseio.com",
    projectId: "shipremit",
    storageBucket: "shipremit.firebasestorage.app",
    messagingSenderId: "516183209213",
    appId: "1:516183209213:web:d2ffdaa25b14b96de17a94",
    measurementId: "G-0SE4CEQP5X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence().catch((err) => {
    if (err.code === 'failed-precondition') {
        console.log('Multiple tabs open, persistence enabled in first tab only');
    } else if (err.code === 'unimplemented') {
        console.log('Browser doesn\'t support persistence');
    }
});
