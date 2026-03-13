import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/vcartlogo.png'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { adminDataContext } from '../context/AdminContext'
import { MdOutlineCallReceived } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { RiContactsBook3Line } from "react-icons/ri";

const Nav = () => {
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
   let {getAdmin} = useContext(adminDataContext)

    const logOut = async()=>{
        try {
            const result = await axios.get(serverUrl + '/api/auth/logout',
            {withCredentials:true})
            console.log(result.data)
            getAdmin()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex 
    items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black '>
        <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer'
        onClick={()=>navigate('/')}>
            <img src={logo} alt="" className='w-[30px]'/>
            <h1 className='text-[25px] text-black font-serif'>Services</h1>
        </div>

        <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer
        bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logOut}>LogOut</button>

        <div className='w-full h-[70px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] block md:hidden text-[12px]'>
                <button className='text-white flex flex-col items-center gap-[2px]'>
                  <MdOutlineCallReceived className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/pending')} />Recieved
                </button>
                <button className='text-white flex flex-col items-center gap-[2px]'>
                  <SiTicktick className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/accepted')} />Accepted
                </button>
                <button className='text-white flex flex-col items-center gap-[2px]'>
                  <MdDeleteSweep className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/rejected')} />Rejected
                </button>
                <button className='text-white flex flex-col items-center gap-[2px]'>
                  <RiContactsBook3Line className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/see-contact')} />Contact
                </button>
                
              </div>
    </div>
  )
}

export default Nav