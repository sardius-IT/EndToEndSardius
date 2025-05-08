import React from "react";
import { motion } from "framer-motion";
import PortfolioVideo from "../assets/programming.mp4";
import TrustedBrands from "../pages/Trustedbrands";
import TeamCategories from "./Team/Teamcategories";
import { Link } from "react-router-dom";
import Demand from "./Team/Demand";
import Whychoosetoptal from "../pages/Team/Whychoosetoptal"
import Clientsatisfaction from"../pages/Team/Clientsatisfaction"
export default function Portfolio() {
  const steps = [
    {
      number: "1",
      title: "Talk to One of Our Industry Experts",
      description:
        "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
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
        "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={PortfolioVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Animated Static Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-start justify-center h-full px-8"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hire the <span className="text-blue-400">Top 3%</span> of <br /> Employees Talent<sup>®</sup>
            </h1>
            <p className="text-white mt-6 text-lg">
              Software developers, designers, marketing <br /> experts,
              management consultants, product managers, <br /> and project managers in the world.
            </p>
            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/HireOptions"
              className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md transition"
            >
            Recruit Top IT Talent
            </Link>
          </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trusted Brands Section with animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TrustedBrands />
      </motion.section>

     

      {/* Team Categories Cards with animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <TeamCategories />
      </motion.section>
         {/* Team Categories Cards with animation */}
         <motion.section
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="py-12"
       >
         <Demand/> 
       </motion.section>
           {/* Steps Section */}
             <section className="min-h-screen flex flex-col items-center justify-center p-6">
               <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
               Hiring Made Easy
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
                {/* Team Categories Cards with animation */}
      <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12"
    >
     <Whychoosetoptal/>
    </motion.section>
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="py-12"
  >
   <Clientsatisfaction/>
  </motion.section>
    </>
  );
}

