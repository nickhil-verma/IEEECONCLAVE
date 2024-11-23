import LOGO from "../img/IEEE.png";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for managing mobile menu

  return (
    <nav className="bg-[#e5e7ff] text-[#012ba1] sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={LOGO}
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <button className="bg-[#6a65bf] text-white hover:bg-[#012ba1] px-4 py-2 rounded-md text-sm font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#012ba1] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#e5e7ff] space-y-2 px-4 pb-4 transition-all duration-300 ease-in-out`}
      >
        <a
          href="#home"
          className="block text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </a>
        <a
          href="#services"
          className="block text-[#012ba1] hover:text-[#6a65bf] px-3 py-2 rounded-md text-sm font-medium"
        >
          Services
        </a>
        <button className="w-full bg-[#6a65bf] text-white hover:bg-[#012ba1] px-4 py-2 rounded-md text-sm font-medium">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
