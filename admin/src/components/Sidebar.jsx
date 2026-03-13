import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineCallReceived } from "react-icons/md"
import { MdDeleteSweep } from "react-icons/md"
import { SiTicktick } from "react-icons/si"
import { RiContactsBook3Line } from "react-icons/ri"
import { FaHome } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0 hidden md:block'>
      <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>

        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 border px-3 py-2 cursor-pointer 
        hover:bg-[#493704] ${isActive ? 'bg-[#493704] text-white font-bold' : ''}` } >
          <FaHome className='w-[20px] h-[20px]'/>
          <p>Home</p>
        </NavLink>

        <NavLink 
          to="/pending" 
          className={({ isActive }) =>
            `flex items-center gap-3 border px-3 py-2 cursor-pointer hover:bg-[#5d0456] 
             ${isActive ? 'bg-[#5d0456] text-white font-bold' : ''}`
          }
        >
          <MdOutlineCallReceived className='w-[20px] h-[20px]'/>
          <p>Recieved Requests</p>
        </NavLink>

        <NavLink 
          to="/accepted" 
          className={({ isActive }) =>
            `flex items-center gap-3 border px-3 py-2 cursor-pointer hover:bg-green-600 
             ${isActive ? 'bg-green-600 text-white font-bold' : ''}`
          }
        >
          <SiTicktick className='w-[20px] h-[20px]'/>
          <p>Accepted Requests</p>
        </NavLink>

        <NavLink 
          to="/rejected" 
          className={({ isActive }) =>
            `flex items-center gap-3 border px-3 py-2 cursor-pointer hover:bg-red-600 
             ${isActive ? 'bg-red-600 text-white font-bold' : ''}`
          }
        >
          <MdDeleteSweep className='w-[20px] h-[20px]'/>
          <p>Rejected Requests</p>
        </NavLink>

        <NavLink 
          to="/see-contact" 
          className={({ isActive }) =>
            `flex items-center gap-3 border px-3 py-2 cursor-pointer hover:bg-[#2c7b89] 
             ${isActive ? 'bg-[#2c7b89] text-white font-bold' : ''}`
          }
        >
          <RiContactsBook3Line className='w-[20px] h-[20px]'/>
          <p>Contacts</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar