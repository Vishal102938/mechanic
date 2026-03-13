import React from "react";
import Nav from "../components/Nav";
import AboutImage from "../assets/service.gif"; 
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />

      <div className="pt-[90px] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 min-h-[80vh]">
        
        <div className="w-full md:w-1/2 pr-6 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400
           to-yellow-400 animate-pulse text-center md:text-right">
            About Us
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <span className="font-bold">Service Platform</span>, your trusted partner for all service needs.  
            We believe that every request, whether small or big, deserves attention, care, and efficiency.  
            Our platform is designed to bridge the gap between customers and verified professionals, ensuring that you get the right help at the right time.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is simple: to make life easier by providing quick, reliable, and transparent services.  
            We aim to eliminate the hassle of finding trustworthy professionals by offering a one‑stop solution where quality and customer satisfaction come first.
          </p>


          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Journey</h2>
          <p className="text-lg leading-relaxed mb-6">
            Starting from a small idea, we have grown into a platform that serves hundreds of requests daily.  
            With each step, we have learned, adapted, and expanded our reach to ensure that our customers always feel supported and valued.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li className="animate-fadeIn">✔ Fast and secure service requests</li>
            <li className="animate-fadeIn delay-200">✔ Verified professionals with proven expertise</li>
            <li className="animate-fadeIn delay-400">✔ Real-time request tracking and updates</li>
            <li className="animate-fadeIn delay-600">✔ 24/7 support for your convenience</li>
            <li className="animate-fadeIn delay-800">✔ Transparent pricing and customer-first approach</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex justify-center animate-fadeIn mt-[30px]">
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;