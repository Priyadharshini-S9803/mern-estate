// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-85abb.firebaseapp.com",
  projectId: "mern-estate-85abb",
  storageBucket: "mern-estate-85abb.appspot.com",
  messagingSenderId: "372084885680",
  appId: "1:372084885680:web:16862e46ef4fabf6f75375"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);