import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLmQtFWGWnviuAmOkAHmh6V2a8vVsgMwA",
  authDomain: "task-management-project-58867.firebaseapp.com",
  projectId: "task-management-project-58867",
  storageBucket: "task-management-project-58867.appspot.com",
  messagingSenderId: "571768638320",
  appId: "1:571768638320:web:942982775bc53ab7259db5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const bd = getFirestore(app);