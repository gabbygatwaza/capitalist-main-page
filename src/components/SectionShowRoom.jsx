import React from 'react';

const SectionShowRoom = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white">
      {/* Left Section */}
      <div className="relative md:w-1/2 mb-4 md:mb-0">
        <img
          src="/truckcarryingcontainer.png"
          alt="CP LAB SHOWROOM"
          className="w-full h-64 md:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">SEE IT AND TOUCH IN CP LAB SHOWROOM</h2>
          <p className="text-sm md:text-base text-center mb-4">
            Did you know that 90% of companies on Alibaba, Made in China, and Global Sources are trading companies, not real industries?
          </p>
          <p className="text-sm md:text-base text-center mb-4">
            In our showroom, you can see and confirm the products from the best Chinese factories directly.
          </p>
          <a 
            href="#" 
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-200 transition"
          >
            Visit Showroom
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 grid grid-cols-2 gap-2 md:gap-4">
        <img src="/wallpaperp.jpg" alt="Showroom Image 1" className="w-full h-32 md:h-64 object-cover" />
        <img src="/charcoalstove.png" alt="Showroom Image 2" className="w-full h-32 md:h-64 object-cover" />
        <img src="/electricstove.png" alt="Showroom Image 3" className="w-full h-32 md:h-64 object-cover" />
        <img src="/truckcarryingcontainer.png" alt="Showroom Image 4" className="w-full h-32 md:h-64 object-cover" />
      </div>
    </div>
  );
};

export default SectionShowRoom;
