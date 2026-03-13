import React, { useContext, useState } from 'react'
import Logo from '../assets/vcartlogo.png'
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.jpg'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { authDataContext } from '../context/AuthContext';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from '../../utils/FireBase.js'
import { userDataContext } from '../context/UserContext';

const Registration = () => {

    let [show, setShow] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [showSuccess, setShowSuccess] = useState(false);
    let [showAlreadyRegistered, setShowAlreadyRegistered] = useState(false);


    let navigate = useNavigate()
    let {getCurrentUser, userData} = useContext(userDataContext)   

    const handleSignup = async(e)=>{
        e.preventDefault()
        try {
            let result = await axios.post(serverUrl + "/api/auth/registration", {
                name, email, password
            }, {withCredentials:true})
            getCurrentUser()
            
            // setEmailForOTP(email);
    // setShowOTPModal(true);
setShowSuccess(true);
            setName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.message?.toLowerCase().includes("already")) {
    setShowAlreadyRegistered(true);
  }

        }
    }

    const handleVerifyOTP = async()=>{
  try {
    let result = await axios.post(serverUrl + "/api/auth/verify-otp",{email:emailForOTP, otp},{withCredentials:true});
    getCurrentUser();
    // setShowOTPModal(false);      
    setShowSuccess(true);   
    navigate('/login');
  } catch (error) { console.log(error); }
};

    const googleSignup = async()=>{
        try {
            const response = await signInWithPopup(auth, provider)
            let user = response.user
            let name = user.displayName
            let email = user.email

            const result = await axios.post(serverUrl + "/api/auth/google",{
                name,
                email
            }, {withCredentials:true})
            getCurrentUser()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div 
      className={`w-[100vw] h-[100vh] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white
      flex flex-col items-center justify-start 
      ${userData ? "mt-[70px]" : ""}`}   
    >
    {!userData && (
        <div
          className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px]
          cursor-pointer mt-[20px]"
          onClick={() => navigate("/")}
        >
          <img className="w-[38px] h-[38px]" src={Logo} alt="Logo" />
          <h1 className="font-serif text-[25px]">A.K. Services</h1>
        </div>
      )}


    <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px] mt-[20px] '>
        <span className='text-[28px] font-sans'>Registration Page</span>
        <span className='text-[17px] font-serif'>Welcome to <span className='text-[20px] text-yellow-400'>A.K. Services</span> , register here ...</span>
    </div>

    <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-2 border-[#96969635]
    backdrop:blur-2xl rounder-lg shadow-lg flex items-center justify-center rounded-3xl'>
        <form className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] ml-[25px]' onSubmit={handleSignup}>
            <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center
            gap-[10px] py-[20px] cursor-pointer' onClick={()=>googleSignup()}>
                <img src={google} alt="" className='w-[30px] h-[20px]' /> Registration with google
            </div>
             <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                    OR
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
             </div>
             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center
             gap-[15px] relative'>
                <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm *
                rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-serif' placeholder='Username' 
                required value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm *
                rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-serif' placeholder='E-mail' 
                required value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm *
                rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-serif' placeholder='Password' required
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {!show && <IoEyeSharp className='w-[20px] h-[20px] cursor-pointer right-[20px] absolute' onClick={()=>setShow(prev=>!prev)}/>}
                {show && <FaEyeSlash className='w-[20px] h-[20px] cursor-pointer right-[20px] absolute' onClick={()=>setShow(prev=>!prev)}/>}
                <button className='w-[100%] h-[50px] bg-[#0c5975] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>
                    Create Account
                </button>
                <p className='flex gap-[10px]'>Already have an account ? <span className='text-[#2a9bd8]  text-[17px] font-semibold 
                cursor-pointer' onClick={()=>navigate('/login')}>Login</span></p>
             </div>
        </form>

        {showSuccess && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
    <div className="bg-white text-black rounded-2xl shadow-2xl p-6 w-[350px] text-center transform animate-bounceIn">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-4xl">🎉</span>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold mb-2 text-green-600">Successfully Registered!</h2>
      <p className="mb-4 text-gray-700">Welcome Dear 🚀 — click Done to login.</p>
      <button
        onClick={() => navigate('/login')}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full mt-3 transition-transform transform hover:scale-105"
      >
        ✅ Done
      </button>
    </div>
  </div>
)}


{showAlreadyRegistered && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
    <div className="bg-white text-black rounded-2xl shadow-2xl p-6 w-[350px] text-center transform animate-bounceIn">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-4xl">⚠️</span>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold mb-2 text-red-600">Already Registered!</h2>
      <p className="mb-4 text-gray-700">Looks like you’re already in our system 🙂. Please login to continue.</p>

      <button
        onClick={() => navigate('/login')}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full mt-3 transition-transform transform hover:scale-105"
      >
        🔑 Login
      </button>
    </div>
  </div>
)}
    </div>
    </div>
  )
}

export default Registration