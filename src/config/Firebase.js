import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxfQ2rcsi2QtAArfG_4j9NJ4gNaJlBIe8",
  authDomain: "clone-8b7cd.firebaseapp.com",
  projectId: "clone-8b7cd",
  storageBucket: "clone-8b7cd.appspot.com",
  messagingSenderId: "489209921195",
  appId: "1:489209921195:web:fbc825780120c5002dc1ee",
  measurementId: "G-86NZ80WTPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth=getAuth();