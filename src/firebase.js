// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV1WqSlwTeSfwLVp0U-gK61ETnHCMxzLE",
  authDomain: "gi-token.firebaseapp.com",
  projectId: "gi-token",
  storageBucket: "gi-token.appspot.com",
  messagingSenderId: "405487455339",
  appId: "1:405487455339:web:3650790987eac25974f52e",
  measurementId: "G-T63R55MGYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);