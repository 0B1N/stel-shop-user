// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDac7C64xJlPSgTNorxsDOmtziJv8TErKw",
  authDomain: "stel-shop.firebaseapp.com",
  projectId: "stel-shop",
  storageBucket: "stel-shop.firebasestorage.app",
  messagingSenderId: "706980563900",
  appId: "1:706980563900:web:b921890ffe25d02d63f9b9",
  measurementId: "G-7FZMXDLJL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
