import React, { useState } from "react";
import image1 from "../assets//modern.avif";
import image2 from "../assets/friends.webp";
import image3 from "../assets/friends.webp";
import image5 from "../assets/mulitile AI.webp";
import Image6 from "../assets/modern.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StrategySection from "../pages/About/StrategySection";
import StatsSection from "../pages/About/StatsSection";
import TrustedBrands from "../pages/Trustedbrands";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  };

  return (
    <div className="p-">
      <section className="text-white py-20 px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl py-6 font-bold ">About us</h1>
          <h2 className="text-gray-50 text-2xl  mb-4">
            Empowering Enterprises with End-to-End IT Solutions in Development,
            DevOps, Testing, Staffing, and Digital Marketing.
          </h2>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-12"
        >
          <StrategySection />
        </motion.section>

        <section className=" text-gray-50">
          <div className="container mx-auto p-5 pt-20" id="about_who">
            <div className="text-center mb-16">
              <h3 className="text-gray-50 text-3xl font-semibold mb-4">
                Who We Are
              </h3>
              <h2 className="text-xl mb-5 py-3">
                Sardius IT Technologies is a global technology consulting and
                cybersecurity services company committed to empowering
                organizations through intelligent digital solutions. We
                specialize in tailoring secure, scalable, and innovative systems
                to meet your business needs.
                <div className="py-3">
                  With operations in multiple countries, we deliver excellence
                  on a global scale.
                </div>
                <div>
                  <StatsSection />
                  <strong>
                    Headquartered in Chennai, India with international reach.
                  </strong>
                </div>
              </h2>
            </div>

            <div className="mb-8 text-center">
              <h3 className="text-gray-50 text-3xl font-semibold mb-4">
                How We Work
              </h3>
              <p className=" text-gray-50 text-xl">
                We prioritize transparency, collaboration, and agility in every
                project. From product development to deployment, Sardius ensures
                seamless communication and cutting-edge technology integration.
              </p>
            </div>
          </div>
        </section>

        <section className="text-white pt-10">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-50 text-4xl font-bold mb-4">
              Vision-Driven Digital Leadership
            </h2>
          </div>
        </section>

        <section className="text-gray-50 pt-10">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={image1} alt="vision" />
              <div className="flex justify-center items-center text-center text-xl">
                &quot;At Sardius, we leverage AI, data, and cloud technologies
                to enable clients to lead transformation and achieve sustainable
                growth.&quot;
              </div>
            </div>
          </div>
        </section>

        <section className="grid justify-center items-center text-white pt-10">
          <div className="container mx-auto text-center flex flex-col justify-center items-center">
            <h2 className="text-gray-50 text-4xl font-bold mb-4">
              Cross-Industry IT Expertise
            </h2>
            <h4 className="text-gray-50 font-bold">
              We bring holistic, industry-specific capabilities to help clients
              adapt and grow faster than ever.
            </h4>
          </div>
        </section>

        <section className="text-gray-50 pt-10">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
              <div className="flex justify-center items-center flex-col">
                {[
                  "Cloud Solutions",
                  "Developer",
                  "Digital Strategy",
                  "Staffing & Consulting",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="hover:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl p-4"
                  >
                    {text}
                  </div>
                ))}
              </div>
              <img src={image2} alt="expertise" />
            </div>
          </div>
        </section>

        <section className="text-white pt-10">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-50 text-4xl font-bold mb-4">
              Our Journey
            </h2>
          </div>
        </section>

        <section className=" text-gray-50 pt-10">
          <div className="container mx-auto text-center flex justify-center">
            <img src={image3} className="h-96" id="about_tree" alt="history" />
          </div>
        </section>

        <section className="text-gray-50 pt-10">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-50 text-4xl font-bold mb-4">
              Community-Driven Leadership
            </h2>
          </div>
        </section>

        <section className=" text-gray-50 pt-10">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={image5} alt="community service" />
              <div className="flex justify-center items-center text-center text-xl">
                Sardius IT Technologies actively promotes responsible AI
                development, community engagement, and skill empowerment to
                enhance global cybersecurity awareness.
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 py-10 p-5">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-gray-50 text-3xl font-semibold mb-4">
              Our Leadership Philosophy
            </h3>
            <p className="text-gray-50 text-lg py-5">
              Leadership at Sardius is cultivated through adaptive mindsets and
              measurable results. We believe great leaders are built through
              mentorship, empowerment, and innovation.
            </p>

            <Link
              to="/careers"
              className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition underline-animation"
            >
              <p>know more</p>
            </Link>
          </div>
        </div>

        {/* Trusted Brands Section with animation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-12"
        >
          <TrustedBrands />
        </motion.section>

        <motion.section
          className="flex flex-col md:flex-row items-center justify-between  text-white py-16 px-6 md:px-20 rounded-3xl gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center md:text-left max-w-xl mb-10 md:mb-0"
            variants={textVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Have a project in mind? Let’s collaborate.
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            className="flex-shrink-0 flex justify-center items-center text-center text-xl"
            variants={imageVariants}
          >
            <img
              src={Image6}
              alt="Professional woman smiling"
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </motion.div>
        </motion.section>
      </section>

      {/* Left - Info + Map */}
    
        <div className="py-2">
          <section className="w-screen h-screen overflow-hidden">
            <iframe
              title="Sardius IT Technologies Fullscreen Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2894533508255!2d78.3836257!3d17.4513199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91007a623423%3A0x6f759591de4fa10d!2sSardius%20IT%20Technology!5e0!3m2!1sen!2sin!4v1714997152005!5m2!1sen!2sin"
              className="w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      
    </div>
  );
};

export default About;
