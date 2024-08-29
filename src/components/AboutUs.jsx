import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // About Us Section Animation
  const aboutControls = useAnimation();
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });

  // Our Services Section Animation
  const servicesControls = useAnimation();
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
  });

  // Supply of High Demand Products Section Animation
  const productsControls = useAnimation();
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (aboutInView) {
      aboutControls.start({ opacity: 1, x: 0 });
    }
    if (servicesInView) {
      servicesControls.start({ opacity: 1, y: 0 });
    }
    if (productsInView) {
      productsControls.start({ opacity: 1, x: 0 });
    }
  }, [
    aboutInView,
    servicesInView,
    productsInView,
    aboutControls,
    servicesControls,
    productsControls,
  ]);

  return (
    <div className="flex flex-col lg:flex-row bg-white text-black p-4 font-custom border-b" id="AboutUs">
      {/* About Us Section */}
      <div className="lg:w-1/3 p-4 border">
        {/* New Div with Image */}
        <div className="mb-4">
          <img
            src="/about1.png"
            alt="About Us Image"
            className="w-full h-28 object-cover"
          />
        </div>

        {/* Motion Div with Text Content */}
        <motion.div
          ref={aboutRef}
          className="p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutControls}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 border-b-2 mb-4 border-sky-600">
            关于我们
            <br />
            ABOUT US
          </h2>
          <p className="mb-4">
            我们是一家中非咨询和贸易公司，在中国和非洲都有业务运营。总部位于卢旺达，在湖南长沙设有办公室。
          </p>
          <p className="mb-4">
            "We are a China-Africa consultancy and trading company, operating in
            both China and Africa. Headquarters in Rwanda, with an office in
            Changsha, Hunan, we have showroom in Rwanda where we showcase our
            partners' products and coordinate the market demands."
          </p>
          <div className="grid grid-cols-2 gap-6">
            <img src="/showrooma.jpeg" alt="Showroom 1" className="w-full h-full" />
            <img src="/showroomb.jpeg" alt="Showroom 2" className="w-full" />
          </div>
        </motion.div>
      </div>

      {/* Our Services Section */}
      <motion.div
        ref={servicesRef}
        className="lg:w-1/3 p-4 bg-blue-800 text-white border"
        initial={{ opacity: 0, y: 50 }}
        animate={servicesControls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Your existing content here */}
        <h2 className="text-2xl font-bold mb-4">
          我们的服务
          <br />
          Our Services
        </h2>
        <h3 className="text-xl font-semibold mb-2">
          1. China-Africa Business Consultant
        </h3>
        <div className="mb-4 border p-4">
          <h4 className="font-semibold">
            Supply Chain Consultancy (供应链咨询):
          </h4>
          <p className="text-sm">
            We design, teach, and consult Chinese factories and suppliers on how
            to engage with the African market.
          </p>
        </div>
        <div className="mb-4 border p-4">
          <h4 className="font-semibold">
            Sales Agents/Distributors (销售代理/经销商):
          </h4>
          <p className="text-sm">
            We act as sales agents and distributors for Chinese manufacturers
            who want to sell to Africa.
          </p>
        </div>
        <div className="mb-4 mb-4 border p-4">
          <h4 className="font-semibold">Going to Africa (赴非发展):</h4>
          <p className="text-sm">
            We help arrange and coordinate all travel arrangements to Africa,
            including hotels, transportation, restaurants, translation,
            information, negotiations, and follow-up.
          </p>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">
          2. Logistics & Tax Clearance (物流与税务清关)
        </h3>
        <ul className="list-disc list-inside border p-4">
          <li>从中国运往非洲/Shipping from China to Africa</li>
          <li>非洲境内运输与清关/Inland Transport and Customs Clearance</li>
          <li>进口服务/Importation Services</li>
          <li>农产品与矿产品/Agricultural Products and Minerals</li>
        </ul>
      </motion.div>

      {/* Supply of High Demand Products Section */}
      <motion.div
        ref={productsRef}
        className="lg:w-1/3 p-4 border"
        initial={{ opacity: 0, x: 50 }}
        animate={productsControls}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Your existing content here */}
        <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-sky-600">
          东非高需求产品供应
          <br />
          Supply of High Demand Products in East Africa
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-800">Agriculture (农业):</h3>
          <ul className="list-disc list-inside">
            <li>Irrigation Technology (灌溉技术)</li>
            <li>Agricultural Sensors (农业传感器)</li>
            <li>Animal Tags Managing System (动物标签管理系统)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-800">Solar Energy (太阳能):</h3>
          <ul className="list-disc list-inside">
            <li>Panels (太阳能板)</li>
            <li>Inverters (逆变器)</li>
            <li>Battery (电池)</li>
            <li>Stoves (炉灶)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold  text-blue-800">
            Decorative Materials (装饰材料):
          </h3>
          <ul className="list-disc list-inside">
            <li>Melamine MDF (三聚氰胺中密度纤维板)</li>
            <li>Gypsum Board (石膏板)</li>
            <li>WPC Wall Panels (木塑复合墙板)</li>
            <li>Marine Board (海洋板)</li>
            <li>PU Stones (聚氨酯石石)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800">Fabrics (面料):</h3>
          <ul className="list-disc list-inside">
            <li>Garments Fabrics (服装面料)</li>
            <li>Furniture Fabrics (家具面料)</li>
            <li>Shoes & Bags Fabrics (鞋包面料)</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
