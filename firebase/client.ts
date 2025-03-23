// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApvCLmETq4MegaYs2hfC9MMeJA3RYy6Dw",
  authDomain: "prepwise-b6acf.firebaseapp.com",
  projectId: "prepwise-b6acf",
  storageBucket: "prepwise-b6acf.firebasestorage.app",
  messagingSenderId: "131039453794",
  appId: "1:131039453794:web:55291837576c9088a8a73b",
  measurementId: "G-2D7B4Q3PK5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);