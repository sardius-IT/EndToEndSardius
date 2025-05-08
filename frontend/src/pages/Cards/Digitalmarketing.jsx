import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import marketingImage from "../../assets/business.avif";
import socialMediaImage from "../../assets/friends.webp";
import seoImage from "../../assets/mulitile AI.webp";
import DigitalMarketingStats from "../../pages/Rolerate/Digitalmarketingstats";
import ScrollToTopButton from "../../pages/Toparrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactUsButton from "../../pages/Contactusbutton";

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

function DigitalMarketing() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "SEO Specialist",
      description:
        "SEO specialists improve website visibility on search engines, driving organic traffic through keyword strategies and technical optimization.",
      image: seoImage,
      cards: [
        {
          title: "On-page SEO",
          description: [
            "Optimize titles, meta descriptions, and content",
            "Focus on keyword research",
            "Improve internal linking structure",
          ],
        },
        {
          title: "Technical SEO",
          description: [
            "Enhance website speed",
            "Fix crawl errors",
            "Ensure mobile-friendliness",
          ],
        },
        {
          title: "Link Building",
          description: [
            "Create valuable backlinks",
            "Develop partnerships",
            "Increase domain authority",
          ],
        },
      ],
    },
    {
      title: "Social Media Manager",
      description:
        "Social media managers create and manage brand presence on platforms like Instagram, LinkedIn, and Twitter to boost engagement.",
      image: socialMediaImage,
      cards: [
        {
          title: "Content Strategy",
          description: [
            "Plan engaging posts and campaigns",
            "Use hashtags effectively",
            "Create interactive stories and reels",
          ],
        },
        {
          title: "Community Management",
          description: [
            "Respond to comments and messages",
            "Grow loyal brand advocates",
            "Handle crisis communication",
          ],
        },
        {
          title: "Analytics & Insights",
          description: [
            "Track engagement metrics",
            "Analyze audience demographics",
            "Adjust strategies based on data",
          ],
        },
      ],
    },
    {
      title: "PPC Specialist",
      description:
        "PPC (Pay-Per-Click) specialists create paid campaigns on Google, Facebook, and LinkedIn to generate leads and maximize ROI.",
      image: marketingImage,
      cards: [
        {
          title: "Google Ads",
          description: [
            "Set up search and display campaigns",
            "Optimize ad copies and keywords",
            "Maximize quality score",
          ],
        },
        {
          title: "Facebook Ads",
          description: [
            "Target custom and lookalike audiences",
            "Create retargeting campaigns",
            "Optimize ad spend",
          ],
        },
        {
          title: "Landing Page Optimization",
          description: [
            "Design high-converting pages",
            "Test A/B variations",
            "Improve user experience (UX)",
          ],
        },
      ],
    },
    {
      title: "Content Marketer",
      description:
        "Content marketers focus on creating blogs, ebooks, videos, and infographics that attract and nurture prospects through the buyer’s journey.",
      image: marketingImage,
      cards: [
        {
          title: "Blog Writing",
          description: [
            "Create valuable, SEO-optimized content",
            "Use storytelling techniques",
            "Focus on user intent",
          ],
        },
        {
          title: "Video Marketing",
          description: [
            "Produce engaging video content",
            "Use YouTube and TikTok strategically",
            "Boost brand storytelling",
          ],
        },
        {
          title: "Email Marketing",
          description: [
            "Nurture leads with drip campaigns",
            "Personalize emails based on user behavior",
            "Measure open rates and click-throughs",
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
              src={marketingImage}
              alt="Marketing Illustration"
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
              Explore Digital Marketing Roles
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Digital marketing offers diverse career paths that combine
              creativity, analytics, and technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cloud Section */}
      <section className="p-3">
        <DigitalMarketingStats />
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

export default DigitalMarketing;
