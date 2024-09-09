import React from 'react';
import { motion } from 'framer-motion';
import { MonetizationOn, Verified, Visibility, Business } from '@mui/icons-material';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="AboutUs" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-custom"> {/* Added id here */}
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden" 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <img src="/about3.jpg" alt="CP LAB Office" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h3>
              <p className="text-gray-600">
                We are a China-Africa consultancy and trading company, operating in both China and Africa. With headquarters in Rwanda and an office in Changsha, Hunan, we have a showroom in Rwanda where we showcase our partners' products and coordinate with market demands.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden" 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <img src="/about4.jpg" alt="China-Africa Partnership" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is wealth creation and fostering profitable China-Africa trade partnerships. We achieve this through providing central and non-central African trade solutions.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden" 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img src="/vision.jpg" alt="Our Vision" className="h-48 w-full object-cover md:w-48" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                Our vision is to be a profitable consulting firm, empowering businesses through innovative solutions and strong trade networks. We strive to be the preferred partner for businesses seeking growth and success in the China-Africa trade corridor.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <h3 className="text-2xl font-bold mb-2">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow" 
              whileHover={{ scale: 1.05 }}
            >
              <MonetizationOn color="primary" fontSize="large" className="mb-4" />
              <h4 className="font-semibold text-lg mb-2">Profitability</h4>
              <p className="text-gray-600">We focus on delivering solutions that drive business growth and financial success for our partners.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow" 
              whileHover={{ scale: 1.05 }}
            >
              <Verified color="primary" fontSize="large" className="mb-4" />
              <h4 className="font-semibold text-lg mb-2">Integrity</h4>
              <p className="text-gray-600">We build trust through honest and transparent business practices, ensuring long-term success.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow" 
              whileHover={{ scale: 1.05 }}
            >
              <Visibility color="primary" fontSize="large" className="mb-4" />
              <h4 className="font-semibold text-lg mb-2">Vision</h4>
              <p className="text-gray-600">We are focused on being a valuable partner in China-Africa trade solutions.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow" 
              whileHover={{ scale: 1.05 }}
            >
              <Business color="primary" fontSize="large" className="mb-4" />
              <h4 className="font-semibold text-lg mb-2">Partnership</h4>
              <p className="text-gray-600">We create strong, sustainable partnerships that drive long-term success in the global market.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
