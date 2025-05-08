import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../../assets/modern.avif";
import image2 from "../../assets/resource.avif";
import image3 from "../../assets/resource.avif";
import image4 from "../../assets/mulitile AI.webp";
import TrustedBrands from "../../pages/Trustedbrands";
import Job from "../../pages/Contact";

export default function Itteam() {
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
      title: "Talk to One of Our Client Advisors",
      description:
        "A Toptal client advisor will work with you to understand your goals, technical needs, and team dynamics.",
    },
    {
      number: "2",
      title: "Work With Hand-Selected Talent",
      description:
        "Within days, we'll introduce you to the right developer for your project. Average time to match is under 24 hours.",
    },
    {
      number: "3",
      title: "The Right Fit, Guaranteed",
      description:
        "Work with your new IT developer for a trial period (pay only if satisfied), ensuring they're the right fit before starting the engagement.",
    },
  ];

  const categories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Angular",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "React Native",
        "Flutter",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Django",
        "Flask",
        "Ruby on Rails",
        "Spring Boot",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Oracle Database",
      ],
    },
    {
      title: "Cloud and DevOps",
      skills: [
        "AWS (Amazon Web Services)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitLab CI/CD",
        "Ansible",
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
              Hire the <span className="text-cyan-400">Top 5%</span> of <br /> Developers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mt-6 text-lg"
            >
              Sardius IT Technologies connects companies with top developers,
              engineers, and consultants. We provide expert talent for mission-critical projects across industries.
              Startups and enterprises trust us for reliable freelance solutions. Build and scale faster with Sardius IT Technologies.
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
                Hire Top Developer
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
              alt="Developer"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          How to Hire Developers Through Sardius
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
              {/* Line with arrow */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l6 8-6 8" />
                    </svg>
                  </div>
                </div>
              )}
              {/* Step Number */}
              <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center text-2xl text-blue-600 font-bold">
                {step.number}
              </div>
              {/* Step Text */}
              <h3 className="mt-8 font-bold">{step.title}</h3>
              <p className="mt-6 text-sm max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen py-12 px-6 bg-gray-950">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Hiring for a Specific Skill?</h1>
          <p className="text-lg text-white">
            The Sardius network connects you with top experts across a wide range of software development languages and technologies.
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
                  <li key={i} className="hover:text-indigo-400 transition-colors">{skill}</li>
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
            Looking for something more specific?
          </h2>
          <p className="text-gray-800 text-sm mb-8">
            Sometimes you need a developer with a more specific mix of skills to fit your project needs. Let's see if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Schedule a Call
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
