"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    date: "July 2019 – July 2024",
    title: "Bachelor of Science (B.Sc.G)",
    company: "Indira Gandhi National Open University (IGNOU)",
    description:
      "Built a strong academic foundation while discovering an interest in data analytics and problem solving.",
  },
  {
    id: 2,
    date: "Dec 2024 – Jun 2025",
    title: "Data Analytics Training",
    company: "Geekster",
    description:
      "Completed an intensive data analytics program covering Python, SQL, Excel, Power BI, statistics, exploratory data analysis, and real-world business case studies.",
  },
  {
    id: 3,
    date: "July 2025 - Dec 2025",
    title: "Personal Analytics Projects",
    company: "Pixel Perfect Agency",
    description:
      "Built multiple end-to-end analytics projects using Python, SQL and Power BI and business analysis skills.",
  },
  {
    id: 4,
    date: "Dec 2025 – Jun 2026",
    title: "Internship",
    company: "Labmentix Pvt. Ltd.",
    description:
      "Built end-to-end BI dashboards, automated ETL workflows, performed exploratory data analysis, and contributed to analytics platforms across healthcare, sports, retail, and fitness domains.",
  },
];

const ANIMATION_DURATION = 3;

const HorizontalTimeline = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.1 }}
      className="relative py-12 md:py-20 text-[#EFEBE4] w-full overflow-hidden select-none"
    >
      {/* GRAPH PAPER GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B3731 1px, transparent 1px),
            linear-gradient(to bottom, #3B3731 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center mb-10 md:mb-20 space-y-2 px-4">
        <p className="font-mono text-xs text-[#FF4128] tracking-[0.3em] uppercase"></p>
        <motion.h2
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1C1917] text-center"
        >
          Carrer History
        </motion.h2>
      </div>

      {/* MOBILE LAYOUT (< md): Vertical Stacked Timeline */}
      <div className="relative z-10 md:hidden px-4 max-w-lg mx-auto">
        {/* Vertical Left Line */}
        <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-[#3B3731]" />

        {/* Animated Vertical Line Overlay */}
        <motion.div
          variants={{
            initial: { height: "0%" },
            animate: { height: "100%" },
          }}
          transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
          className="absolute left-6 top-2 w-[2px] bg-[#FF4128] shadow-[0_0_12px_#FF4128] origin-top"
        />

        <div className="space-y-8 pl-12">
          {experiences.map((exp, index) => {
            const triggerDelay =
              (index / (experiences.length - 1)) * (ANIMATION_DURATION * 0.85);

            return (
              <div key={exp.id} className="relative">
                {/* Glowing Mobile Dot */}
                <motion.div
                  variants={{
                    initial: {
                      backgroundColor: "#181511",
                      borderColor: "#3B3731",
                      scale: 1,
                    },
                    animate: {
                      backgroundColor: "#FF4128",
                      borderColor: "#FF4128",
                      boxShadow: "0 0 15px rgba(255, 65, 40, 0.8)",
                      scale: 1.25,
                    },
                  }}
                  transition={{ duration: 0.3, delay: triggerDelay }}
                  className="absolute -left-[31px] top-4 w-4 h-4 rounded-full border-2 z-20"
                />

                {/* Mobile Card */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, delay: triggerDelay + 0.1 }}
                  className="p-5 rounded-xl border-2 border-[#3B3731] bg-[#181511] shadow-[0px_6px_0px_0px_#3B3731]"
                >
                  <span className="font-mono text-xs font-bold text-[#FF4128] tracking-widest uppercase block mb-1">
                    {exp.date}
                  </span>
                  <h3 className="text-base font-black text-[#EFEBE4] leading-tight mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="font-mono text-xs text-[#EFEBE4]/60 mb-2 uppercase tracking-wider">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-[#EFEBE4]/80 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP LAYOUT (>= md): Horizontal Scrollable Canvas */}
      <div className="hidden md:block relative z-10 w-full overflow-x-auto overflow-y-hidden px-20 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative h-[600px] flex flex-nowrap gap-24 min-w-max pr-40 items-stretch">
          {/* Base Horizontal Line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-[#3B3731] z-0" />

          {/* Glowing Progress Line */}
          <motion.div
            variants={{
              initial: { width: "0%" },
              animate: { width: "100%" },
            }}
            transition={{
              duration: ANIMATION_DURATION,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#FF4128] shadow-[0_0_12px_#FF4128] z-10 origin-left"
          />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              data={exp}
              index={index}
              totalItems={experiences.length}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const TimelineItem = ({ data, index, totalItems }) => {
  const isUp = index % 2 !== 0;
  const triggerDelay = (index / (totalItems - 1)) * (ANIMATION_DURATION * 0.85);

  return (
    <div className="relative w-[320px] lg:w-[350px] flex-shrink-0 h-full">
      {/* Animated Glowing Dot */}
      <motion.div
        variants={{
          initial: {
            backgroundColor: "#181511",
            borderColor: "#3B3731",
            scale: 1,
          },
          animate: {
            backgroundColor: "#FF4128",
            borderColor: "#FF4128",
            boxShadow: "0 0 15px rgba(255, 65, 40, 0.8)",
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.3,
          delay: triggerDelay,
          ease: "easeOut",
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-[16px] h-[16px] rounded-full border-2 z-20"
      />

      {/* Vertical Stem Connector */}
      <div
        className={`absolute left-[31px] w-[2px] bg-[#3B3731] h-16 z-0 ${
          isUp ? "bottom-1/2" : "top-1/2"
        }`}
      />

      {/* Neo-Brutalist Experience Card */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: isUp ? 40 : -40, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{
          duration: 0.4,
          delay: triggerDelay + 0.1,
          ease: "easeOut",
        }}
        style={{
          ...(isUp
            ? { bottom: "calc(50% + 64px)" }
            : { top: "calc(50% + 64px)" }),
        }}
        className="absolute left-0 w-full"
      >
        <div className="relative p-6 rounded-xl border-2 border-[#3B3731] bg-[#181511] hover:border-[#FF4128] transition-all duration-300 shadow-[0px_6px_0px_0px_#3B3731] hover:shadow-[0px_6px_0px_0px_#FF4128]">
          <div
            className={`absolute left-[26px] w-3 h-3 bg-[#181511] rotate-45 ${
              isUp
                ? "-bottom-[7px] border-b-2 border-r-2 border-[#3B3731]"
                : "-top-[7px] border-l-2 border-t-2 border-[#3B3731]"
            }`}
          />

          <span className="font-mono text-xs font-bold text-[#FF4128] tracking-widest uppercase block mb-2">
            {data.date}
          </span>
          <h3 className="text-lg md:text-xl font-black text-[#EFEBE4] leading-tight mb-1">
            {data.title}
          </h3>
          <h4 className="font-mono text-xs text-[#EFEBE4]/60 mb-3 uppercase tracking-wider">
            {data.company}
          </h4>
          <p className="text-xs md:text-sm text-[#EFEBE4]/80 leading-relaxed">
            {data.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HorizontalTimeline;
