// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqWVCHDI0NIi2iQhWSIh3uEIfzqqHQoZ0",
  authDomain: "react-firebase-authen-73d08.firebaseapp.com",
  projectId: "react-firebase-authen-73d08",
  storageBucket: "react-firebase-authen-73d08.appspot.com",
  messagingSenderId: "496614846583",
  appId: "1:496614846583:web:2a3fd0178fb76fb7691672",
  measurementId: "G-J3LWNTWYD8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;