import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Organizer = () => {
  return (
    <div>
      {/* Organizer Section */}
      <div className="bg-gradient-to-b from-white to-[#e5e7ff] p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-[#012ba1] text-center mb-8">
          Organizing Committee
        </h1>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-[#012ba1] mb-4">Chairperson</h2>
          <p className="text-xl text-gray-800 font-bold">Pushpa Mala</p>
          <p className="text-center text-gray-600 mt-2">
            Chair of the Organizing Committee, ensuring smooth coordination and execution of the event.
          </p>
        </div>
        <div className="mt-16 m-auto w-[190px]">
            <a href="/" className="w-full max-w-xs">
              <button className="max-sm:text-sm m-auto border-[0.5px] border-[#012ba1] text-gray-500 flex items-center hover:text-black gap-2 duration-100 hover:gap-3 hover:bg-gray-100 px-4 py-2 rounded-3xl w-full text-center">
                ✨ Register Now <span><GoArrowRight /></span>
              </button>
            </a>
          </div>
      </div>
      
      {/* Contact Section (Footer) */}
      <div className="bg-[#012ba1] text-white p-6">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-2">For inquiries, please reach out to:</p>
          <p className="text-xl mb-2">Phone: +91 90365 26233</p>
          <p className="text-xl mb-2">Email: contact@event.com</p>
          <p className="text-xl mb-2">Address: Bengaluru, India</p>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
