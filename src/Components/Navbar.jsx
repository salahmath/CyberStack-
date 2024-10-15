import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-3 ml-0 lg:ml-36 mt-4">
          <a href="/" className="text-3xl font-bold text-gray-600 logoT">
            CYBER <span className="text-red-500 logoT">STACK</span>
          </a>
        </div>

        {/* Menu icon for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-yellow-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 mr-0 lg:mr-24">
          <a href="#home" className="text-gray-700 hover:text-yellow-600 item">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-yellow-600 item">
            About Us
          </a>
          <a href="#services" className="text-gray-700 hover:text-yellow-600 item">
            Services
          </a>
          <a href="#team" className="text-gray-700 hover:text-yellow-600 item">
            Team
          </a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-600 item">
            Contact
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4">
            <a href="#home" className="text-gray-700 hover:text-yellow-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-yellow-600">
              Services
            </a>
            <a href="#team" className="text-gray-700 hover:text-yellow-600">
              Team
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
