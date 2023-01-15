// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Y_x7dhskEvsX9NJ-9SOq8y97flzhuWs",
  authDomain: "react-app-games.firebaseapp.com",
  projectId: "react-app-games",
  storageBucket: "react-app-games.appspot.com",
  messagingSenderId: "764386443074",
  appId: "1:764386443074:web:d0d6fe5cccbeb3d365d2db",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
