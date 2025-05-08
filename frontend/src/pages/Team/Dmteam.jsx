import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../../assets/business.avif";
import image2 from "../../assets/abstract.avif";
import TrustedBrands from "../../pages/Trustedbrands";
import Job from "../../pages/Contact";
import Img1 from "../../assets/resource.avif";



export default function DigitalMarketingTeam() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideIn = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  
  const hoverEffect = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const steps = [
    {
      number: "1",
      title: "Connect with a Marketing Advisor",
      description:
        "A Sardius marketing advisor will work with you to understand your brand goals, audience, and campaign needs.",
    },
    {
      number: "2",
      title: "Get Matched with Top Talent",
      description:
        "We'll introduce you to top-tier digital marketers in less than 24 hours. Each expert is hand-vetted to ensure alignment with your goals.",
    },
    {
      number: "3",
      title: "Start with Confidence",
      description:
        "Engage your marketer on a trial basis and only continue if satisfied. We guarantee the right fit for your marketing needs.",
    },
  ];

  const categories = [
    {
      title: "Performance Marketing",
      skills: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Conversion Rate Optimization (CRO)",
        "Funnel Strategy",
        "A/B Testing",
      ],
    },
    {
      title: "SEO & Content",
      skills: [
        "Technical SEO",
        "Content Strategy",
        "Copywriting",
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
      ],
    },
    {
      title: "Social Media & Branding",
      skills: [
        "Instagram Growth",
        "YouTube Marketing",
        "Influencer Outreach",
        "Brand Strategy",
        "Reputation Management",
        "Community Engagement",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Side */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-white leading-tight"
            >
              Hire the <span className="text-cyan-400">Top 5%</span> of <br />{" "}
              Digital Marketers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mt-6 text-lg"
            >
              Sardius IT Technologies connects businesses with world-class
              digital marketers. From performance advertising to content
              strategy, we help you grow faster and smarter.
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
                Hire a Marketer
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={images[currentImage]}
              alt="Digital Marketing"
              className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-xl transition-all duration-700 ease-in-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TrustedBrands />
      </motion.section>

      {/* Steps Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-100 dark:text-white">
          How to Hire Marketers Through Sardius
        </h1>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-24 md:gap-48 w-full max-w-7xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="flex flex-col items-center text-center relative"
            >
              {index !== 0 && (
                <div className="absolute left-[-180px] top-10 transform -translate-y-1/2 h-px bg-blue-500 w-40 hidden md:block">
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
              <h3 className="mt-8 font-bold text-white dark:text-white">
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
            Hiring for a Specific Skill?
          </h1>
          <p className="text-lg text-white">
            The Sardius network connects you with top digital marketers across
            every key channel, platform, and strategy.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {categories.map((category, idx) => (
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

      {/* Final Call to Action */}
      <section className="py-5">
        <div className="max-w-4xl mx-auto text-center bg-blue-50 rounded-2xl p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Need a specialized marketing strategy?
          </h2>
          <p className="text-gray-800 text-sm mb-8">
            Whether you're looking to scale paid ads or dominate organic search,
            Sardius can match you with elite marketers for every niche.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
      <motion.section
        className="mb-16 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-4xl font-semibold text-gray-100 mb-6">
        Meet Sardius  Digital Marketers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Mani ",
              role: "Digital Marketing Executive",
              quote: " Paid Ads (Google Ads, Meta Ads)",
              image: image2,
            },
            {
              name: "Vivek ",
              role: "Digital Marketing Executive",
              quote: "SEO – Search Engine Optimization",
              image:image1,
            },
            {
              name: "Charan",
              role: "Digital Marketing Executive",
              quote: "Social Media Marketing",
              image: Img1,
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
