import React from "react";
import { motion } from "framer-motion";
import "./Font.css";

// Percentage-based coordinates for desktop (vw/vh relative) to keep design intact across all monitors
const SKILLS = [
  { name: "Python", x: "-8vw", y: "-28vh", rotate: -6 },
  { name: "Power BI", x: "20vw", y: "-24vh", rotate: 5 },
  { name: "SQL", x: "-28vw", y: "-20vh", rotate: -8 },
  { name: "Streamlit", x: "-34vw", y: "-5vh", rotate: 6 },
  { name: "PostgreSQL", x: "32vw", y: "-4vh", rotate: -4 },
  { name: "Data Cleaning", x: "-32vw", y: "16vh", rotate: 4 },
  { name: "Feature Engineering", x: "30vw", y: "18vh", rotate: -7 },
  { name: "Machine Learning", x: "-15vw", y: "26vh", rotate: -5 },
  { name: "ETL Pipelines", x: "16vw", y: "24vh", rotate: 8 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const mobileItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const SkillsSection = () => {
  return (
    <section className="relative flex min-h-[600px] md:min-h-[750px] w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:py-0 text-[#1C1917]">
      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Emoji Placeholder */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-4xl sm:text-5xl select-none"
        >
          <img
            src="../Avatar.png"
            alt="Avatar"
            className="w-full h-80 object-cover "
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-impact text-3xl sm:text-5xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4"
        >
          WHAT I BRING TO THE TABLE
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-medium text-[#1C1917]/80 max-w-lg md:max-w-none"
        >
          Collecting skills like Pokémon cards so your project doesn't need{" "}
          <span className="text-[#FF4128] font-bold underline decoration-2 underline-offset-4 whitespace-nowrap">
            five different people
          </span>
        </motion.p>
      </div>

      {/* Desktop Layout: Floating Absolute Skill Pills */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0,
              rotate: 0,
            }}
            whileInView={{
              x: skill.x,
              y: skill.y,
              scale: 1,
              opacity: 1,
              rotate: skill.rotate,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 12,
              delay: index * 0.04,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              borderColor: "#FF4128",
              color: "#FF4128",
              boxShadow: "0px 6px 0px 0px #FF4128",
            }}
            className="pointer-events-auto absolute cursor-pointer rounded-full bg-[#181511] border-2 border-[#3B3731] px-5 py-2 text-base font-bold text-[#EFEBE4] transition-colors duration-200"
          >
            {skill.name}
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout: Responsive Pill Cloud below Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex md:hidden flex-wrap justify-center gap-2.5 mt-8 z-20 max-w-md px-2"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={mobileItemVariants}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: `${skill.rotate}deg` }}
            className="rounded-full bg-[#181511] border-2 border-[#3B3731] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#EFEBE4]"
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
