// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO-NiQZ17l-5goO_6xJ1x1wdlSHjXiCuo",
  authDomain: "facebook-with-react.firebaseapp.com",
  projectId: "facebook-with-react",
  storageBucket: "facebook-with-react.firebasestorage.app",
  messagingSenderId: "645671355678",
  appId: "1:645671355678:web:5648ebd33b381aa813750f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app