const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBqJRLS14eJ15iMzkPxvsNDqv35-4CMROg",
    authDomain: "ecom-8f25d.firebaseapp.com",
    projectId: "ecom-8f25d",
    storageBucket: "ecom-8f25d.appspot.com",
    messagingSenderId: "1011374861823",
    appId: "1:1011374861823:web:df1a7302e68cbfb38c0bca"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = {
    db,
}