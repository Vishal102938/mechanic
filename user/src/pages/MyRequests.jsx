import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MyRequests = () => {
  const { serverUrl } = useContext(authDataContext);
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(serverUrl + "/api/service/my-requests", {
        withCredentials: true,
      });
      setRequests(res.data);
    } catch (err) {
      console.log("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
    const interval = setInterval(fetchRequests, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />
      <div className="p-8 mt-[70px]">
        <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          My Service Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No requests found
          </p>
        ) : (
          <ul className="space-y-6">
            {requests.map((req) => (
              <li
                key={req._id}
                className="border-b border-gray-600 pb-4 hover:bg-[#1b2a30] transition duration-300 rounded-lg px-4 py-2 flex justify-between items-start"
              >
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-blue-300 mb-2">{req.name}</p>
                  <p>
                    <span className="font-semibold text-pink-400">📱 Mobile:</span>{" "}
                    {req.mobile}
                  </p>
                  <p>
                    <span className="font-semibold text-indigo-400">🏠 Address:</span>{" "}
                    {req.houseNumber}, {req.street}
                    {req.landmark ? `, ${req.landmark}` : ""}, {req.locality}, {req.district}, {req.state} - {req.pincode}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-400">🛠️ Service:</span>{" "}
                    <span className="ml-2 px-2 py-1 bg-blue-900 rounded-lg text-sm font-medium">
                      {req.serviceType}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-400">📝 Description:</span>{" "}
                    {req.description}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    ⏰ Requested At: {new Date(req.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="text-right self-end mb-20 md:mr-15 ">
                  <span
                    className={
                      req.status === "accepted"
                        ? "text-green-400 font-bold"
                        : req.status === "rejected"
                        ? "text-red-400 font-bold"
                        : "text-yellow-400 font-bold"
                    }
                  >
                    {req.status.toUpperCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyRequests;