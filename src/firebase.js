import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-7I1hzQkYphM024-RcNLin6s6YwQ6SA",
  authDomain: "kicks-commerce.firebaseapp.com",
  projectId: "kicks-commerce",
  storageBucket: "kicks-commerce.appspot.com",
  messagingSenderId: "579851028153",
  appId: "1:579851028153:web:2c2e14e3387e1cfa803d68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
