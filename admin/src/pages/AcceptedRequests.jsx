import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const AcceptedRequests = () => {
  const { serverUrl } = useContext(authDataContext);
  const [requests, setRequests] = useState([]);
  const [openId, setOpenId] = useState(null);

  const fetchRequests = async () => {
    const result = await axios.get(serverUrl + "/api/service/all", { withCredentials: true });
    const accepted = result.data.filter(req => req.status === "accepted");

    accepted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    setRequests(accepted);
  };

  useEffect(() => { fetchRequests(); }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="hidden md:block md:ml-[20%] p-8 mt-[70px]">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-teal-500 bg-clip-text
         text-transparent drop-shadow-lg animate-pulse">
          Accepted Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No accepted requests found
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requests.map(req => (
              <div
                key={req._id}
                className="bg-blue-50 text-gray-900 rounded-xl shadow-lg p-6 
                transform hover:scale-105 transition duration-500 ease-in-out border-l-4 border-green-400"
              >
                <h2 className="text-2xl font-bold mb-3 text-blue-700">{req.name}</h2>
                <p><span className="font-semibold text-pink-600">📱 Mobile:</span> {req.mobile}</p>
                 <p><span className="font-semibold text-indigo-600">🏠 House No:</span> {req.houseNumber}</p>
                <p><span className="font-semibold text-teal-600">🛣️ Street:</span> {req.street}</p>
                {req.landmark && (
                  <p><span className="font-semibold text-pink-600">📌 Landmark:</span> {req.landmark}</p>
                )}
                <p><span className="font-semibold text-red-600">📮 Pincode:</span> {req.pincode}</p>

                <p><span className="font-semibold text-green-600">🌍 State:</span> {req.state}</p>
                <p><span className="font-semibold text-purple-600">🏙️ District:</span> {req.district}</p>
                <p><span className="font-semibold text-orange-600">📍 Locality:</span> {req.locality}</p>
                <p>
                  <span className="font-semibold text-blue-600">🛠️ Service Type:</span>
                  <span className="ml-2 px-2 py-1 bg-blue-100 rounded-lg text-sm font-medium">
                    {req.serviceType}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-green-600">✅ Status:</span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                    {req.status}
                  </span>
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-pink-600">⏰ Accepted At:</span>{" "}
                  {new Date(req.updatedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="block md:hidden p-4 mt-[70px]">
        <h1 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-teal-500 
          bg-clip-text text-transparent animate-pulse">
          Accepted Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No accepted requests found
          </p>
        ) : (
          <ul className="space-y-3">
            {requests.map(req => (
              <li key={req._id} className="bg-blue-50 text-gray-900 rounded-lg shadow-md">
                <div
                  onClick={() => setOpenId(openId === req._id ? null : req._id)}
                  className="cursor-pointer px-4 py-3 hover:bg-blue-100 flex justify-between items-center rounded-lg transition duration-300"
                >
                  <span className="font-semibold text-blue-700">{req.name}</span>
                  <span className="text-green-500">{openId === req._id ? "▲" : "▼"}</span>
                </div>

                {openId === req._id && (
                  <div className="mt-2 bg-white p-4 rounded-lg text-sm space-y-1 animate-fadeIn">
                    <h2 className="text-lg font-bold mb-2 text-blue-700">{req.name}'s Request</h2>
                    <p><span className="font-semibold text-pink-600">📱 Mobile:</span> {req.mobile}</p>
                    <p><span className="font-semibold text-indigo-600">🏠 House No:</span> {req.houseNumber}</p>
                    <p><span className="font-semibold text-teal-600">🛣️ Street:</span> {req.street}</p>
                    {req.landmark && (
                      <p><span className="font-semibold text-pink-600">📌 Landmark:</span> {req.landmark}</p>
                    )}
                    <p><span className="font-semibold text-red-600">📮 Pincode:</span> {req.pincode}</p>

                    <p><span className="font-semibold text-green-600">🌍 State:</span> {req.state}</p>
                    <p><span className="font-semibold text-purple-600">🏙️ District:</span> {req.district}</p>
                    <p><span className="font-semibold text-orange-600">📍 Locality:</span> {req.locality}</p>
                    <p><span className="font-semibold text-blue-600">🛠️ Service Type:</span> {req.serviceType}</p>
                    <p>
                      <span className="font-semibold text-green-600">✅ Status:</span>
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
                        {req.status}
                      </span>
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      <span className="font-semibold text-pink-600">⏰ Accepted At:</span>{" "}
                      {new Date(req.updatedAt).toLocaleString()}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AcceptedRequests;