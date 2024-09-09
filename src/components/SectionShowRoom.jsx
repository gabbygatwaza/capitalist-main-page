import React from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView

const SectionShowRoom = () => {
  const leftSectionRef = React.useRef(null);
  const rightSectionRef = React.useRef(null);
  
  const leftSectionInView = useInView(leftSectionRef, { once: true });
  const rightSectionInView = useInView(rightSectionRef, { once: true });

  return (
    <div className="flex flex-col md:flex-row bg-white font-custom">
      {/* Left Section - Showroom Image */}
      <motion.div
        ref={leftSectionRef}
        className="md:w-1/2 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={leftSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/showroomb.jpeg"
          alt="CP Lab Showroom"
          className="w-full h-64 md:h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={leftSectionInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute top-0 left-0 bg-red-600 text-white px-4 py-1"
          initial={{ opacity: 0 }}
          animate={leftSectionInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          CP LAB SHOW ROOM
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 p-4 md:p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={leftSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
            SEE IT AND TOUCH IT IN OUR SHOWROOM
          </h2>
          <motion.button
            className="border border-white px-3 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
          >
            <a href="https://www.showroom.cplab.rw">VISIT OUR SHOWROOM</a>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        ref={rightSectionRef}
        className="md:w-1/2 p-4 md:p-6 flex flex-col md:flex-row items-start"
        initial={{ opacity: 0, x: 50 }}
        animate={rightSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="md:w-3/4">
          <motion.h2
            className="text-sm md:text-lg font-bold mb-2 text-left md:mb-4"
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: -20 }}
            animate={rightSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            DID YOU KNOW THAT 90% OF COMPANIES
            ON ALIBABA, MADE IN CHINA, AND 
            GLOBAL SOURCES ARE TRADING
            COMPANIES,
            NOT REAL INDUSTRIES?
          </motion.h2>
          <motion.p
            className="text-xs text-left md:text-base mb-2 md:mb-4"
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 20 }}
            animate={rightSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            In our showroom, you can see and <br />
            confirm products from the best <br />
            Chinese factories directly. <br />
          </motion.p>
          <motion.button
            className="bg-gray-200 text-xs md:text-base px-3 py-1 md:px-4 md:py-2 hover:bg-gray-300 transition mb-4"
            whileHover={{ scale: 1.05 }}
          >
        
        <a href="https://www.showroom.cplab.rw">Learn More</a>

          </motion.button>
        </div>
        <motion.div
          className="md:w-1/4 flex flex-col md:flex-row justify-end space-y-12 md:space-y-0 md:space-x-4 mt-4 md:mt-12"
          initial={{ opacity: 0 }}
          animate={rightSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.img
            src="/showroomc.jpeg"
            alt="Showroom Document 1"
            className="w-full h-48 md:w-80 md:h-72 object-cover shadow-xl mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/showrooma.jpeg"
            alt="Showroom Document 2"
            className="w-full h-48 md:w-full md:h-72 object-cover shadow-xl mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionShowRoom;
