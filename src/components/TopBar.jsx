 // TopBar.js
import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-gray-100 text-gray-800 text-xs py-1 px-4 flex justify-end items-center hidden md:flex">
      <p className="mr-4 ">
        CONTACT US
      </p>
      <span className="hover:underline">+250788857521</span>
    </div>
  );
};

export default TopBar;
