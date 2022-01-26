import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: _,
  authDomain: _,
  projectId: _,
  storageBucket: _,
  messagingSenderId: _,
  appId: _,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const bd = getFirestore(app);
