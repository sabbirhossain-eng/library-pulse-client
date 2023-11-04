// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4MZh5kq5DrRXUGluzblZ5bQP1Q67k37M",
  authDomain: "library-pulse.firebaseapp.com",
  projectId: "library-pulse",
  storageBucket: "library-pulse.appspot.com",
  messagingSenderId: "1098150828322",
  appId: "1:1098150828322:web:d06b598fda7b0add086d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;