import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "frichieri-test.firebaseapp.com",
  projectId: "frichieri-test",
  storageBucket: "frichieri-test.appspot.com",
  messagingSenderId: "863340668346",
  appId: "1:863340668346:web:34850b0bfd393cfe2aa983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
