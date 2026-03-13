import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const SeeContacts = () => {
  const { serverUrl } = useContext(authDataContext);
  const [contacts, setContacts] = useState([]);
  const [openId, setOpenId] = useState(null);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(serverUrl + "/api/contact/all", { withCredentials: true });
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { fetchContacts(); }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="hidden md:block md:ml-[20%] p-8 mt-[70px]">
        <h1 className="text-4xl font-extrabold mb-8 
          bg-gradient-to-r from-indigo-400 via-pink-400 to-blue-500 
          bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          Admin: Contact Messages
        </h1>

        {contacts.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No contacts found
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contacts.map(c => (
              <div
                key={c._id}
                className="bg-indigo-50 text-gray-900 rounded-xl shadow-lg p-6 
                transform hover:scale-105 transition duration-500 ease-in-out border-l-4 border-indigo-400"
              >
                <p><span className="font-semibold text-blue-600">👤 Name:</span> {c.name}</p>
                <p><span className="font-semibold text-pink-600">📧 Email:</span> {c.email}</p>
                <p><span className="font-semibold text-yellow-600">📧 Mob. Number:</span> {c.number}</p>
                <p><span className="font-semibold text-green-600">💬 Message:</span> {c.message}</p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold text-purple-600">📅 Sent At:</span>{" "}
                  {new Date(c.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="block md:hidden p-4 mt-[70px]">
        <h1 className="text-2xl font-extrabold mb-6 
          bg-gradient-to-r from-indigo-400 via-pink-400 to-blue-500 
          bg-clip-text text-transparent animate-pulse">
          Admin: Contact Messages
        </h1>

        {contacts.length === 0 ? (
          <p className="text-center text-lg font-semibold text-gray-300 italic animate-pulse">
            No contacts found
          </p>
        ) : (
          <ul className="space-y-3">
            {contacts.map(c => (
              <li key={c._id} className="bg-indigo-50 text-gray-900 rounded-lg shadow-md">
                <div
                  onClick={() => setOpenId(openId === c._id ? null : c._id)}
                  className="cursor-pointer px-4 py-3 hover:bg-indigo-100 flex justify-between items-center rounded-lg transition duration-300">
                  <span className="font-semibold text-indigo-700">{c.name}</span>
                  <span className="text-blue-500">{openId === c._id ? "▲" : "▼"}</span>
                </div>

                {openId === c._id && (
                  <div className="mt-2 bg-white p-4 rounded-lg text-sm space-y-1 animate-fadeIn">
                    <p><span className="font-semibold text-blue-600">👤 Name:</span> {c.name}</p>
                    <p><span className="font-semibold text-pink-600">📧 Email:</span> {c.email}</p>
                    <p><span className="font-semibold text-yellow-600">📧 Mob. Number :</span> {c.number}</p>
                    <p><span className="font-semibold text-green-600">💬 Message:</span> {c.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      <span className="font-semibold text-purple-600">📅 Sent At:</span>{" "}
                      {new Date(c.createdAt).toLocaleString()}
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

export default SeeContacts;