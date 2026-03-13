import React from "react";
import AboutImage from "../assets/user.gif"; 

const HeroSection = () => {
  return (
    <div className="pt-[90px] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 min-h-[80vh]">
      
      <div className="w-full md:w-1/2 pr-6 animate-slideUp">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-[#00c6ff]">Service Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Your one-stop solution for trusted experts and professional help.  
          Fast, reliable, and always available — simplifying your life with services at your fingertips.
        </p>

        <p className="text-md md:text-lg text-gray-300 mb-6 leading-relaxed">
          Whether you’re a busy professional, a student, or a homemaker — our platform is designed 
          to make your everyday tasks easier. From home services to tech support, we bring 
          <span className="text-[#00c6ff] font-semibold"> convenience, trust, and quality </span> 
          together in one place. Explore, connect, and experience the future of service delivery.
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-md md:text-lg text-gray-300">
            🏠 <span className="font-semibold text-white">Home Services</span> made simple — from cleaning to repairs, all at your fingertips.
          </p>
          <p className="text-md md:text-lg text-gray-300">
            💻 <span className="font-semibold text-white">Tech Support</span> whenever you need it — fast, reliable, and stress‑free.
          </p>
          <p className="text-md md:text-lg text-gray-300">
            🎓 <span className="font-semibold text-white">Learning & Guidance</span> for students and professionals to grow with expert help.
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-[#00c6ff] hover:bg-[#0072ff] text-white font-semibold px-6 py-3 rounded-full 
          shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
         
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center animate-fadeIn mt-[30px]">
        <img
          src={AboutImage}
          alt="User"
          className="w-[600px] h-[600px] rounded-full object-cover shadow-2xl border-4
           border-[#00c6ff] hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeroSection;