import React from "react";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white p-8 font-custom"> {/* Add id="footer" */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Stay Connected Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">STAY CONNECTED</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 mb-2 bg-transparent border border-white"
          />
          <select className="w-full p-2 mb-2 bg-transparent border border-white text-gray-400">
            <option>I buy PPE for...</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <select className="p-2 bg-transparent border border-white text-gray-400">
              <option>Industry:</option>
            </select>
            <select className="p-2 bg-transparent border border-white text-gray-400">
              <option>Brand Interest:</option>
            </select>
          </div>
          <button className="w-full mt-2 p-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors">
            SIGN ME UP
          </button>
        </div>

        {/* Learn Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">LEARN</h2>
          <ul className="space-y-2">
            {[
              "About Us",
              "Training & Resources",
              "Catalogs",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">SUPPORT</h2>
          <ul className="space-y-2">
            {[
              "Contact Us",
              "Shipping & Delivery",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-b mt-6"></div>
      <div className="flex justify-end space-x-4 mt-8">
        <Linkedin className="w-6 h-6" />
        <Instagram className="w-6 h-6" />
        <Facebook className="w-6 h-6" />
        <Twitter className="w-6 h-6" />
      </div>
      {/* Copyright and Links */}
      <div className="mt-8 text-sm text-gray-400 flex flex-wrap justify-between items-center">
        <p>© 2024 Capitalist 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
