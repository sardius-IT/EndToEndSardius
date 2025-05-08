import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Illustration from "../../assets/mulitile AI.webp"; // (change to your staffing image)
import staffingImage1 from "../../assets/abstract.avif";
import staffingImage2 from "../../assets/business.avif";
import staffingImage3 from "../../assets/mulitile AI.webp";
import Staffingrate from "../Rolerate/Staffingrate";
import ScrollToTopButton from "../../pages/Toparrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactUsButton from "../../pages/Contactusbutton";

const Card = ({ title, points }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-md hover:scale-105 transition-transform h-full flex flex-col justify-center">
    <h1 className="text-xl font-bold mb-3 text-center text-black">{title}</h1>
    <ul className="list-disc list-inside text-gray-700">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

function Staffing() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Permanent Staffing",
      description:
        "We provide highly skilled permanent employees who seamlessly integrate into your organization’s culture and help you achieve long-term success.",
      image: staffingImage1,
      cards: [
        {
          title: "Talent Acquisition",
          points: [
            "Industry-specific hiring experts",
            "Cultural fit assessment",
            "End-to-end recruitment solutions",
          ],
        },
        {
          title: "Onboarding Support",
          points: [
            "Smooth transition process",
            "Documentation and compliance help",
            "First 90 days support check-ins",
          ],
        },
        {
          title: "Retention Strategies",
          points: [
            "Employee engagement programs",
            "Performance tracking",
            "Growth and learning opportunities",
          ],
        },
      ],
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible staffing models for short-term or project-based needs without the long-term commitment.",
      image: staffingImage2,
      cards: [
        {
          title: "Project-Based Hiring",
          points: [
            "Quick deployment of skilled workforce",
            "Scalable teams based on project needs",
            "Short and long-term contracts",
          ],
        },
        {
          title: "Temporary Staffing",
          points: [
            "Fill immediate gaps quickly",
            "Reduce full-time headcount pressure",
            "Specialized short-term skills",
          ],
        },
        {
          title: "Freelance Talent",
          points: [
            "Access to niche experts",
            "Flexible engagement models",
            "Pay-as-you-go contracts",
          ],
        },
      ],
    },
    {
      title: "Executive Search",
      description:
        "Specialized headhunting service for sourcing top-level executives and leadership roles.",
      image: staffingImage3,
      cards: [
        {
          title: "C-Suite Hiring",
          points: [
            "CEO, CFO, CTO placements",
            "Proven track record sourcing leaders",
            "Global leadership network access",
          ],
        },
        {
          title: "Confidential Searches",
          points: [
            "Maintain company privacy",
            "Discreet search and selection",
            "Highly sensitive placements",
          ],
        },
        {
          title: "Leadership Advisory",
          points: [
            "Succession planning support",
            "Organizational leadership development",
            "Executive assessment services",
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
              alt="Staffing Illustration"
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
              Find the Right Talent, Right Now
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              From permanent hires to executive leaders, we help you build the
              team you need to grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cloud Section */}
      <section className="p-3">
        <Staffingrate />
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
                    <Card key={idx} title={card.title} points={card.points} />
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

export default Staffing;
