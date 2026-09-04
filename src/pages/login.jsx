import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';
const auth = getAuth(app);

const login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate=useNavigate(null)
    const signupHandler = () => {
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                if(user){
                navigate("/")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                
            });
    }
    return (
        <div className="w-full h-[786px] flex flex-wrap justify-center">
            <div className="box-1">
                <div className="w-[500px] h-[100px] mt-[35%]">
                    <img src="	https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" className='w-[320px] ml-[-76px] mb-[-10px]' />
                </div>
                <div className="ml-[-10%] text-2xl font-medium w-[500px]">Facebook helps you connect and share with the people in your life.</div>
            </div>
            <div className="box-2">
                <div className="ml-[9%] w-[400px] h-auto bg-white shadow-sm rounded-[8px] p-3.5 mt-[32%] pb-10">


                    <input value={Email} onChange={(e) => setEmail(e.target.value)} className='w-full  py-3 px-2.5 justify-center rounded-[5px] text-[20px] mb-[11px] border-2 border-[#dddfe2] outline-0 focus:border-[#0866ff] caret-[#0866ff] placeholder:text-[17px] ' type="text" placeholder="Email address or phone number" id="ph" />
                    <input value={Password} onChange={(e) => setPassword(e.target.value)} className='w-full py-3 px-2.5 justify-center rounded-[5px] text-[20px] mb-[11px] border-2 border-[#dddfe2] outline-0 focus:border-[#0866ff] caret-[#0866ff] placeholder:text-[17px] ' type="password" placeholder="Password" id="password" />
                    <button className="w-full p-3 mb-3.5 mt-1 rounded-[6px] text-[20px] bg-[#0866ff] border-0 text-white cursor-pointer font-semibold hover:bg-[#2670e6]" onClick={signupHandler}>
                        Log in
                    </button>
                    <p className='text-center flex justify-center font-medium text-[14px] mt-1 text-[#0866ff] cursor-pointer hover:underline'>
                        Forgotten password?
                    </p>
                    <hr className='w-[97%] text-[#dddfe2] my-[30px]' />
                    <Link to={"/signup"} className="  p-3  mt-6 rounded-[6px] text-[17px] bg-[#42b72a] border-0 text-white cursor-pointer font-semibold ml-[25%] mb-3.5 hover:bg-[#3da528]">Create new account</Link>
                </div>
            </div>
        </div>
    )
}

export default login
