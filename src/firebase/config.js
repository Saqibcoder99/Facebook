import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// CLOUDINARY
export const uploadImageToCloudinary = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "post-images"
  );

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/ykprmzsi/image/upload", formData
  );
  
   
  return response.data.secure_url;
};



const firebaseConfig = {
  apiKey: "AIzaSyBO-NiQZ17l-5goO_6xJ1x1wdlSHjXiCuo",
  authDomain: "facebook-with-react.firebaseapp.com",
  projectId: "facebook-with-react",
  storageBucket: "facebook-with-react.firebasestorage.app",
  messagingSenderId: "645671355678",
  appId: "1:645671355678:web:5648ebd33b381aa813750f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app



