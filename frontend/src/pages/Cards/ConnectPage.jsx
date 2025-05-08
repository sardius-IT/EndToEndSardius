import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCompass, faGlobe, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // 👈 animation library

const ConnectPage = () => {
  const [activeBox, setActiveBox] = useState(null);

  const boxes = [
    { 
      icon: faAt, 
      text: 'Connect with us', 
      link: "/contact", 
    },
    { 
      icon: faCompass, 
      text: 'Expert Guidance', 
      link: "/careers", 
    },
    { 
      icon: faGlobe, 
      text: 'Visit our business platforms', 
      content: (
        <div className="flex flex-col items-start w-full">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 space-x-2 w-full">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-xl" />
            <span>LinkedIn</span>
          </a>
          <hr className="border-gray-300 w-full" />
          <a href="https://www.naukri.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 space-x-2 w-full">
            <FontAwesomeIcon icon={faGlobe} className="text-green-500 text-xl" />
            <span>Naukri</span>
          </a>
        </div>
      )
    },
    { 
      icon: faComments, 
      text: 'Visit our Social Media Platforms', 
      content: (
        <div className="flex flex-col items-start w-full">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 space-x-2 w-full">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl" />
            <span>Instagram</span>
          </a>
          <hr className="border-gray-300 w-full" />
          <a href="mailto:example@email.com" className="flex items-center py-2 space-x-2 w-full">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-xl" />
            <span>Email</span>
          </a>
        </div>
      )
    },
  ];

  const handleClick = (idx) => {
    setActiveBox(prev => prev === idx ? null : idx);
  };

  return (
    <div className="min-h-screen font-sans bg-white relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className="bg-white text-gray-950 shadow-2xl hover:shadow-gray-400 flex flex-col items-center justify-center p-10 border border-gray-200 cursor-pointer w-full transition"
            onClick={() => box.content ? handleClick(idx) : null}
          >
            <FontAwesomeIcon icon={box.icon} className="text-4xl mb-4" />

            <div className="text-center text-lg font-medium w-full">
              {/* Animate content */}
              {activeBox === idx && box.content ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {box.content}
                  </motion.div>
                </AnimatePresence>
              ) : (
                // If it's just a link, make it clickable
                box.link ? (
                  <Link to={box.link} className="">
                    {box.text}
                  </Link>
                ) : (
                  box.text
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectPage;
