import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "10+", label: "PROJECTS", color: "text-[#FF4128]" },
  { value: "4M+", label: "ROWS ANALYZED", color: "text-[#3B82F6]" },
  { value: "10+", label: "Dashboards", color: "text-[#10B981]" },
  { value: "3+", label: "ML Models", color: "text-[#181511]" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const StatsSection = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-4 flex justify-center items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-2xl border border-gray-400 overflow-hidden hover:shadow-[0px_8px_0px_0px_#FF4128] transition-all duration-300 ease-out"
      >
        {STATS.map((stat, index) => {
          // Explicit border logic per breakpoint to prevent overrides
          const isLast = index === STATS.length - 1;
          const isEven = index % 2 === 0;
          const isThirdOrFourth = index >= 2;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col justify-between p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6 border-gray-400
                ${index !== 0 ? "border-t sm:border-t-0" : ""} 
                ${isThirdOrFourth ? "sm:border-t md:border-t-0" : ""} 
                ${isEven ? "sm:border-r" : "sm:border-r-0"} 
                ${!isLast ? "md:border-r" : "md:border-r-0"}
              `}
            >
              {/* Value Header */}
              <span
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${stat.color}`}
              >
                {stat.value}
              </span>

              {/* Sub-label */}
              <span className="font-mono text-xs text-[#181511]/80 tracking-wider uppercase font-medium">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default StatsSection;
