// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqq4XUczFmcdzr0jZRROLJdghOUW0ZgFI",
  authDomain: "empower-heal.firebaseapp.com",
  projectId: "empower-heal",
  storageBucket: "empower-heal.appspot.com",
  messagingSenderId: "1086767692848",
  appId: "1:1086767692848:web:bb62ce96b8cf1d4f4341f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;