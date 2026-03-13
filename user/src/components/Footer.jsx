import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <footer className="bg-[#0f2027] py-10 px-6 md:px-12 border-t border-gray-700 mt-[40px]  md:mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        <div>
          <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            A.K. Service Platform
          </h3>
          <p className="text-sm leading-relaxed text-gray-300 italic">
            Connecting you with trusted experts for all your service needs.  
            <span className="text-pink-400 font-semibold"> Fast</span>, 
            <span className="text-yellow-400 font-semibold"> reliable</span>, 
            and <span className="text-green-400 font-semibold"> always available</span>.  
            Our goal is to simplify your life by offering professional help at your fingertips.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quick Links
          </h3>
          <ul className="space-y-2 text-md font-medium">
            <li onClick={() => navigate('/')} className="cursor-pointer hover:text-yellow-300 transition">Home</li>
            <li onClick={() => navigate('/about')} className="cursor-pointer hover:text-green-300 transition">About</li>
            <li onClick={() => navigate('/contact')} className="cursor-pointer hover:text-pink-300 transition">Contact</li>
            <li onClick={() => navigate('/my-requests')} className="cursor-pointer hover:text-blue-300 transition">My Requests</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <p className="text-[25px] text-yellow-300 font-semibold">Pro. AKHILESH KUMAR</p>
          <p className="text-md text-pink-400">Phone: +91 8969795784</p>
          <p className="text-lg text-blue-400">Email: akhileshkum845106@gmail.com</p>
          <p className="text-md text-green-400">Address: Ghaziabad, UP, India</p>

          <div className="flex justify-center gap-6 mt-4 text-4xl">
            <a href="https://wa.me/918969795784" target="_blank" rel="noopener noreferrer" 
               className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
            
          </div>
        </div>
      </div>

    
<div className="text-center text-gray-400 mt-8 text-sm italic mb-15 sm:mb-2">
  © {new Date().getFullYear()} Service Platform. All rights reserved.
</div>
    </footer>
  );
};

export default Footer;