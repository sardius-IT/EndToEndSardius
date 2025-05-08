import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/abstract.avif";
import image2 from "../assets/business.avif";
import image3 from "../assets/business.avif";
import image4 from "../assets/friends.webp";

const teamData = [
  {
    name: "Ketevan Gabelia",
    title: "Analyst",
    company: "European Bank for Reconstruction and Development (EBRD)",
    image: image1,
  },
  {
    name: "Tsotne Kutalia",
    title: "Senior Developer",
    company: "aMind Solutions",
    image: image2,
  },
  {
    name: "Nino Devdariani",
    title: "Senior Specialist",
    company: "National Bank of Georgia",
    image: image3,
  },
  {
    name: "Ana Devidze",
    title: "Specialist of supervision department",
    company: "National Bank of Georgia",
    image: image4,
  },
  {
    name: "Ketevan Gabelia",
    title: "Analyst",
    company: "European Bank for Reconstruction and Development (EBRD)",
    image: image1,
  },
  {
    name: "Tsotne Kutalia",
    title: "Senior Developer",
    company: "aMind Solutions",
    image: image2,
  },
  {
    name: "Nino Devdariani",
    title: "Senior Specialist",
    company: "National Bank of Georgia",
    image: image3,
  },
  {
    name: "Ana Devidze",
    title: "Specialist of supervision department",
    company: "National Bank of Georgia",
    image: image4,
  },
  {
    name: "Ketevan Gabelia",
    title: "Analyst",
    company: "European Bank for Reconstruction and Development (EBRD)",
    image: image1,
  },
  {
    name: "Tsotne Kutalia",
    title: "Senior Developer",
    company: "aMind Solutions",
    image: image2,
  },
  {
    name: "Nino Devdariani",
    title: "Senior Specialist",
    company: "National Bank of Georgia",
    image: image3,
  },
  {
    name: "Ana Devidze",
    title: "Specialist of supervision department",
    company: "National Bank of Georgia",
    image: image4,
  },
  {
    name: "Ketevan Gabelia",
    title: "Analyst",
    company: "European Bank for Reconstruction and Development (EBRD)",
    image: image1,
  },
  {
    name: "Tsotne Kutalia",
    title: "Senior Developer",
    company: "aMind Solutions",
    image: image2,
  },
  {
    name: "Nino Devdariani",
    title: "Senior Specialist",
    company: "National Bank of Georgia",
    image: image3,
  },
  {
    name: "Ana Devidze",
    title: "Specialist of supervision department",
    company: "National Bank of Georgia",
    image: image4,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const TeamMembers = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={cardVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-red-700 mt-4">{member.name}</h3>
            <hr className="w-2/3 mx-auto my-2 border-gray-300" />
            <p className="text-sm text-gray-700 font-medium">{member.title}</p>
            <p className="text-sm text-gray-600 mt-1">{member.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
