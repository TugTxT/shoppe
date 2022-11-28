// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7AYByTOWTc9o6IwAtq566VwFoG08jibY",
  authDomain: "furnituno-41106.firebaseapp.com",
  projectId: "furnituno-41106",
  storageBucket: "furnituno-41106.appspot.com",
  messagingSenderId: "607195282912",
  appId: "1:607195282912:web:aa8b3c8f7e1382dd4c7f85",
  measurementId: "G-9MGTZRKX7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
