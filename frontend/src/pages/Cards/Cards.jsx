import React, { useState } from "react";
import { motion } from "framer-motion";
import MulitileAI from "../../assets/mulitile AI.webp";
import Resource from "../../assets/resource.avif";
import Friends from "../../assets/friends.webp";
import Abstract from "../../assets/abstract.avif";
import Business from "../../assets/business.avif";
import Modern from "../../assets/modern.avif";
import { Link } from "react-router-dom";
import Developer from "../Cards/Developer";


// Sample cards
const cards = [
  {
    category: "Development",
    title: "Frontend Developer",
    image: MulitileAI,
    hoverText: "They design and build everything users interact with directly on a website or app — like buttons, forms, animations, layouts, and dashboards.",
    hoverimage: Resource,
    link: "/developer", // ✅ USE A STRING PATH, not Developer component
  },
  {
    category: "Development",
    title: "Backend Developer",
    image: Friends,
    hoverText: "A QA Engineer is responsible for testing software manually to make sure it works correctly, is user-friendly, and free of bugs before it’s released.",
    hoverimage: Modern,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "QA Engineer",
    image: Friends,
    hoverText: "A QA Engineer is responsible for testing software manually to make sure it works correctly, is user-friendly, and free of bugs before it’s released.",
    hoverimage: Modern,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "DevOps Engineer",
    image: Modern,
    hoverbackground: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverText: "They focus on infrastructure, deployment, scaling, and monitoring of apps. Their goal is to automate and streamline building, testing, and releasing software.",
    hoverimage: Resource,
    link: "/leadership",
  },
  {
    category: "Development",
    title: "Mobile App Developer",
    image: Resource,
    hoverText: "They specialize in building mobile applications for Android and iOS platforms.",
    hoverimage: Friends,
    link: "/leadership",
  },
  {
    category: "Staffing",
    title: "Permanent Staffing",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "Hiring full-time employees for long-term roles within the organization.",
    image: Friends,
    link: "/Staffing",
  },
  {
    category: "Staffing",
    title: "Temporary/Contract Staffing",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "Hiring IT professionals on a short-term contract basis for specific projects or periods.",
    image:  Abstract,
    link: "/ai-trends",
  },
  {
    category: "Staffing",
    title: "Staff Augmentation",
    background: "bg-gradient-to-br from-purple-300 via-pink-300 to-pink-200",
    hoverText: "Adding external talent to an existing in-house team temporarily to meet specific project demands.",
    image: Friends,
    link: "/ai-trends",
  },
  {
    category: "Staffing",
    title: "Remote/Offshore Staffing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Hiring IT talent from other locations (often internationally) to work remotely, usually to reduce costs or access specialized skills.",
    hoverimage: Abstract,
    image: Friends,
    link: "/DigitalMarketing",
  },
  {
    category: "digital marketing",
    title: "Search Engine Optimization (SEO)",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Boosting website visibility through SEO strategies.",
    hoverimage: MulitileAI,
    image: Friends,
    link: "/DigitalMarketing",
  },
  {
    category: "digital marketing",
    title: "Content Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Creating and sharing valuable content to attract audiences.",
    hoverimage: MulitileAI,
    image: Modern,
    link: "/economy",
  },
  {
    category: "digital marketing",
    title: "Social Media Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Promoting brands and engaging customers on social media.",
    hoverimage: MulitileAI,
    image: Business,
    link: "/economy",
  },
  {
    category: "digital marketing",
    title: "Pay-Per-Click (PPC) Advertising",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Running paid ads to drive traffic quickly to your website.",
    hoverimage: Business,
    image: Friends,
    link: "/economy",
  },
  {
    category: "digital marketing",
    title: "Youtube Marketing",
    background: "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-200",
    hoverText: "Promoting brands through YouTube videos and campaigns.",
    hoverimage: MulitileAI,
    image:Business,
    link: "/economy",
  },
];

const filters = ["Development", "Staffing", "digital marketing"];

const CardsPage = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const defaultCards = [
    ...cards.filter((card) => card.category === "Development").slice(0, 1),
    ...cards.filter((card) => card.category === "Staffing").slice(0, 1),
    ...cards.filter((card) => card.category === "digital marketing").slice(0, 1),
  ];

  const filteredCards = activeFilter
    ? cards.filter((card) => card.category === activeFilter).slice(0, 6)
    : defaultCards;

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-8 mb-10 relative">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="relative px-8 py-2  rounded-2xl font-bold text-white"
          >
            {filter}
            {activeFilter === filter && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredCards.map((card, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className={`relative w-72 flex flex-col justify-between rounded-lg overflow-hidden shadow-lg cursor-pointer ${
              card.background
                ? card.background
                : card.dark
                ? "bg-[#0a0a0a]"
                : "bg-white"
            }`}
          >
            {/* Normal Content */}
            <div
              className={`p-10 transition-all duration-300 ${
                hoveredCard === idx ? "opacity-0" : "opacity-100"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  card.dark ? "text-white" : "text-gray-800"
                }`}
              >
                {card.category}
              </p>
              <h2
                className={`mt-4 font-bold ${
                  card.dark ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h2>
            </div>

            {/* Normal Image */}
            {card.image && (
              <img
                src={card.image}
                alt="Card illustration"
                className={`w-full object-cover h-52 transition-all duration-300 ${
                  hoveredCard === idx ? "opacity-0" : "opacity-100"
                }`}
              />
            )}

            {/* Hover content */}
            {hoveredCard === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-start bg-gradient-to-r from-purple-500 to-pink-500 text-center p-4 space-y-4"
              >
                <div className="text-lg font-bold">{card.title}</div>
                <p className="flex text-start text-sm">{card.hoverText}</p>
                {card.hoverimage && (
                  <img
                    src={card.hoverimage}
                    alt="Hover illustration"
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                )}
                <Link
                to={card.link}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition uppercase"
              >
         Know More
              </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Go Back Button */}
      {activeFilter && (
        <div className="flex justify-end py-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter("")}
            className="px-4 py-2 text-white rounded-2xl border font-bold hover:bg-blue-700 transition"
          >
            Go Back
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CardsPage;

