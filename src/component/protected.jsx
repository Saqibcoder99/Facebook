import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../firebase/config";
import { useUser } from "./UserContext";
const auth = getAuth();
const db = getFirestore(app);

const ProtectedRoute = ({children}) => {
  const { setUserData } = useUser();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(null);
        const uid = user.uid;
         fetchUserData(uid);
        
        setUser(user)
      } else {

        setUser(null)
      }

      setLoading(false)
    });
  };

  
  async function fetchUserData(uid) {
    
  try {
    const userDocRef = doc(db, "users", uid);    
    const userDocSnap = await getDoc(userDocRef);
  
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      console.log(userData);
      setUserData(userData);
      
    } else {
      console.log("No such user document found in Firestore!");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

  useEffect(() => {
    getUser();

    return () => getUser()
  }, []);


  if(loading){
    return <h1 className="flex items-center justify-center h-screen w-screen text-2xl">Loading...</h1>
  }

  if(user){
console.log("janai user milgaya.. ", user);

return children
    // return <Navigate to="/" />
  }else{
    return <Navigate to={"/login"} />
  }

};

export default ProtectedRoute;