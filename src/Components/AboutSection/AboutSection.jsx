import React from "react";
import { motion } from "framer-motion";

const PushPin = () => (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
    <div className="w-5 h-5 bg-red-600 rounded-full shadow-lg border border-red-400 relative">
      <div className="absolute inset-1 bg-red-400 rounded-full opacity-60"></div>
    </div>
    <div className="w-1 h-3 bg-neutral-400 -mt-1 shadow-md"></div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased stagger timing for clear visual separation
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80, // Increased vertical offset from 30px to 80px
    scale: 0.9, // Pops up from 90% size to 100%
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90, // Lower stiffness creates a heavier, noticeable pop
      damping: 14, // Damping creates a subtle, satisfying overshoot bounce
      mass: 0.8,
    },
  },
};

const polaroidVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotate: -12, // Starts heavily tilted left
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 4, // Lands on its resting tilt of 4 degrees
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: 0.25,
    },
  },
};
const About = () => {
  const stats = [
    { label: "EXPERIENCE", value: "6M+" },
    { label: "PROJECTS", value: "10+" },
  ];

  const focusAreas = ["Python", "Power BI", "SQL", "Interactive Dashboards"];

  return (
    <section className="min-h-screen text-white px-6 py-20 relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="font-mono text-sm text-[#181511] tracking-widest uppercase">
            [ ABOUT ME ]
          </p>

          <h1 className="text-5xl text-[#181511] md:text-7xl font-black tracking-tight uppercase">
            Nishant Pratap<span className="text-neutral-500"> Singh</span>
          </h1>

          <p className="font-mono text-xs text-orange-600 tracking-[0.3em] uppercase pt-1">
            ANALYTICS & INSIGHTS
          </p>
        </motion.div>

        {/* Content Grid with Emergence Staggering */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Main Narrative Card */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-[#181511] border border-neutral-800 rounded-2xl p-8 space-y-6 shadow-2xl relative"
          >
            <p className="text-[#F3EFE2] font-normal leading-relaxed text-sm">
              I enjoy working with data and turning it into insights that help
              solve real-world problems. Over time, I've built projects using
              <span className="text-orange-600 font-semibold">
                {" "}
                Python, SQL, Excel, Power BI, and Streamlit
              </span>
              , gaining experience in data cleaning, analysis, visualization,
              and dashboard development.
            </p>

            <p className="text-[#F3EFE2] font-normal leading-relaxed text-sm">
              What I like most about working with data is the process of finding
              patterns, answering questions, and presenting information in a way
              that's simple and meaningful. I enjoy learning new technologies,
              experimenting with different approaches, and continuously
              improving my skills by building practical projects.
            </p>

            {/* Focus Areas Badges */}

            <div className="pt-4 border-t border-neutral-900">
              <p className="font-mono text-xs text-orange-600 mb-3 tracking-wider font-semibold">
                PRIMARY FOCUS
              </p>

              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-700 text-[#F3EFE2]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Block */}

            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-mono text-[10px] text-neutral-400 tracking-wider">
                    {stat.label}
                  </p>

                  <p className="text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Stacked & Overlapping Polaroids Container */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end pt-6 lg:pt-0 relative"
          >
            {/* FIRST PHOTO */}
            <motion.div
              initial={{ rotate: 4 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#EFEBE4] p-3 pb-4 rounded-sm border-2 border-[#3B3731] w-full max-w-[240px] z-10 -mt-10"
            >
              <PushPin />
              <div className="w-full h-[220px] bg-[#181511] overflow-hidden relative border border-[#3B3731]">
                <img
                  src="../Portrait1.png"
                  alt="Portrait 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#181511] font-bold">
                  PORTRAIT 01
                </span>
                <span className="font-mono text-[10px] text-[#FF4128] font-semibold tracking-wider">
                  01/02/2000
                </span>
              </div>
            </motion.div>

            {/* SECOND PHOTO (Overlaps First Photo using -mt-16) */}
            <motion.div
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#EFEBE4] p-3 pb-4 rounded-sm border-2 border-[#3B3731] w-full max-w-[240px] -mt-30 mr-40 z-20"
            >
              <PushPin />
              <div className="w-full h-[250px] bg-[#181511] overflow-hidden relative border border-[#3B3731]">
                <img
                  src="../Portrait2.jpeg"
                  alt="Portrait 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#181511] font-bold">
                  PORTRAIT 02
                </span>
                <span className="font-mono text-[10px] text-[#FF4128] font-semibold tracking-wider">
                  01/02/2000
                </span>
              </div>
            </motion.div>

            {/* THIRD PHOTO (Overlaps Second Photo using -mt-16) */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
