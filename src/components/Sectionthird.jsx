import React from "react";

const BulwarkInstitute = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white border">
      {/* Left section with text and button */}
      <div className="w-full md:w-1/2 p-8 space-y-4 bg-white">
        <div className="flex space-x-2 items-center mb-4">
          {/* Red line decorations */}
          <div className="w-8 h-1 bg-red-600"></div>
          <div className="w-4 h-1 bg-red-600"></div>
          <div className="w-2 h-1 bg-red-600"></div>
        </div>
        <h1 className="text-4xl font-bold text-black">
        Dar es Salaam or Mombassa
        </h1>
        <p className="text-gray-600 ">
          Shipping a container from China to Rwanda via the Mombasa port takes
          only 30 days. This efficiency is largely due to the fact that most
          goods from regions such as Guangzhou, Shenzhen, Hunan, Sichuan,
          Zhejiang, and Shandong pass through the Guangzhou Foshan port. This
          port's high volume of goods allows vessels to be filled quickly,
          facilitating faster departures. Additionally, customs clearance and
          logistics at the Mombasa port are notably quicker compared to those at
          Dar es Salaam, further expediting the process.
        </p>
        <button className="border border-black text-black py-2 px-4 hover:bg-gray-300">
          LEARN MORE
        </button>
      </div>

      {/* Right section with image */}
      <div className="w-full md:w-1/2 bg-gray-300">
        {/* Placeholder for the image */}
        <img src="/truckcarryingcontainer.png" alt="Training Session" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BulwarkInstitute;
