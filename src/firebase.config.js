import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnDhXtkFAHSIladPeB9DRpDWPer7sBKG0",
  authDomain: "house-marketplace-app-d9562.firebaseapp.com",
  projectId: "house-marketplace-app-d9562",
  storageBucket: "house-marketplace-app-d9562.appspot.com",
  messagingSenderId: "933763611291",
  appId: "1:933763611291:web:2c971e1e5bc57b64d3e43e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()