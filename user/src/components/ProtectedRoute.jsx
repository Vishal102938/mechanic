import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext.jsx";
import sorryImage from "../assets/sorry.gif";

const ProtectedRoute = ({ children }) => {
  const { userData } = useContext(userDataContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  if (!userData) {
    if (!showModal) setShowModal(true);

    return (
      <>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center w-[500px] h-[500px] flex flex-col items-center justify-center">
              <img src={sorryImage} alt="Access Restricted" className="w-48 h-48 mb-6 animate-fadeIn" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 animate-slideDown">
                Sorry for stopping you here 🙏
              </h2>

              <p className="text-gray-600 mb-6 text-lg animate-fadeIn"> To access this feature, please login or register first. </p>
              <button onClick={() => navigate("/signup")} className="bg-[#00c6ff] hover:bg-[#0072ff] text-white font-semibold px-8 py-4 rounded-full
               shadow-lg transition-transform transform hover:scale-105 animate-bounceSlow" >
                Go to Registration
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;