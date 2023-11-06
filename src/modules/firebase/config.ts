import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuKNlvOcrpVabc5I5rQHBzBu3rTL3kKjk",
  authDomain: "portfolio-9629a.firebaseapp.com",
  projectId: "portfolio-9629a",
  storageBucket: "portfolio-9629a.appspot.com",
  messagingSenderId: "886829739099",
  appId: "1:886829739099:web:2817d4674691763f28a37e",
  measurementId: "G-EXK3LHLCLR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);