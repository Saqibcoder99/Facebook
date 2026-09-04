import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';
import { ToastContainer, toast } from 'react-toastify';

const auth = getAuth(app);

const signup = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate=useNavigate(null)
    const signupHandler = () => {
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                    if(user){
                navigate("/")
                }    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorCode);

                
            });
    }
    return (
        <div className="flex justify-center items-center flex-col h-full w-full">
            <div className="logo"> <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" className='h-[100px] w-[300px]' /></div>
            <div className="w-[450px] bg-white shadow-md rounded-[8px] p-4">

                <div className="b-content">
                    <h2 className='text-center mb-1 text-2xl font-semibold'>Create a new account</h2>
                    <h4 className='text-center mb-3 text-[#606770] font-bold'>It's quick and easy.</h4>
                    <hr />
                </div>
                <div className="mt-3.5 h-[39px] flex gap-2.5">
                    <input type="text" placeholder="First name" id="f-name" className='h-full w-1/2 rounded-[5px] border border-[gray] text-[#606770] text-[14px] pl-2.5' />
                    <input type="text" placeholder="Surname" id="l-name" className='h-full w-1/2 rounded-[5px] border border-[gray] text-[#606770] text-[14px] pl-2.5' />
                </div>
                <div className="DOB-section">
                    <p className='text-[12px] text-[#606770] mt-4 mb-2.5'>Date of birth<span className='bg-[#52575e] text-[aliceblue] rounded-[50%] ml-1 text-[9px] mb-2.5'><i class="fa-solid fa-question"></i></span></p>
                    <div className="h-[36px] w-full flex gap-4">
                        <select name="day" id="S-1" className='h-full w-10/12 text-[16px] pl-1 rounded-[5px] mb-[4px] border border-gray-500'>
                            <option>day</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="month" id="S-2" className='h-full w-10/12 text-[16px] pl-1 rounded-[5px] mb-[4px] border border-gray-500'>
                            <option>month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select name="year" id="S-3" className='h-full w-10/12 text-[16px] pl-1 rounded-[5px] mb-[4px] border border-gray-500'>
                            <option>year</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                        </select>

                    </div>
                </div>
                <div className="DOB-section">
                    <p className='text-[12px] text-[#606770] mt-4 mb-2.5'>Gender<span className='bg-[#52575e] text-[aliceblue] rounded-[50%] ml-1 text-[9px] mb-2.5'><i class="fa-solid fa-question"></i></span></p>
                    <div className="h-[36px] flex gap-3.5 justify-between">
                        <div class=" border border-gray-500 w-[30%] flex items-center rounded-[5px] pl-2">
                            Female
                            <input className='ml-[35%]' type="radio" value="female" name="gender" />
                        </div>
                        <div className=" border border-gray-500 w-[30%] flex items-center rounded-[5px] pl-2">
                            Male
                            <input className='ml-[35%]' type="radio" value="male" name="gender" />
                        </div>
                        <div className=" border border-gray-500 w-[30%] flex items-center rounded-[5px] pl-2">
                            other
                            <input className='ml-[35%]' type="radio" value="others" name="gender" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[42px] mt-2.5">
                    <input onChange={(e) => setEmail(e.target.value)} className='h-full w-full pl-3.5 text-[15px] rounded-[5px] border border-gray-500' type="text" placeholder="Mobile number or email address" id="address" />
                </div>
                <div className="w-full h-[42px] mt-2.5">
                    <input onChange={(e) => setPassword(e.target.value)} className='h-full w-full pl-3.5 text-[15px] rounded-[5px] border border-gray-500' type="text" placeholder="New password" id="new password" />
                </div>
                <div className="mt-3 text-[11px] text-[#777777]">
                    <p className='mt-3.5'>People who use our service may have uploaded your contact information to Facebook.<a className='text-[#385898] cursor-pointer hover:underline'> Learn
                        more.</a></p>
                    <p className='mt-3.5'>By clicking Sign Up, you agree to our <a className='text-[#385898] cursor-pointer hover:underline'>Terms, Privacy Policy</a> and <a className='text-[#385898] cursor-pointer  hover:underline '>Cookies Policy.</a> You
                        may receive SMS
                        notifications from us and can opt out at any time.</p>
                </div>

                <button className="w-[48%] h-[41px] mb-4 mt-6 rounded-[6px] text-[19px] bg-[#3da528] border-none text-white cursor-pointer font-semibold ml-[25%] hover:text-[#f2f4f7]" onClick={signupHandler}>Sign Up</button>
                <Link to={"/login"} className="text-center flex justify-center font-medium text-[17px] mt-[4px] text-[#1877f2] cursor-pointer mb-1 ">
                    Already have an account?
                </Link>
            </div>
            <ToastContainer />
        </div>

    )
}

export default signup
