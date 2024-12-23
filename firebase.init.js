// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAGSEmlVtEwbVsKncRugFDnkDLzh9sZY",
  authDomain: "assignment-11-ph-a1a3b.firebaseapp.com",
  projectId: "assignment-11-ph-a1a3b",
  storageBucket: "assignment-11-ph-a1a3b.firebasestorage.app",
  messagingSenderId: "27078085784",
  appId: "1:27078085784:web:4e4db9fd16a99aceae14ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);