import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-between items-center font-custom">
      {/* Logo Section */}
      <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-6 mb-4 md:mb-0">
        <img src="/showroom.png" alt="Workrite" className="h-8 md:h-10" />
        <img src="/hunanlogo.png" alt="Bulwark" className="h-8 md:h-10" />
        <img src="/capitalistlogo.png" alt="Bulwark Protection" className="h-12 md:h-16" />
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
        <a href="#" className="hover:text-gray-400"> </a>
        <a href="#" className="hover:text-gray-400">+25078xxxxxxx</a>
      </div>
    </header>
  );
};

export default Header;
