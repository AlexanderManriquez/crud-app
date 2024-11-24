// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsiZfuwFjcvYrbAEJfdT3s2f1aFeaAriM",
  authDomain: "crud-app-d8f27.firebaseapp.com",
  projectId: "crud-app-d8f27",
  storageBucket: "crud-app-d8f27.firebasestorage.app",
  messagingSenderId: "1015330376459",
  appId: "1:1015330376459:web:e23e082327254122c4b00e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };