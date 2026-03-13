import React from "react";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.gif";

const Action = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-8 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={signup}
        alt="Join Us"
        className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
      />
    </div>

        {/* Right Text + Button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug bg-gradient-to-r from-[#00c6ff] to-[#ff6a00] bg-clip-text text-transparent drop-shadow-lg">
            Ready to simplify your life? <br /> Join us today!
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed italic tracking-wide">
            Discover <span className="text-[#00c6ff] font-bold">trusted experts</span>, 
            <span className="text-[#ff6a00] font-bold"> fast solutions</span>, and 
            <span className="text-[#00ff88] font-bold"> reliable support</span> — all in one place.  
            Whether it’s home services, tech help, or learning guidance, we’ve got you covered.  
            Start your journey now and experience convenience like never before.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-500"
              onClick={() => navigate("/signup")}
            >
              Sign Up Now
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;