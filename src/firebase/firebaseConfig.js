// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj_NzS2-N_3-yNXnFYwz9rrc29GC__7bY",
  authDomain: "solo-levelling-4a425.firebaseapp.com",
  projectId: "solo-levelling-4a425",
  storageBucket: "solo-levelling-4a425.firebasestorage.app",
  messagingSenderId: "782525682520",
  appId: "1:782525682520:web:0b2852cf4b76cec7188b2d",
  measurementId: "G-YP9W7SQ151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const db = getFirestore(app);
export {app, auth,db};
