import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../firebase/config";
import { useUser } from "./UserContext";
const auth = getAuth();
const db = getFirestore(app);
export let userId = null

const ProtectedRoute = ({children}) => {
  const { setUserData } = useUser();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
  const getUser = () => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        setUserData(null);
        const uid = user.uid;
        userId=user.uid
        await fetchUserData(uid);
        
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
    return(
            <div className="flex justify-center items-center h-full">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>)
              }

  if(user){

return children
    // return <Navigate to="/" />
  }else{
    return <Navigate to={"/login"} />
  }

};

export default ProtectedRoute;