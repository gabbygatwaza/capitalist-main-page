import React from "react";
import { Star } from "lucide-react";

const ProductShowcase = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 font-custom font-custom">
          COMPARTIBLE STOVE, ENERGY SAVING AND SAFE
          <br />
        </h1>
        <p className="mb-4 text-l font-custom font-bold">
          Turns Electricity Into Fire With No Smoke, <br/>
          Low Electric Consumption <br/>
          Compatible With Solar Energy.<br/>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <img
              src="/charcoalstove.png"
              alt="Men's FR/CP Lab Coat"
              className="w-full mb-2"
            />
          </div>

          <div className="bg-white p-4 shadow-md">
            <img
              src="/electricstove.png"
              alt="Women's Nomex FR/CP Lab Coat"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
