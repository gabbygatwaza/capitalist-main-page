import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-lg font-bold text-red-600">CP CONSULTANCY</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-red-600 focus:outline-none"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:items-center md:space-x-8 mr-24 font-custom">
          <li>
            {" "}
            <a href="/" className="block text-gray-700 hover:text-red-600">
              HOME
            </a>
          </li>
          <li>
            <a href="/comingsoon" className="text-gray-700 hover:text-red-600 py-2">
              TRAINING & RESOURCES
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-red-600 py-2">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-red-600 py-2">
              CONTACT US
            </a>
          </li>
          <li>
            {" "}
            <a href="/cplabconsultancy" className="block text-gray-700 hover:text-red-600">
              CP CONSULTANCY
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-red-600 focus:outline-none"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="p-4 font-custom space-y-8">
          <li>
            <a href="#" className="block text-gray-700 hover:text-red-600">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-red-600">
              CP CONSULTANCY
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-red-600">
              TRAINING & RESOURCES
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-red-600">
              ABOUT US
            </a>
          </li>

          <li>
            <a href="#" className="block text-gray-700 hover:text-red-600">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
