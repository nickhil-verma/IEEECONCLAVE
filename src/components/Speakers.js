import React from "react";
import { FaUser, FaRegAddressCard, FaUsersCog, FaChalkboardTeacher } from "react-icons/fa";
import ASHWINI from "../img/Ashiwni.jpeg"
import ARUN from "../img/Arunshankar.jpeg"

const Speakers = () => {
  const speakers = [
    { name: "Ashiwni Holla", image: ARUN },
    { name: "Arun Shankar", image: ASHWINI },
    
    
  ];

  const targetAudience = [
    {
      text: "You are a Level 2 Manager & leading a Technology team either from a Product, Services, or Start-Up Organization.",
      icon: <FaRegAddressCard />
    },
    {
      text: "You are an aspiring Leader & want to understand Leadership Challenges & be ready to face them.",
      icon: <FaUsersCog />
    },
    {
      text: "You have ambitions to grow your career into a Senior Leadership Position & start working on your plans.",
      icon: <FaChalkboardTeacher />
    },
  ];

  return (
    <div id="Speakers" className="p-6 bg-gradient-to-b from-white to-[#e5e7ff] min-h-screen">
      <h1 className="text-4xl font-bold text-[#012ba1] text-center mb-8">
        Guest Speakers
      </h1>

      {/* Speakers Section */}
      <div className="flex gap-6 flex-wrap justify-center mb-16">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="w-48 border-[1px] border-gray-300 bg-white rounded-lg p-4 flex flex-col items-center shadow-lg mb-6"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-[#012ba1]">{speaker.name}</h3>
            <p className="text-sm text-gray-600">Guest Speaker</p>
          </div>
        ))}
      </div>

      {/* Target Audience Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#012ba1] mb-8">
          Target Audience
        </h2>

        {/* Cards for Target Audience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className="w-full border-[1px] border-gray-300 bg-white rounded-lg p-4 shadow-lg flex flex-col items-center text-center"
            >
              <div className="text-3xl text-[#012ba1] mb-4">
                {item.icon}
              </div>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
