import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StaffingStats = () => {
  const stats = [
    { label: "95%", end: 95, isDollar: false },
    { label: "70%", end: 70, isDollar: false },
    { label: "3x", end: null, isDollar: false },
    { label: "$50M+", end: 50, isDollar: true },
  ];

  const descriptions = [
    "of companies reported faster hiring processes with staffing services",
    "of businesses see improved project delivery times through augmented teams",
    "faster time-to-productivity with skilled staffing compared to internal hiring",
    "total value of staffing solutions handled annually for global clients",
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      if (stat.end !== null) {
        return setInterval(() => {
          setCounts((prev) => {
            const updated = [...prev];
            if (updated[idx] < stat.end) {
              updated[idx] += stat.isDollar ? 0.1 : 1;
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Staffing Solutions Impact</h2>

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
                    {counts[index].toFixed(stat.isDollar ? 1 : 0)}
                    {stat.isDollar ? "M+" : "%"}
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

export default StaffingStats;
