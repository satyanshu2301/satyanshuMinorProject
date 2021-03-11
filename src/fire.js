import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCXA9rDJTRYXzaD1D_QwvJgFnmTyYoVmNM",
    authDomain: "react-firebase-code.firebaseapp.com",
    databaseURL: "https://react-firebase-code.firebaseio.com",
    projectId: "react-firebase-code",
    storageBucket: "react-firebase-code.appspot.com",
    messagingSenderId: "554222321226",
    appId: "1:554222321226:web:8eaf1877491cb9efadf0b3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const store = firebase.storage();
  