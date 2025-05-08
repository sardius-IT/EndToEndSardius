import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../../assets/resource.avif";
import image2 from "../../assets/mulitile AI.webp";
import image3 from "../../assets/resource.avif";
import image4 from "../../assets/mulitile AI.webp";
import TrustedBrands from "../../pages/Trustedbrands";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectManagerTeam() {
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

  const steps = [
    {
      number: "1",
      title: "Speak With a Project Advisor",
      description:
        "A Sardius advisor will assess your project needs, workflows, and timeline requirements to recommend the ideal PM setup.",
    },
    {
      number: "2",
      title: "Meet Hand-Selected Project Managers",
      description:
        "Within 24 hours, we’ll connect you with pre-vetted project managers with experience in your domain.",
    },
    {
      number: "3",
      title: "Trial and Engagement",
      description:
        "Start with a risk-free trial. Only proceed if the project manager meets your standards and integrates seamlessly.",
    },
  ];

  const skillCategories = [
    {
      title: "Agile & Scrum",
      skills: [
        "Certified Scrum Masters (CSM)",
        "Agile Coaches",
        "Product Owners",
        "Jira",
        "Kanban",
        "SAFe Methodology",
      ],
    },
    {
      title: "Traditional Project Management",
      skills: [
        "PMP Certified",
        "Waterfall Methodology",
        "Gantt Charts",
        "Risk Management",
        "Budget Control",
        "Resource Allocation",
      ],
    },
    {
      title: "Technical Project Management",
      skills: [
        "Software Development Background",
        "Cloud & DevOps Oversight",
        "System Integration",
        "Stakeholder Communication",
        "Process Optimization",
      ],
    },
  ];

  const teamCategories = [
    {
      title: "Web Project Managers ",
      description:
        "At Sardius IT Technologies, our Web Project Managers play a crucial role in delivering high-quality, customized web solutions that meet our clients' strategic goals.",
      path: "/developer",
    },
    {
      title: "Mobile Project Managers",
      description:
        "At Sardius IT Technologies, our Mobile Project Managers are at the forefront of delivering cutting-edge mobile solutions that drive user engagement and business growth. ",
      path: "/developer",
    },
    {
      title: "Agile Consultants",
      description:
        "At Sardius IT Technologies, our Agile Consultants play a pivotal role in transforming organizations through adaptive and efficient Agile methodologies.",
      path: "/itteam",
    },
  ];
  const consultants = [
    {
      name: "Jakub Rehor",
      role: "Finance Expert",
      previous: "McKinsey & Company",
      image: image1,
    },
    {
      name: "Vincent Grandjean",
      role: "Business Strategist",
      previous: "EY",
      image: image2,
    },
    {
      name: "Margaryta Pugachova",
      role: "M&A Expert",
      previous: "Deloitte",
      image: image1,
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
              className="text-5xl font-bold text-white leading-tight"
            >
              Hire the <span className="text-cyan-400">Top 5%</span> of <br />
              Project Managers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mt-6 text-lg"
            >
              Sardius IT Technologies provides companies with elite project
              managers to drive execution, optimize processes, and ensure
              successful delivery. Hire top-tier talent to scale your operations
              with confidence.
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
                Hire a Project Manager
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
              alt="Project Manager"
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

      {/* Categories Section */}
      <div className="py-16 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">
          Find the Project Managers You Need
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Access a network of freelance digital and technical project managers
          with certifications and expertise across numerous approaches.
        </p>

        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-gray rounded-lg shadow-sm shadow-white p-6 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[350px] relative"
              >
                <div>
                  <h3 className="text-2xl py-2 font-semibold mb-2 group-hover:text-white text-white">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                    {cat.description}
                  </p>
                </div>
                <Link
                  to={cat.path}
                  className="absolute bottom-6 left-6 flex items-center space-x-2 text-blue-600 group-hover:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span>View {cat.title}</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          How to Hire Project Managers Through Sardius
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

      {/* Skills Section */}
      <section className="min-h-screen py-12 px-6 bg-gray-950">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Looking for Specific PM Skills?
          </h1>
          <p className="text-lg text-white">
            From Agile to Waterfall, Sardius helps you access world-class
            project leaders with deep domain expertise.
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
            Need a Specific Project Manager?
          </h2>
          <p className="text-gray-800 text-sm mb-8">
            Whether you're scaling a team or delivering a critical project,
            we’ll help you find the perfect PM fit.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Schedule a Consultation
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
