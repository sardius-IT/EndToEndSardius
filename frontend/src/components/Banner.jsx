import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  // Animation for sliding in and out
  const slideIn = useSpring({
    transform: visible ? 'translateY(0)' : 'translateY(100%)',
    opacity: visible ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const handleAccept = () => {
    setVisible(false);
    // You can store this in localStorage to prevent showing again
    localStorage.setItem('cookieAccepted', 'true');
  };

  return (
    <animated.div
      className="fixed bottom-0 w-full bg-gray-800 text-white px-6 py-4 z-50 shadow-lg"
      style={slideIn}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm md:text-base">
          <p className="mb-1">
            Microsoft Edge is moving towards a new experience that allows users to browse without third-party cookies.
          </p>
          <p className="text-gray-300">
            We use cookies to improve your browsing experience. By continuing, you agree to our cookie policy.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold transition"
        >
          Accept
        </button>
      </div>
    </animated.div>
  );
};    
export default CookieBanner;
