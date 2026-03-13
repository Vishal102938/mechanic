import React, { useState, useEffect, useContext } from 'react';
import Logo from '../assets/vcartlogo.png';
import { FaRegUserCircle, FaShoppingCart, FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BsFillCollectionFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { userDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';

const Nav = () => {
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let [requests, setRequests] = useState([]);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      getCurrentUser();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(serverUrl + "/api/service/my-requests", { withCredentials: true });
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (userData) fetchRequests();
  }, [userData, serverUrl]);

  return (
    <div className='w-full h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[20px] shadow-md shadow-black'>
      
      <div className='flex items-center gap-[10px] ml-[20px]'>
        <img className='w-[30px] h-[30px]' src={Logo} alt="logo" />
        <h1 className='font-serif text-[25px] text-black'>A.K. Services</h1>
      </div>

      <div className='hidden md:flex'>
        <ul className='flex items-center gap-[19px] text-white'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate('/')}>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate('/request')}>Request Service</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate('/about')}>ABOUT</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[8px] px-[16px] rounded-2xl' onClick={() => navigate('/contact')}>CONTACT</li>
        </ul>
      </div>

      <div className='flex items-center gap-[10px] relative'>
        {!userData && (
          <FaRegUserCircle
            className='w-[28px] h-[28px] text-[#000000] cursor-pointer'
            onClick={() => setShowProfile(prev => !prev)}
          />
        )}
        {userData && (
          <div
            className='w-[28px] h-[28px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer'
            onClick={() => setShowProfile(prev => !prev)}>
            {userData?.name.slice(0, 1)}
          </div>
        )}

        <FaShoppingCart className='w-[23px] h-[23px] text-[#000000] cursor-pointer hidden md:block'
          onClick={() => navigate('/my-requests')} />

        {userData && (
          <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-black text-white rounded-full text-[13px] top-[-9px] right-[-5px] hidden md:block'>
            {requests.length}
          </p>
        )}
      </div>

      {showProfile && (
        <div className='w-[180px] bg-[#000000d7] absolute top-[110%] right-[4%] border border-[#aaa9a9] rounded-[10px] z-10'>
          <ul className='flex flex-col text-[16px] py-[10px] text-white'>
            {!userData && (
              <li
                className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer text-center'
                onClick={() => { navigate('/login'); setShowProfile(false); }}> Login </li>
            )}
            {userData && (
              <li
                className='hover:bg-[#2f2f2f] px-[15px] py-[8px] cursor-pointer text-center'
                onClick={() => { handleLogout(); setShowProfile(false); }}> LogOut </li>
            )}
          </ul>
        </div>
      )}


      <div className='w-full h-[70px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden text-[12px]'>
        <button className='text-white flex flex-col items-center gap-[2px]'>
          <FaHome className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/')} />Home
        </button>
        <button className='text-white flex flex-col items-center gap-[2px]'>
          <BsFillCollectionFill className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/request')} />Service
        </button>
        <button className='text-white flex flex-col items-center gap-[2px]'>
          <GrCircleInformation className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/about')} />About
        </button>
        <button className='text-white flex flex-col items-center gap-[2px]'>
          <RiContactsFill className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/contact')} />Contact
        </button>
        <button className='text-white flex flex-col items-center gap-[2px]'>
          <FaShoppingCart className='w-[24px] h-[24px] text-white cursor-pointer' onClick={() => navigate('/my-requests')} />Cart
        </button>
      </div>
    </div>
  );
};

export default Nav;