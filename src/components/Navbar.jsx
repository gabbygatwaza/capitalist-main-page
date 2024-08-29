import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={classNames(
          "fixed top-0 left-0 w-64 h-3/4 bg-white shadow-lg transition-transform transform lg:hidden",
          {
            "translate-x-0": isMobileMenuOpen,
            "-translate-x-full": !isMobileMenuOpen
          },
          "z-50" // Ensure it is above other content
        )}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="text-gray-700 p-4"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-semibold">
          <li>
            <Link to="/" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/comingsoon" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>
              TRAINING & RESOURCES
            </Link>
          </li>
          <li>
            <ScrollLink 
              to="AboutUs" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              className="cursor-pointer hover:text-red-600" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8 text-sm font-semibold text-gray-700">
        <li>
          <Link to="/" className="hover:text-red-600">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/comingsoon" className="hover:text-red-600">
            TRAINING & RESOURCES
          </Link>
        </li>
        <li>
          <ScrollLink 
            to="AboutUs" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            className="cursor-pointer hover:text-red-600"
          >
            ABOUT US
          </ScrollLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
