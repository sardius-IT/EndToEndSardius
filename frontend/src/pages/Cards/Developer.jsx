import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cloudImage from "../../assets/modern.avif";
import Illustration from "../../assets/resource.avif";
import clouds from "../../assets/business.avif";
import Cloud from "../Rolerate/Cloud";
import ScrollToTopButton from "../../pages/Toparrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactUsButton from '../../pages/Contactusbutton';

const Card = ({ title, description }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-md hover:scale-105 transition-transform h-full flex flex-col justify-center">
    <h1 className="text-xl font-bold mb-3 text-center text-black">{title}</h1>
    <ul className="list-disc list-inside text-gray-700">
      {description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

function Developer() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Frontend Developer",
      description:
        "Frontend developers focus on building the parts of websites and applications that users interact with directly.",
      image: cloudImage,
      cards: [
        {
          title: "React.js",
          description: [
            "Developed by Facebook",
            "Component-based architecture",
            "Very popular for building fast, dynamic UIs",
          ],
        },
        {
          title: "Angular",
          description: [
            "Utility-first CSS framework",
            "Highly customizable",
            "Responsive design out of the box",
          ],
        },
        {
          title: "Next.js",
          description: [
            "React framework for production",
            "Supports server-side rendering",
            "Built-in routing and API routes",
          ],
        },
      ],
    },
    {
      title: "Backend Developer",
      description:
        "Backend developers work behind the scenes to build the server, databases, and APIs that handle the core functionality of applications.",
      image: clouds,
      cards: [
        {
          title: "Node.js",
          description: [
            "JavaScript runtime backend",
            "Built on Chrome's V8 engine",
            "Handles asynchronous events efficiently",
          ],
        },
        {
          title: "MongoDB",
          description: [
            "NoSQL database solution",
            "Stores data in flexible JSON-like format",
            "Scales horizontally easily",
          ],
        },
        {
          title: "Spring Boot",
          description: [
            "Minimalist web framework for Node.js",
            "Simplifies server-side coding",
            "Robust routing and middleware support",
          ],
        },
      ],
    },
    {
      title: "QA Engineer",
      description:
        "QA Engineers are responsible for testing applications to ensure they are reliable and perform well.",
      image: cloudImage,
      cards: [
        {
          title: "Selenium",
          description: [
            "Automate browser testing",
            "Supports multiple programming languages",
            "Open-source testing framework",
          ],
        },
        {
          title: "Jest",
          description: [
            "JavaScript testing framework",
            "Works well with React",
            "Snapshot testing and code coverage",
          ],
        },
        {
          title: "Cypress",
          description: [
            "Frontend testing tool",
            "Fast, easy, reliable testing",
            "Real-time reloads and automatic waiting",
          ],
        },
      ],
    },
    {
      title: "DevOps Engineer",
      description:
        "DevOps engineers bridge the gap between development and operations teams.",
      image: clouds,
      cards: [
        {
          title: "Docker",
          description: [
            "Containerize applications",
            "Portable and lightweight",
            "Simplifies deployment process",
          ],
        },
        {
          title: "Kubernetes",
          description: [
            "Orchestrate containers",
            "Manages scaling and deployment",
            "High availability and fault tolerance",
          ],
        },
        {
          title: "AWS",
          description: [
            "Cloud service provider",
            "Scalable compute and storage solutions",
            "Wide range of managed services",
          ],
        },
      ],
    },
    {
      title: "Mobile App Developer",
      description:
        "Mobile developers create apps that run on iOS and Android devices.",
      image: cloudImage,
      cards: [
        {
          title: "React Native",
          description: [
            "Cross-platform mobile apps",
            "Uses React and JavaScript",
            "Native performance and feel",
          ],
        },
        {
          title: "Flutter",
          description: [
            "UI toolkit for mobile apps",
            "Single codebase for iOS and Android",
            "Built by Google with Dart language",
          ],
        },
        {
          title: "Swift",
          description: [
            "Programming language for iOS apps",
            "Fast, safe, and expressive",
            "Developed by Apple",
          ],
        },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-black">
      {/* Top Section */}
      <div className="min-h-screen flex items-center p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={Illustration}
              alt="Cloud Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Take the world Development Roles
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Software development today involves multiple specialized roles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cloud Section */}
      <section className="p-3">
        <Cloud />
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <div key={index}>
          <div className="min-h-screen flex items-center justify-center p-6 md:p-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-center"
              >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  {section.title}
                </h1>

                <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                  {section.description}
                </p>

                <button
                  onClick={() => toggleSection(index)}
                  className="relative px-8 py-4 text-white font-medium bg-transparent rounded overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-100 transition rounded-3xl"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {openSection === index ? "Close" : "For More"}
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                  </span>
                </button>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-sm rounded-xl object-cover hover:shadow-purple-400 shadow-2xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Expandable Cards Section */}
          <AnimatePresence>
            {openSection === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full p-8 rounded-xl shadow-lg mt-0 mb-8"
              >
                <div className="max-w-5xl mx-auto space-y-6">
                  {section.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
                    >
                      <h3 className="text-xl font-semibold text-gray-950 mb-4">
                        {card.title}
                      </h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {card.description.map((point, id) => (
                          <li key={id}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Scroll Top Button */}
      <section className="p-4">
        <ScrollToTopButton />
      </section>
      <div>
        {/* your page content */}
        <ContactUsButton />
      </div>
    </div>
  );
}

export default Developer;
