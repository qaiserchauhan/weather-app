import firebase from "firebase";
import "firebase/auth";


var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
     apiKey: "AIzaSyAPgqCfqxYSUDVT9PJDV5cP6Qw1l9Ymq5U",
    authDomain: "digital-shop-8e391.firebaseapp.com",
    projectId: "digital-shop-8e391",
    storageBucket: "digital-shop-8e391.appspot.com",
    messagingSenderId: "436223487771",
    appId: "1:436223487771:web:6e514cb44df3c4431cedbe"
  
  // Initialize Firebase
 });

 var db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth};