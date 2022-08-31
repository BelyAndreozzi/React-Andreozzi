import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMz3vEWcoSwEnyp9a-FoBoGgzVgOnkJJk",
  authDomain: "proyect-react-ecommerce.firebaseapp.com",
  projectId: "proyect-react-ecommerce",
  storageBucket: "proyect-react-ecommerce.appspot.com",
  messagingSenderId: "653050412080",
  appId: "1:653050412080:web:4cb63c91a19ac55905c1f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

