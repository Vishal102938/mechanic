import React from "react";
import pricing from "../assets/pricing.gif";
import repair from "../assets/repair.gif";
import expert from "../assets/service.gif";
import repairing from "../assets/repairing.gif";

const services = [
  {
    name: "Affordable Pricing",
    image: pricing,
    description:"Transparent cost structure with no hidden charges, offering value-for-money solutions."
  },
  {
    name: "Fast & Reliable Repairs",
    image: repair,
    description:"Quick response and professional service for all household appliances, ensuring minimum downtime."
  },
  {
    name: "Expert Technicians",
    image: expert,
    description:"Certified and experienced professionals who diagnose and fix issues with precision."
  },
  {
    name: "Repair Services",
    image: repairing,
    description:"Quick and trusted repair solutions for appliances and electronics."
  }
];

const Services = () => {
  return (
    <section className="py-16 px-8 md:px-16 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00c6ff] to-[#ff6a00] 
      bg-clip-text text-transparent drop-shadow-lg">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img src={service.image} alt={service.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-4">
              <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
              <p className="text-md text-gray-100 px-4 text-center">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-2">
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Services;