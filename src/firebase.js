import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCj9pB3dRjT5S-i8P1FJAS9wru2COwj14o",
    authDomain: "unichat-620f1.firebaseapp.com",
    projectId: "unichat-620f1",
    storageBucket: "unichat-620f1.appspot.com",
    messagingSenderId: "985533913479",
    appId: "1:985533913479:web:656f7c147ce5ee7a931b22"
  }).auth();
  