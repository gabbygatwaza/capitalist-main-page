import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      className="bg-white py-3 px-4 flex justify-between items-center font-custom border-b border-gray-200 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main logo */}
      <Link to="/" className="flex items-center">
        <motion.img
          src="/showroom.png"
          alt="Bulwark Protection"
          className="h-16 w-14 sm:h-32 sm:w-28 absolute left-0 z-10 mt-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Logo section for other logos - hidden on mobile devices */}
      <motion.div
        className="flex items-center space-x-6 lg:space-x-4 lg:ml-16 lg:flex-1"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-4 items-center">
          <a href="https://www.capitalist.rw" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="/capitalistmain.png"
              alt="Bulwark FR"
              className="h-10 w-24 ml-12"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <div className="border-r border-gray-300 mx-4 h-10 hidden sm:block"></div>

          <a href="https://www.showroom.cplab.rw" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="/hunanlogo.png"
              alt="Bulwark CP"
              className="h-10 w-24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <div className="border-r border-gray-300 mx-4 h-10 hidden sm:block"></div>

          <Link to="/cplabconsultancy">
            <motion.img
              src="/cpconsultancy.png"
              alt="Bulwark CP"
              className="h-10 w-24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>
      </motion.div>

      {/* Burger menu for mobile devices */}
      <div className="lg:hidden z-20">
        <motion.button
          onClick={handleMobileMenuToggle}
          className="text-gray-700"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </motion.button>
      </div>

 
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </motion.div>
  );
};

export default Header;
