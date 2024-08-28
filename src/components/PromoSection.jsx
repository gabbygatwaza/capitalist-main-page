import React from 'react';

const PromoSection = () => {
  return (
    <div className="relative h-[500px] bg-gray-200 flex items-center">
      <img
        src="/wallpaperp.jpg"
        alt="Worker in coveralls"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 text-white p-6 md:p-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 font-custom">
          B&I Consultancy, Innovation, and Trade.
        </h2>
        <h1 className="text-4xl md:text-8xl font-bold mb-8 font-custom">
          TURN VISION INTO REALITY
        </h1>
      </div>
    </div>
  );
};

export default PromoSection;
