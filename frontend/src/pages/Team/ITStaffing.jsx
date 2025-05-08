// Staffing.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../../assets/business.avif";
import image2 from "../../assets/modern.avif";
import image3 from "../../assets/resource.avif";
import image4 from "../../assets/mulitile AI.webp";
import TrustedBrands from "../../pages/Trustedbrands";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Staffing() {
  const images = [image1, image2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideIn = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const staffingCategories = [
    {
      title: "IT & Tech Talent",
      description:
        "Get skilled developers, system engineers, and IT specialists tailored to your project.",
      path: "/staffing/it-talent",
    },
    {
      title: "Administrative & Support Staff",
      description:
        "Reliable professionals to ensure your daily operations run smoothly and efficiently.",
      path: "/staffing/admin-support",
    },
    {
      title: "Project-Based Staffing",
      description:
        "Flexible staffing for short-term initiatives or one-time projects.",
      path: "/staffing/project-based",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Tell Us Your Needs",
      description:
        "Share your staffing requirements, timeline, and preferred expertise.",
    },
    {
      number: "2",
      title: "Get Matched Fast",
      description:
        "We’ll connect you with pre-vetted professionals ready to step in and contribute.",
    },
    {
      number: "3",
      title: "Onboard and Scale",
      description:
        "Start with one or more candidates and expand your team as needed.",
    },
  ];

  const skillCategories = [
    {
      title: "Technical & IT Skills",
      skills: [
        "Frontend & Backend Development",
        "Cloud & DevOps",
        "Database Management",
        "QA & Automation",
        "IT Support",
      ],
    },
    {
      title: "Business Operations",
      skills: [
        "Data Entry",
        "Administrative Assistance",
        "Scheduling",
        "Customer Support",
        "Document Management",
      ],
    },
    {
      title: "Project Management & Coordination",
      skills: [
        "Agile & Scrum",
        "Team Coordination",
        "Timeline Management",
        "Reporting",
        "Resource Allocation",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white leading-tight"
            >
              Smart <span className="text-cyan-400">Staffing Solutions</span>{" "}
              <br /> from Sardius IT Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mt-6 text-lg"
            >
              Access reliable, skilled professionals across IT, operations, and
              support roles — when you need them most.
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
              >
                Request Staffing Help
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={images[currentImage]}
              alt="Staffing Services"
              className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-xl transition-all duration-700 ease-in-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TrustedBrands />
      </motion.section>

      {/* Categories */}
      <section className="py-16 px-6 lg:px-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Flexible Staffing Options
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Whether you're building a tech team or need back-office support,
          Sardius has you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {staffingCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-gray-800 rounded-lg p-6 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[350px] relative"
            >
              <div>
                <h3 className="text-2xl py-2 font-semibold mb-2 text-white">
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-sm">{cat.description}</p>
              </div>
              <Link
                to={cat.path}
                className="absolute bottom-6 left-6 flex items-center space-x-2 text-blue-600 group-hover:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              >
                <span>View Details</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Steps */}
       <section className="min-h-screen flex flex-col items-center justify-center p-6 ">
         <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
           How to Hire Staffing Through Sardius
         </h1>
 
         <div className="relative flex flex-col md:flex-row items-center justify-center gap-24 md:gap-48 w-full max-w-7xl">
           {steps.map((step, index) => (
             <motion.div
               key={index}
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               whileHover={{ scale: 1.05 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.3, duration: 0.6 }}
               className="flex flex-col items-center text-center relative  px-6 py-8 rounded-xl shadow-md md:hover:shadow-xl transition"
             >
               {index !== 0 && (
                 <div className="absolute -left-48 top-16 transform -translate-y-1/2 h-px bg-blue-500 w-40 hidden md:block">
                   <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="2"
                       stroke="#3B82F6"
                       className="w-6 h-6"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M12 4l6 8-6 8"
                       />
                     </svg>
                   </div>
                 </div>
               )}
               <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center text-2xl text-blue-600 font-bold">
                 {step.number}
               </div>
               <h3 className="mt-8 font-bold text-white text-center">
                 {step.title}
               </h3>
               <p className="mt-6 text-sm max-w-xs text-gray-300">
                 {step.description}
               </p>
             </motion.div>
           ))}
         </div>
       </section>

      {/* Skills */}
      <section className="min-h-screen py-12 px-6 bg-gray-950">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Expertise Across Functions
          </h1>
          <p className="text-lg text-white">
            Our staffing services span IT, business operations, and project
            delivery.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="text-white p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5">
        <div className="max-w-4xl mx-auto text-center bg-blue-100 rounded-2xl p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Need Staff Urgently?
          </h2>
          <p className="text-gray-800 text-sm mb-8">
            Whether you're scaling up or filling gaps — Sardius IT Technologies
            delivers the right talent.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Book a Staffing Consultation
          </Link>
        </div>
      </section>
      {/* our team*/}

      <motion.section
        className="mb-16 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 transition-opacity duration-1000 ">
          Meet Sardius Management Consultants
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Mani ",
              role: "Management Consultants",
              quote: " Paid Ads (Google Ads, Meta Ads)",
              image: image2,
            },
            {
              name: "Vivek ",
              role: "Management Consultants",
              quote: "SEO – Search Engine Optimization",
              image: image1,
            },
            {
              name: "Charan",
              role: "Management Consultants",
              quote: "Social Media Marketing",
              image: image4,
            },
          ].map((member, i) => (
            <div key={i} className="relative w-full h-64 perspective">
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full transform-style-preserve-3d"
              >
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400 mt-2">{member.role}</p>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-center items-center transform rotate-y-180">
                  <p className="text-lg italic">“{member.quote}”</p>
                  <p className="mt-4 font-semibold">– {member.name}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
