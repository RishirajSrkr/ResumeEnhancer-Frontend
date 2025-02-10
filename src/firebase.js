import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FIREBASE_KEY}`,
    authDomain: "resume-enhancer-ca860.firebaseapp.com",
    projectId: "resume-enhancer-ca860",
    storageBucket: "resume-enhancer-ca860.firebasestorage.app",
    messagingSenderId: "81993900993",
    appId: "1:81993900993:web:6b0c3ba559841a97b08540",
    measurementId: "G-WXQHQ3Q3QS"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
