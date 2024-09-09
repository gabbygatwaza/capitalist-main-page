import React from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView

const ShippingSection = () => {
  const leftSectionRef = React.useRef(null);
  const rightSectionRef = React.useRef(null);
  
  const leftSectionInView = useInView(leftSectionRef, { once: true });
  const rightSectionInView = useInView(rightSectionRef, { once: true });

  return (
    <div className="flex flex-col md:flex-row items-center bg-white border">
      {/* Left section with text and button */}
      <motion.div
        ref={leftSectionRef}
        className="w-full md:w-1/2 p-8 space-y-4 bg-white"
        initial={{ opacity: 0, x: -50 }}
        animate={leftSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex space-x-2 items-center mb-4">
          {/* Red line decorations */}
          <motion.div
            className="w-8 h-1 bg-red-600"
            initial={{ scaleX: 0 }}
            animate={leftSectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-4 h-1 bg-red-600"
            initial={{ scaleX: 0 }}
            animate={leftSectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="w-2 h-1 bg-red-600"
            initial={{ scaleX: 0 }}
            animate={leftSectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div >
        </div>
        <motion.h2 className="text-4xl font-bold text-black">
           Supply And Logistics
        </motion.h2>
        <motion.h1
          className="text-xl font-bold text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={leftSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Dar es Salaam or Mombasa
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={leftSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Shipping a container from China to Rwanda via the Mombasa port takes
          only 30 days. This efficiency is largely due to the fact that most
          goods from regions such as Guangzhou, Shenzhen, Hunan, Sichuan,
          Zhejiang, and Shandong pass through the Guangzhou Foshan port. This
          port's high volume of goods allows vessels to be filled quickly,
          facilitating faster departures. Additionally, customs clearance and
          logistics at the Mombasa port are notably quicker compared to those at
          Dar es Salaam, further expediting the process.
        </motion.p>
        <motion.button
          className="border border-black text-black py-2 px-4 hover:bg-gray-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
           <a href="https://www.capitalist.rw">LEARN MORE</a>
        </motion.button>
      </motion.div>

      {/* Right section with image */}
      <motion.div
        ref={rightSectionRef}
        className="w-full md:w-1/2 bg-gray-300"
        initial={{ opacity: 0, x: 50 }}
        animate={rightSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="/truckcarryingcontainer.png"
          alt="Training Session"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={rightSectionInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default ShippingSection;
