import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardsPage from "../pages/Cards/Cards";
import TeamCategories from "../pages/Team/Teamcategories";
import Splitbanner from "../pages/About/Splitbanner";
import video1 from "../assets/programming.mp4";
import video2 from "../assets/Sardius IT.mp4";
import { Link } from "react-router-dom";
import StatsSection from "../pages/About/StatsSection";
import image2 from "../assets/employee.avif";
// Slide data with different videos
const slides = [
  {
    title: "Innovate, Elevate",
    subtitle: "We Build. We Market.",
    video: video1,
  },
  {
    title: "Accelerate with Sardius IT",
    subtitle: "We Grow Your Business",
    video: video2,
  },
  {
    title: "Future-Ready Solutions",
    subtitle: "Empowering Digital Excellence",
    video: video1,
  },
];

// Animation for each letter
const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const animateText = (text) => (
    <motion.div
      className="flex justify-center flex-wrap"
      initial="initial"
      animate="animate"
    >
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          variants={letterVariants}
          transition={{ delay: idx * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
  const cards = [
    {
      text: "We drive reinvention with innovation and human ingenuity.",
      content:
        "We are celebrating Accenture being one of Fortune’s World’s Most Admired Companies, TIME’s World’s Best Companies and Kantar BrandZ’s Most Valuable Global Brands; and our Chair and CEO Julie Sweet being named one of the TIME100 World’s Most Influential People.",
       
      bgColor: "bg-red-700",
      pattern: "bg-[url('/patterns/red.svg')]",
       link:"/careers"
    },
    {
      text: " We service our clients, customers and employees with excellence.",
      content: "We are recognized as one of the best-managed companies by the Wall Street Journal, for the eight year in a row.",
      bgColor: "bg-blue-700",
      pattern: "bg-[url('/patterns/blue.svg')]",
       link:"/careers"
    },
    {
      text: "We embed inclusion, diversity and sustainability into everything we do.",
      content:
        "We are celebrating Accenture being one of Fortune’s World’s Most Admired Companies, TIME’s World’s Best Companies and Kantar BrandZ’s Most Valuable Global Brands; and our Chair and CEO Julie Sweet being named one of the TIME100 World’s Most Influential People.",
      bgColor: "bg-purple-800",
      pattern: "bg-[url('/patterns/purple.svg')]",
      link:"/careers"
    },
  ];
 
const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stages = [
  { year: 'Year 1', role: 'Trainee Developer', desc: 'Hands-on training and mentorship.' },
  { year: 'Year 2', role: 'Junior Developer', desc: 'Handling live projects and building confidence.' },
  { year: 'Year 3+', role: 'Team Lead / Specialist', desc: 'Leading projects and mentoring freshers.' },
];
  


  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          key={slides[index].video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={slides[index].video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Animated Content */}
        <div className="relative z-20 flex flex-col items-start justify-center text-center h-full px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-200 mb-4">
            {animateText(slides[index].title)}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {animateText(slides[index].subtitle)}
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <Splitbanner />
      </motion.section>

      <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12"
    >
    <StatsSection />

    </motion.section>

      

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 "
      >
        <TeamCategories />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12"
      >
      <h2
      className="  px-4  text-6xl  font-bold flex items-center justify-center "
    >
    <span className="text-7xl bg-gradient-to-r from-blue-400 via-pink-400 to- bg-clip-text text-transparent px-5">
    Our
  </span>  
  <span className="text-7xl bg-gradient-to-r from-blue-400 via-pink-400 to-gray-800 bg-clip-text text-transparent ">
  services
</span>
    </h2>
        <CardsPage />
      </motion.section>
      <h2
      className="  px-4 text-5xl font-bold flex items-start "
    >
    We’re recognized for the value we create together
    </h2>
    <section className="bg-black py-16 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative group ${card.bgColor} ${card.pattern} bg-cover bg-center text-white h-72 rounded-md shadow-lg overflow-hidden flex items-center justify-center`}
        >
          {/* Text layer - shown initially */}
          <h2
            className="absolute text-center px-6 text-xl font-serif transition-all duration-500 ease-in-out
            opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90"
          >
            {card.text}
          </h2>
  
          {/* Content layer - shown on hover */}
          <div className="absolute flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ease-in-out
          opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100">
            <p className="text-sm font-serif mb-4">{card.content}</p>
            <Link
            to={card.link}
            className="inline-flex items-center  text-white font-semibold px-3 py-2 relative group"
          >
            Learn more
            <svg
              className="ml-2 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
            <span
              className="absolute bottom-0 left-0 h-[1px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </Link>
          
          
          </div>
        </div>
      ))}
    </div>
  </section>
  {/* Career Growth Timeline Section */}
  <h2 className="text-4xl font-semibold text-gray-100 mb-6 px-5">Career Growth at Sardius</h2>
  <motion.section className="mb-20 relative" initial="hidden" animate="visible">

  <motion.div
    className="absolute left-6 top-0 w-1 bg-blue-500 rounded"
    initial={{ height: 0 }}
    animate={{ height: '100%' }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
  />
  <div className="ml-10 space-y-10 relative">
    {stages.map((stage, i) => (
      <motion.div key={i} variants={itemVariant} className="flex items-start space-x-4">
        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center z-10">
          {i + 1}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400">{stage.year}: {stage.role}</h3>
          <p className="text-gray-300 mt-1">{stage.desc}</p>
          
        </div>
        
      </motion.div>
      
    ))}
    
  </div>
 
</motion.section>
    </>
  );
};

export default Home;
