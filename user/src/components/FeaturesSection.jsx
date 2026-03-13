import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🚀",
      title: "Fast & Reliable",
      text: "Get your tasks done quickly with trusted experts."
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      text: "Your data and privacy are always protected."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      text: "Access services anytime, anywhere across the world."
    },
    {
      icon: "💡",
      title: "Smart Solutions",
      text: "Innovative help tailored to your everyday needs."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16 px-8 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#ff6a00] bg-clip-text text-transparent drop-shadow-lg">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-200 italic tracking-wide">
          We bring <span className="text-[#00c6ff] font-bold">speed</span>, 
          <span className="text-[#ff6a00] font-bold"> security</span>, 
          and <span className="text-[#00ff88] font-bold"> convenience</span> together for you.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#00c6ff]/10 rounded-xl p-6 text-center shadow-lg hover:scale-105 hover:bg-[#00c6ff]/20 transition-transform duration-500"
          >
            <div className="text-6xl mb-4 animate-bounce">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#00c6ff] tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-md md:text-lg font-light">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default FeaturesSection;