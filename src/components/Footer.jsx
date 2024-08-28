import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Learn Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">LEARN</h2>
          <ul className="space-y-2">
            {['About Us', 'Our Brands', 'Training & Resources', 'Careers', 'Blog', 'Catalogs'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>


        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">SUPPORT</h2>
          <ul className="space-y-2">
            {[
              'Contact Us', 'Track Your Order', 'Shipping & Delivery',
              'Warranty & Guarantee'
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end space-x-4 mt-8">
        <Linkedin className="w-6 h-6" />
        <Instagram className="w-6 h-6" />
        <Facebook className="w-6 h-6" />
        <Twitter className="w-6 h-6" />
      </div>

      {/* Copyright and Links */}
      <div className="mt-8 text-sm text-gray-400 flex flex-wrap justify-between items-center border-t">
        <p>© 2024 Capitalist Group, LLC. All Rights Reserved</p>
        <div className="space-x-4">
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;