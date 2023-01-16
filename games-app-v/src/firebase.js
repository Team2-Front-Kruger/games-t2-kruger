// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMp83o-IpwclKsKzU94SVui1vEFUFg5oc",
  authDomain: "react-videogames-app.firebaseapp.com",
  projectId: "react-videogames-app",
  storageBucket: "react-videogames-app.appspot.com",
  messagingSenderId: "865444940440",
  appId: "1:865444940440:web:665979406d3f95ee74deed",
  measurementId: "G-78Y4S502VH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
