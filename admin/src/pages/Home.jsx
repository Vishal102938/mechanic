import React, { useEffect, useState, useContext } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import BannerImage from '../assets/mechanic.png'

const Home = () => {
  const { serverUrl } = useContext(authDataContext);
  const [stats, setStats] = useState({ total: 0, accepted: 0, rejected: 0, pending: 0 });

  const fetchStats = async () => {
    try {
      const res = await axios.get(serverUrl + "/api/service/stats", { withCredentials: true });
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { fetchStats(); }, []);

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white'>
      <Nav />

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="md:ml-[20%] p-8 mt-[70px]">
  <h1 className="text-[30px] font-bold mb-6 tracking-wide text-white drop-shadow-lg flex gap-2">
  <span className="text-cyan-400 hover:text-cyan-300 transition">Admin</span>
  <span className="text-yellow-400 hover:text-yellow-300 transition">Dashboard</span>
</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">

    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
      <h2 className="text-[25px] font-bold mb-4 text-cyan-400 animate-pulse">
        Welcome, Admin!
      </h2>
      <p className="text-gray-200 mb-4 leading-relaxed">
        Welcome to your Admin Dashboard — the control center of all activities.  
        Here you can track every service request submitted by users in real time.  
        Stay informed with clear insights into accepted, rejected, and pending requests.  
        Use these analytics to make faster decisions and improve overall efficiency.  
        Your dashboard is designed to give you clarity, control, and confidence every day.  
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li className="hover:text-cyan-300 transition">Track total requests submitted by users</li>
        <li className="hover:text-green-300 transition">Monitor approvals and rejections</li>
        <li className="hover:text-yellow-300 transition">Stay updated with pending requests</li>
      </ul>
    </div>



          <div className="flex justify-center mt-[0px]">
            <img 
              src={BannerImage} 
              alt="Dashboard Overview" 
              className="w-[300px] max-w-md h-[400px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">Total Requests</h2>
            <p className="text-3xl font-extrabold">{stats.total}</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">Accepted</h2>
            <p className="text-3xl font-extrabold text-green-600">{stats.accepted}</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">Rejected</h2>
            <p className="text-3xl font-extrabold text-red-600">{stats.rejected}</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">Pending</h2>
            <p className="text-3xl font-extrabold text-yellow-500">{stats.pending}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;