import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoB8FqB0CxRIwGzcG0i7821NiWWxt9NN0",
  authDomain: "nea-school-portal-1.firebaseapp.com",
  projectId: "nea-school-portal-1",
  storageBucket: "nea-school-portal-1.appspot.com",
  messagingSenderId: "617530386669",
  appId: "1:617530386669:web:d62556d81aa4ab769984e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
