import React from 'react'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
import { useUser } from '../../component/UserContext';

const profilemenu = () => {
    const logoutHandler = () => {
        signOut(auth)
    }
    const { userData } = useUser();
    return (
        <div >
            <div className="absolute right-0 top-17 w-[320px] max-w-[calc(100vw-24px)]bg-white rounded-lg  shadow-[0_4px_16px_rgba(0,0,0,0.20)]border border-gray-200 p-2 z-50 bg-white" >
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg" alt="Profile" className="w-14 h-14 rounded-full object-cover" />

                    <div>
                        <h3 className="text-[17px] font-semibold text-gray-900">
                            {userData ? `${userData.firstName} ${userData.lastName}` : "User"}                        
                        </h3>

                        <p className="text-sm text-gray-500">
                            See your profile
                        </p>
                    </div>

                </div>


                <div className="h-px bg-gray-200 my-2"></div>


                <div className="flex items-center gap-3 px-3 py-3 rounded-lg  hover:bg-gray-100 cursor-pointer">

                    <div className="w-9 h-9 rounded-full  bg-gray-200  flex items-center justify-center">
                        <i className="fa-solid fa-users text-gray-700"></i>
                    </div>

                    <span className="text-[15px] font-medium text-gray-800">
                        See all profiles
                    </span>

                </div>


                <div className="h-px bg-gray-200 my-2"></div>


                <div className="flex items-center  justify-between  px-3 py-3  rounded-lg  hover:bg-gray-100  cursor-pointer">

                    <div className="flex items-center gap-3">

                        <div className="w-9 h-9  rounded-full  bg-gray-200  flex items-center justify-center" >
                            <i className="fa-solid fa-gear text-[17px] text-gray-700"></i>
                        </div>

                        <span className="text-[15px] font-medium text-gray-800">
                            Settings & privacy
                        </span>

                    </div>

                    <i className="fa-solid fa-chevron-right text-gray-500 text-sm"></i>

                </div>


                <div className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer" >

                    <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                            <i className="fa-solid fa-circle-question text-[18px] text-gray-700"></i>
                        </div>

                        <span className="text-[15px] font-medium text-gray-800">
                            Help & support
                        </span>

                    </div>

                    <i className="fa-solid fa-chevron-right text-gray-500 text-sm"></i>

                </div>


                <div className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">

                    <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center" >
                            <i className="fa-solid fa-moon text-[17px] text-gray-700"></i>
                        </div>

                        <span className="text-[15px] font-medium text-gray-800">
                            Display & accessibility
                        </span>

                    </div>

                    <i className="fa-solid fa-chevron-right text-gray-500 text-sm"></i>

                </div>


                <div className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">

                    <div className="w-9 h-9  rounded-full  bg-gray-200 flex items-center justify-center mr-3">
                        <i className="fa-solid fa-message text-[16px] text-gray-700"></i>
                    </div>

                    <span className="text-[15px] font-medium text-gray-800">
                        Give feedback
                    </span>

                </div>


                <div className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={logoutHandler}>

                    <div className="w-9 h-9  rounded-full  bg-gray-200 flex items-center justify-center mr-3">
                        <i className="fa-solid fa-right-from-bracket text-[17px] text-gray-700"></i>
                    </div>

                    <span className="text-[15px] font-medium text-gray-800">
                        Log Out
                    </span>

                </div>


                <div className="px-3 pt-1 pb-2">

                    <p className="text-[11px] text-gray-500 leading-4">
                        Privacy · Terms · Advertising · Ad Choices · Cookies
                        · More · Meta © 2026
                    </p>

                </div>

            </div>


        </div>
    )
}

export default profilemenu
