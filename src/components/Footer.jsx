import React from "react";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white p-8 font-custom">
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
            <li>
              <a href="https://www.cplab.rw/comingsoon" className="hover:text-gray-300">
                Training & Resources
              </a>
            </li>
            <li>
              <a href="https://www.showroom.cplab.rw" className="hover:text-gray-300">
                Catalogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">SUPPORT</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="tel:+250788875721" className="hover:text-gray-300">
                Phone Number: 250788875721
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                长沙软件园 湖南省长沙市岳麓区高新区麓谷D栋3层004办公室.
              </a>
            </li>
            <li>
              <a href="tel:+13357145436" className="hover:text-gray-300">
                湖南才配科技有限公司 13357145436/
              </a>
            </li>
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
