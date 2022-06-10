import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6SHTouk0KPd7UYRGkWm031XPjYCTKfpo",
  authDomain: "house-marketplace-app-2938c.firebaseapp.com",
  projectId: "house-marketplace-app-2938c",
  storageBucket: "house-marketplace-app-2938c.appspot.com",
  messagingSenderId: "374797005229",
  appId: "1:374797005229:web:b129f499814d2b63cf3124",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
