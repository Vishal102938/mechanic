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

const Login = () => {
    let [show, setShow] = useState(false)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [showSuccess, setShowSuccess] = useState(false);
    let [showWrongCreds, setShowWrongCreds] = useState(false);
    let [showNoUser, setShowNoUser] = useState(false);
    let {serverUrl} = useContext(authDataContext)
    let navigate = useNavigate()
    let {getCurrentUser, userData} = useContext(userDataContext)

    const handleLogin = async(e)=>{
        e.preventDefault()
        try {
            let result = await axios.post(serverUrl + "/api/auth/login",{
                email, password
            },{withCredentials:true})
            getCurrentUser()
            setShowSuccess(true);
        } catch (error) {
            console.log(error)
            if (error.response?.data.message?.toLowerCase().includes("incorrect")) {
      setShowWrongCreds(true);
    } else if (error.response?.data.message?.toLowerCase().includes("not found")) {
      setShowNoUser(true);
    }

        }
    }

    const googleLogin = async()=>{
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
                navigate('/')
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

    <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px] mt-[20px]'>
        <span className='text-[28px] font-sans'>Login Page</span>
        <span className='text-[17px] font-serif'>Welcome to <span className='text-[20px] text-yellow-400'>A.K. Services</span> , login here !</span>
    </div>

    <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-2 border-[#96969635]
    backdrop:blur-2xl rounder-lg shadow-lg flex items-center justify-center rounded-3xl'>
        <form className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] ml-[25px]' onSubmit={handleLogin}>
            <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center
            gap-[10px] py-[20px] cursor-pointer' onClick={googleLogin}>
                <img src={google} alt="" className='w-[30px] h-[20px]' /> Login with google
            </div>
             <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                    OR
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
             </div>
             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center
             gap-[15px] relative'>
                <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm *
                rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-serif' placeholder='E-mail' required
                value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm *
                rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-serif' placeholder='Password' required
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {!show && <IoEyeSharp className='w-[20px] h-[20px] bottom-[188px] cursor-pointer right-[20px] absolute' onClick={()=>setShow(prev=>!prev)}/>}
                {show && <FaEyeSlash className='w-[20px] h-[20px] bottom-[188px] cursor-pointer right-[20px] absolute' onClick={()=>setShow(prev=>!prev)}/>}
                <button className='w-[100%] h-[50px] bg-[#0c5975] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>
                    Login
                </button>
                <p className='flex gap-[10px]'>Want to create new account  ? <span className='text-[#2a9bd8] cursor-pointer' onClick={()=>navigate("/signup")}>New Registration</span></p>
             </div>
        </form>

{showSuccess && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center animate-fadeIn">
    <div className="bg-white text-black rounded-3xl shadow-2xl p-8 w-[450px] text-center transform animate-bounceIn">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-5xl">😊</span>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold mb-3 text-green-600">Welcome Back!</h2>
      <p className="mb-6 text-gray-700 text-lg">
        You’ve successfully logged in 🎉. We’re happy to see you again — let’s continue your journey!
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full mt-3 text-lg font-semibold transition-transform transform hover:scale-105"
      >
        Continue to Home
      </button>
    </div>
  </div>
)}

{showWrongCreds && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center animate-fadeIn">
    <div className="bg-white text-black rounded-3xl shadow-2xl p-8 w-[450px] text-center transform animate-bounceIn">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-5xl">❌</span>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold mb-3 text-red-600">Oops!</h2>
      <p className="mb-6 text-gray-700 text-lg">
        The email or password you entered is incorrect 🔑. Please try again carefully.
      </p>
      <button
        onClick={() => setShowWrongCreds(false)}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 w-full mt-3 text-lg font-semibold transition-transform transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  </div>
)}

{showNoUser && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center animate-fadeIn">
    <div className="bg-white text-black rounded-3xl shadow-2xl p-8 w-[450px] text-center transform animate-bounceIn">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-5xl">⚠️</span>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold mb-3 text-yellow-600">User Not Found!</h2>
      <p className="mb-6 text-gray-700 text-lg">
        We couldn’t find an account with this email 📧. Don’t worry, you can create one easily.
      </p>
      <button
        onClick={() => navigate('/signup')}
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 w-full mt-3 text-lg font-semibold transition-transform transform hover:scale-105"
      >
        Register Now
      </button>
    </div>
  </div>
)}


    </div>
    </div>
  )
}

export default Login