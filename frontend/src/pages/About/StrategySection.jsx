// components/StrategySection.jsx
import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/employee.avif";
import jsIcon from "../../assets/backend.png";
import phpIcon from "../../assets/frontend.png";
import invisionIcon from "../../assets/devops.png";
import iosIcon from "../../assets/digitalmarketing.png";
import { FaBullseye, FaLightbulb, FaComments } from "react-icons/fa";

const StrategySection = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center px-8 py-16 gap-10">
      {/* Left Side - Image */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="Employee" className="rounded-3xl shadow-xl" />

        {/* Overlay Icons */}
        <img src={phpIcon} alt="Frontend" className="absolute top-[-40px] left-1/4 transform -translate-x-1/2 w-20" />
        <img src={jsIcon} alt="Backend" className="absolute top-1/4 left-[-10px] w-20" />
        <img src={invisionIcon} alt="DevOps" className="absolute bottom-1/5 left-[-10px] w-20" />
        <img src={iosIcon} alt="Digital Marketing" className="absolute bottom-[-10px] left-10 w-24" />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="max-w-xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-purple-600 font-semibold text-lg mb-2">Why Choose Us</h4>
        <h2 className="text-2xl font-bold mb-8 leading-tight ">
          Our Investment And Business Strategies.
        </h2>

        {/* Mission */}
        <motion.div
          className="flex items-start mb-6"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <FaLightbulb className="text-purple-600 text-6xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-1">Our Mission</h3>
            <p className="text-gray-400 text-sm">
              At Sardius IT Technologies, our mission is to empower businesses through cutting-edge technology
              solutions tailored for efficiency, innovation, and sustainable growth.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="flex items-start mb-6"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          <FaComments className="text-purple-600 text-7xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-1">Our Vision</h3>
            <p className="text-gray-400 text-sm">
              Sardius IT Technologies envisions becoming a global leader in digital transformation services.
              Our goal is to set industry standards in innovation, trust, and excellence by enabling businesses
              to harness the full potential of modern technologies.
            </p>
          </div>
        </motion.div>

        {/* Focus on Quality */}
        <motion.div
          className="flex items-start"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
        >
          <FaBullseye className="text-purple-600 text-7xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-1">Focus On Quality</h3>
            <p className="text-gray-400 text-sm">
              Quality is the cornerstone of everything we do at Sardius IT Technologies. From development to
              deployment, we ensure our solutions are robust, scalable, and future-proof, providing lasting value
              to our clients.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StrategySection;
