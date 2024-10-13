import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png" // Placeholder for logo, replace with your logo path
            alt="Company Logo"
            className="h-16 w-16 mr-4" // Increased size for a more professional look
          />
          <span className="text-2xl font-extrabold text-black tracking-wide">
            CYBERSTACK
          </span>{" "}
          {/* Adjusted text size and style */}
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-black hover:text-gray-700 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-black hover:text-gray-700 font-medium"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-black hover:text-gray-700 font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-700 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
