import React, { useState, useContext } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { authDataContext } from "../context/AuthContext";
import Footer from "../components/Footer";

const Contact = () => {
  const { serverUrl } = useContext(authDataContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorData, setErrorData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(serverUrl + "/api/contact/create-contact", { name, number,email, message });
      setSuccessData(res.data);
      setErrorData(null);
      setName(""); setNumber("") ;setEmail(""); setMessage("");
    } catch (err) {
      setErrorData(true);
      setSuccessData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />

      <div className="flex items-center justify-center pt-[90px]">
        <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-2xl p-8 w-[400px] flex flex-col gap-4 
        relative transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <input 
            type="text" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            placeholder="Your Name" 
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
          <input 
            type="text" 
            value={number} 
            onChange={(e)=>setNumber(e.target.value)} 
            placeholder="Your Number" 
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Your Email" 
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400" 
            required 
          />
          <textarea 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)} 
            placeholder="Your Message" 
            className="border p-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-teal-400" 
            required 
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-105"
          >
            {loading ? (
              <span className="loader border-2 border-t-2 border-white rounded-full w-5 h-5 animate-spin"></span>
            ) : "Send Message"}
          </button>
        </form>
      </div>

      {successData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-black rounded-lg shadow-2xl p-6 w-[350px] text-center transform animate-bounceIn">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-green-600">Message Sent!</h2>
            <p className="mb-4 text-gray-600">Your message has been submitted successfully. We will get back to you soon.</p>
            <button 
              onClick={() => setSuccessData(null)} 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {errorData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-black rounded-lg shadow-2xl p-6 w-[350px] text-center transform animate-bounceIn">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-red-600">Failed!</h2>
            <p className="mb-4 text-gray-600">❌ Error submitting message. Please try again.</p>
            <button 
              onClick={() => setErrorData(null)} 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  );
};

export default Contact;