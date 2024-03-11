// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3gL3x_vIrALQ3gG67ZNIgyQl7n2-MnSM",
    authDomain: "react-cursos-a2b82.firebaseapp.com",
    projectId: "react-cursos-a2b82",
    storageBucket: "react-cursos-a2b82.appspot.com",
    messagingSenderId: "125716883059",
    appId: "1:125716883059:web:043892cf3d19c6ee2c2c06"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp);
export const FirebaseDb = getFirestore(FireBaseApp);