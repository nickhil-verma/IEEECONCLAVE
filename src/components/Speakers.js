import React from "react";
import { FaUser, FaRegAddressCard, FaUsersCog, FaChalkboardTeacher } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Speakers = () => {
  const speakers = [
    { name: "Arjun Kapoor", image: "https://via.placeholder.com/150" },
    { name: "Priya Sharma", image: "https://via.placeholder.com/150" },
    { name: "Rahul Verma", image: "https://via.placeholder.com/150" },
    { name: "Sneha Iyer", image: "https://via.placeholder.com/150" },
    { name: "Ravi Mehta", image: "https://via.placeholder.com/150" },
    { name: "Ananya Das", image: "https://via.placeholder.com/150" },
    { name: "Karan Patel", image: "https://via.placeholder.com/150" },
    { name: "Pooja Singh", image: "https://via.placeholder.com/150" },
    { name: "Vikram Gupta", image: "https://via.placeholder.com/150" },
    { name: "Meera Krishnan", image: "https://via.placeholder.com/150" },
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

      {/* Marquee Section */}
      <div className="relative overflow-hidden mb-16">
        <Marquee gradient={false} speed={50} pauseOnHover>
          <div className="flex gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="w-48 border-[1px] border-gray-300 bg-white rounded-lg p-4 flex flex-col items-center shadow-lg"
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
        </Marquee>

        {/* Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#e5e7ff] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#e5e7ff] to-transparent pointer-events-none"></div>
      </div>

      {/* Target Audience Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#012ba1] mb-8">
          Target Audience
        </h2>

        {/* Cards for Target Audience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
