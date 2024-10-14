import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 ml-36 mt-4">
          {/* Logo image */}

          <a href="/" className="text-3xl font-bold text-grey-600">
            CYBER <span className="text-red-500">STACK</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8 mr-24">
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            Partners
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            Team
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
