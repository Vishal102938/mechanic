import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";  

const PendingRequests = () => {
  const { serverUrl } = useContext(authDataContext);
  const [requests, setRequests] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchRequests = async () => {
    const result = await axios.get(serverUrl + "/api/service/all", { withCredentials: true });
    const pending = result.data.filter(req => req.status === "pending");

    pending.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setRequests(pending);
  };

  const updateStatus = async (id, status) => {
    await axios.patch(serverUrl + `/api/service/update/${id}`, { status }, { withCredentials: true });
    fetchRequests();
  };

  useEffect(() => { fetchRequests(); }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="hidden md:block md:ml-[20%] p-8 mt-[70px]">
        <h1 className="text-4xl font-extrabold mb-8 
          bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
          bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          Pending Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No new request found
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requests.map(req => (
              <div
                key={req._id}
                className="bg-yellow-50 text-gray-900 rounded-xl shadow-lg p-6 
                transform hover:scale-105 transition duration-500 ease-in-out border-l-4 border-yellow-400"
              >
                <h2 className="text-2xl font-bold mb-3 text-yellow-700">{req.name}</h2>
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
                <p><span className="font-semibold text-gray-700">📝 Description:</span> {req.description}</p>
                <p>
                  <span className="font-semibold text-red-600">⏳ Status:</span>
                  <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-bold">
                    {req.status}
                  </span>
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-pink-600">📅 Requested At:</span>{" "}
                  {new Date(req.createdAt).toLocaleString()}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => updateStatus(req._id, "accepted")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-transform transform hover:scale-105"
                  >
                    ✅ Accept
                  </button>
                  <button
                    onClick={() => updateStatus(req._id, "rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-transform transform hover:scale-105"
                  >
                    ❌ Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="block md:hidden p-4 mt-[70px]">
        <h1 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
          bg-clip-text text-transparent animate-pulse">
          Pending Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No new request found
          </p>
        ) : (
          <ul className="space-y-3">
            {requests.map(req => (
              <li
                key={req._id}
                onClick={() => setSelected(selected && selected._id === req._id ? null : req)}
                className={`cursor-pointer px-4 py-2 rounded-lg shadow-md 
                  ${selected && selected._id === req._id ? "bg-yellow-100 text-gray-900" : "bg-yellow-50 text-gray-900"} 
                  hover:bg-yellow-200 transition duration-300`}
              >
                <span className="font-semibold text-yellow-700">{req.name}</span>

                {selected && selected._id === req._id && (
                  <div className="mt-2 bg-white p-4 rounded-lg text-sm space-y-1 animate-fadeIn">
                    <h2 className="text-lg font-bold mb-2 text-yellow-700">{req.name}'s Request</h2>
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
                    <p><span className="font-semibold text-gray-700">📝 Description:</span> {req.description}</p>
                    <p>
                      <span className="font-semibold text-red-600">⏳ Status:</span>
                      <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold">
                        {req.status}
                      </span>
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      <span className="font-semibold text-pink-600">📅 Requested At:</span>{" "}
                      {new Date(req.createdAt).toLocaleString()}
                    </p>

                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => updateStatus(req._id, "accepted")}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition-transform 
                        transform hover:scale-105 cursor-pointer">
                        ✅ Accept
                      </button>
                      <button
                        onClick={() => updateStatus(req._id, "rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:bg-red-700 transition-transform 
                        transform hover:scale-105 cursor-pointer">
                        ❌ Reject
                      </button>
                    </div>
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

export default PendingRequests;