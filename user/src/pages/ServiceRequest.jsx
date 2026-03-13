import React, { useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ServiceRequest = () => {
  const { serverUrl } = useContext(authDataContext);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [state] = useState("Delhi");
  const [district, setDistrict] = useState("");
  const [locality, setLocality] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorData, setErrorData] = useState(null);
  
  const districts = [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ];

  const localities = {
    "Central Delhi": [
      "Connaught Place",
      "Karol Bagh",
      "Paharganj",
      "Daryaganj",
      "Chandni Chowk",
      "Sadar Bazaar",
    ],
    "East Delhi": [
      "Laxmi Nagar",
      "Mayur Vihar",
      "Preet Vihar",
      "Patparganj",
      "Vivek Vihar",
      "Shahdara",
    ],
    "New Delhi": [
      "Chanakyapuri",
      "RK Puram",
      "Sarojini Nagar",
      "Vasant Vihar",
      "Lodhi Colony",
      "Indraprastha",
    ],
    "North Delhi": [
      "Civil Lines",
      "Model Town",
      "Timarpur",
      "Burari",
      "Mukherjee Nagar",
      "Kashmiri Gate",
    ],
    "North East Delhi": [
      "Seelampur",
      "Yamuna Vihar",
      "Bhajanpura",
      "Gokulpuri",
      "Mustafabad",
      "Karawal Nagar",
    ],
    "North West Delhi": [
      "Rohini",
      "Pitampura",
      "Shalimar Bagh",
      "Mangolpuri",
      "Keshav Puram",
      "Ashok Vihar",
    ],
    Shahdara: [
      "Dilshad Garden",
      "GTB Enclave",
      "Nand Nagri",
      "Seemapuri",
      "Jhilmil Colony",
      "Vivek Vihar",
    ],
    "South Delhi": [
      "Saket",
      "Malviya Nagar",
      "Hauz Khas",
      "Green Park",
      "Mehrauli",
      "Vasant Kunj",
    ],
    "South East Delhi": [
      "Kalkaji",
      "Okhla",
      "Jamia Nagar",
      "New Friends Colony",
      "Amar Colony",
      "Sarita Vihar",
    ],
    "South West Delhi": [
      "Dwarka",
      "Najafgarh",
      "Palam",
      "Vasant Vihar",
      "Indira Gandhi Airport Area",
      "Mahipalpur",
    ],
    "West Delhi": [
      "Janakpuri",
      "Tilak Nagar",
      "Rajouri Garden",
      "Punjabi Bagh",
      "Paschim Vihar",
      "Uttam Nagar",
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/service/request",
        {
          name,
          mobile,
          houseNumber,
          street,
          landmark,
          pincode,
          state,
          district,
          locality,
          serviceType,
          description,
        },
        { withCredentials: true }
      );
      setSuccessData(result.data);
      setErrorData(null);
      setMobile("");
      setDistrict("");
      setLocality("");
      setServiceType("");
      setDescription("");
      setHouseNumber("");
      setStreet("");
      setLandmark("");
      setPincode("");
    } catch (error) {
      console.log(error);
      setErrorData(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <Nav />

      <div className="flex items-center justify-center pt-[90px] text-black">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-8 w-[400px] flex flex-col gap-4 transform hover:scale-105 transition duration-500 ease-in-out"
        >
          <h2
            className="text-3xl font-extrabold text-center mb-4 
            bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 
            bg-clip-text text-transparent"
          >
            Request a Service
          </h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            placeholder="House / Flat Number"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street / Road Name"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            placeholder="Nearby Landmark"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Pincode"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="text"
            value="Delhi"
            readOnly
            className="border p-2 rounded bg-gray-100 text-gray-700"
          />

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <select
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            disabled={!district}
          >
            <option value="">Select Locality</option>
            {district &&
              localities[district]?.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
          </select>

          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="">Select Service Type</option>
            <option value="AC Repair">AC Repair</option>
            <option value="Fridge Repair">Fridge Repair</option>
            <option value="Cooler Repair">Cooler Repair</option>
            <option value="Room Heater Repair">Room Heater Repair</option>
            <option value="Microwave Repair">Microwave Repair</option>
            <option value="Mixer Grinder Repair">Mixer Grinder Repair</option>
            <option value="Electric Kettle Repair">
              Electric Kettle Repair
            </option>
            <option value="Electric Iron Repair">Electric Iron Repair</option>
            <option value="TV Repair">TV Repair</option>
            <option value="Inverter Repair">Inverter Repair</option>
          </select>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your issue..."
            className="border p-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-105"
          >
            {loading ? (
              <span className="loader border-2 border-t-2 border-white rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Submit Request"
            )}
          </button>
        </form>
      </div>

      {successData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-black rounded-lg shadow-2xl p-6 w-[350px] text-center transform animate-bounceIn">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-green-600">
              Request Submitted!
            </h2>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Request ID:</span>{" "}
              {successData._id}
            </p>
            <p className="mb-4 text-gray-600">
              Your service request has been submitted successfully.
            </p>

            <button
              onClick={() => setSuccessData(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {errorData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-[350px] text-center relative">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-2 text-red-600">
              Request Failed!
            </h2>
            <p className="mb-4 text-gray-600">
              ❌ Error submitting request. Please try again.
            </p>

            <button
              onClick={() => setErrorData(null)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServiceRequest;
