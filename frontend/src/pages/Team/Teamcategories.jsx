import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPencilRuler,
  faChartBar,
  faTasks,
  faPuzzlePiece,
  faBullhorn,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // <-- Import motion

const categories = [
  {
    title: "Developers",
    description:
      "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
    icon: faLaptopCode,
    path: "/itteam",
  },
  {
    title: " Digital Marketing ",
    description:
      "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.",
    icon: faBullhorn,
    path: "/Dmteam",
  },

  {
    title: "Project Managers",
    description:
      "Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.",
    icon: faTasks,
    path: "/Projectmanagerteam",
  },
  {
    title: "Management Consultants",
    description:
      "Finance experts, business strategists, M&A consultants, financial modelers, and more, with expertise ranging from market research to FP&A.",
    icon: faChartBar,
    path: "/ManagementConsultants",
  },

  {
    title: "Product Managers",
    description:
      "Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.",
    icon: faPuzzlePiece,
    path: "/ProductManagers",
  },

  {
    title: "staffing",
    description:
      "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.",
    icon: faPencilRuler,
    path: "/ITStaffing",
  },
];

const TeamCategories = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Employees Intro */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-5 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold py-5">
          Employees World-class Talent
        </h1>
        <p className="text-gray-600 text-lg">
          We are the largest, globally-distributed network of top business,
          design, and technology talent, ready to tackle your most important
          initiatives.
        </p>
      </motion.section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gray rounded-lg shadow-sm p-6 hover:bg-gradient-to-r from-blue-400 to-blue-500   hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[350px] relative"
          >
            <div>
              <div className="text-4xl text-blue-600 group-hover:text-white mb-4">
                <FontAwesomeIcon icon={cat.icon} />
              </div>
              <h3 className="text-2xl py-2  font-semibold mb-2 group-hover:text-white text-white">
                {cat.title}
              </h3>
              <p className="text-gray-50 group-hover:text-gray-200 text-sm">
                {cat.description}
              </p>
            </div>

            {/* View Link */}
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
  );
};

export default TeamCategories;
