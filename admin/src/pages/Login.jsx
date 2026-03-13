import React, { useContext, useState } from 'react'
import Logo from '../assets/vcartlogo.png'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [show, setShow] = useState(false)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let {serverUrl} = useContext(authDataContext)
    let {adminData, getAdmin} = useContext(adminDataContext)
    let navigate = useNavigate()

    const AdminLogin = async(e)=>{
        e.preventDefault()
        try {
          const result = await axios.post(serverUrl + '/api/auth/adminlogin', {email, password},
            {withCredentials:true})
            getAdmin()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white
    flex flex-col items-center justify-start'>

    <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px]
    cursor-pointer'>
        <img className='w-[38px] h-[38px]' src={Logo} alt="" />
        <h1 className=' font-serif text-[25px]'>A.K. Services</h1>
    </div>

    <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]'>
        <span className='text-[28px] font-sans'>Login Page</span>
        <span className='text-[17px] font-serif'>Welcome to <span className='text-[20px] text-yellow-400'>A.K. Services</span> , login here to Admin Panel</span>
    </div>

    <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-2 border-[#96969635]
    backdrop:blur-2xl rounder-lg shadow-lg flex items-center justify-center rounded-3xl'>
        <form className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] ml-[25px]'
        onSubmit={AdminLogin}>
            
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
             </div>
        </form>
    </div>
    </div>
  )
}

export default Login