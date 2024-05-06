// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQw6B5Gj2I0Pn5IntZ433l7cUzQ32mYqA",
  authDomain: "cars-doctor-2f845.firebaseapp.com",
  projectId: "cars-doctor-2f845",
  storageBucket: "cars-doctor-2f845.appspot.com",
  messagingSenderId: "921260397565",
  appId: "1:921260397565:web:39d2d3c6618050c25d7f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app