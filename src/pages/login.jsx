import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import app from '../firebase/config.js';
const auth = getAuth(app);

const login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate(null)

    const loginHandler = () => {
        // if (Email.trim() == "") {
        //     sweetAlert2("Please Enter a Email")
        //     console.log("hy");

        //     return
        // }
        // if (Password.trim() == "") {
        //     sweetAlert2("Please Enter a Password")
        //     return
        // }
        // if (Password.length <= 5) {
        //     sweetAlert2("Please Enter at Least 6 character")
        //     return
        // }

        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                if (user) {
                    navigate("/")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            if(errorCode==="auth/invalid-email"||"auth/missing-password"){
                toast.error("Invalid Credential")
            }

                
  
            });
    }
    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center  md:gap-[10%]">
                <div className="w-[500px] h-0 flex flex-col items-center text-center  lg:h-[280px] md:items-start md:text-start">
                    <img src="	https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" className='w-[320px] mb-[-10px] md:ml-[-30px]' />
                <div className=" text-[18px] px-3.5 font-medium md:text-2xl md:p-0 ">Facebook helps you connect and share with the people in your life.</div>
               </div>
                <div className=" w-[320px] h-[370px] mt-25 text-center bg-white shadow-lg rounded-[8px] p-4 md:w-[400px] md:mt-0">


                    <input value={Email} onChange={(e) => setEmail(e.target.value)} className='w-full  py-3 px-2.5 justify-center rounded-[5px] text-[20px] mb-[11px] border-2 border-[#dddfe2] outline-0 focus:border-[#0866ff] caret-[#0866ff] placeholder:text-[17px] ' type="text" placeholder="Email address or phone number" id="ph" />
                    <input value={Password} onChange={(e) => setPassword(e.target.value)} className='w-full py-3 px-2.5 justify-center rounded-[5px] text-[20px] mb-[11px] border-2 border-[#dddfe2] outline-0 focus:border-[#0866ff] caret-[#0866ff] placeholder:text-[17px] ' type="password" placeholder="Password" id="password" />
                    <button className="w-full p-3 mb-3.5 mt-1 rounded-[6px] text-[20px] bg-[#0866ff] border-0 text-white cursor-pointer font-semibold hover:bg-[#2670e6]" onClick={loginHandler}>
                        Log in
                    </button>
                    <p className=' font-medium text-[14px] mt-1 text-[#0866ff] cursor-pointer hover:underline'>
                        Forgotten password?
                    </p>
                    <hr className='w-[97%] text-[#dddfe2] my-[30px]' />
                    <Link to={"/signup"} className="  p-3   rounded-[6px] text-[17px] bg-[#42b72a] border-0 text-white cursor-pointer font-semibold m-auto  hover:bg-[#3da528]">Create new account</Link>
                </div>
                    <ToastContainer />
        </div>
        
    )
}

export default login
