import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion and useInView

const PromoSection = () => {
  // Create a ref to the section you want to animate
  const ref = React.useRef(null);
  // Track whether the section is in view
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative h-[500px] bg-gray-200 flex items-center font-custom">
      <motion.img
        src="/wallpaperp.jpg"
        alt="Worker in coveralls"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 5 }}
      />
      <div className="relative z-10 text-white p-6 md:p-12">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4 font-custom"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          B&I Consultancy, Innovation, and Trade.
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-8xl font-bold mb-8 font-custom"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          TURN VISION INTO REALITY
        </motion.h1>
      </div>
    </div>
  );
};

export default PromoSection;
