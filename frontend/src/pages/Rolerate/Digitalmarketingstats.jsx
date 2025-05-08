import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DigitalMarketingStats = () => {
  const stats = [
    { label: "89%", end: 89, isDollar: false },
    { label: "61%", end: 61, isDollar: false },
    { label: "4x", end: null, isDollar: false },
    { label: "$400B+", end: 400, isDollar: true },
  ];

  const descriptions = [
    "of marketers say digital strategies improved brand awareness significantly",
    "of businesses increased their ROI through targeted online campaigns",
    "higher customer engagement rate with personalized digital marketing",
    "global spending expected on digital marketing by the end of this year",
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      if (stat.end !== null) {
        return setInterval(() => {
          setCounts((prev) => {
            const updated = [...prev];
            if (updated[idx] < stat.end) {
              updated[idx] += stat.isDollar ? 1 : 1;
            } else {
              updated[idx] = stat.end;
            }
            return updated;
          });
        }, 30);
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => interval && clearInterval(interval));
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Digital Marketing Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index}>
              {/* Animated Purple Line */}
              <motion.div
                className="h-1 bg-purple-500 mb-6"
                initial={{ width: 0 }}
                animate={{ width: "48px" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              <h3 className="text-4xl font-extrabold mb-4">
                {stat.end !== null ? (
                  <>
                    {stat.isDollar ? "$" : ""}
                    {counts[index].toFixed(stat.isDollar ? 0 : 0)}
                    {stat.isDollar ? "B+" : "%"}
                  </>
                ) : (
                  stat.label
                )}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {descriptions[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingStats;
