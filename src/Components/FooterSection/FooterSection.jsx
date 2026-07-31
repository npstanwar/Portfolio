import React from "react";
import { motion } from "framer-motion";

// SVG Icon Components using currentColor for flexible styling
const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GITHUB",
    href: "https://github.com/npstanwar",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/npstanwar/",
    icon: LinkedinIcon,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const FooterSection = () => {
  return (
    <footer className="relative w-full bg-[#181511] text-[#EFEBE4] border-t-2 border-[#3B3731] px-6 md:px-16 py-16 md:py-24 select-none overflow-hidden min-h-[40vh] flex items-end">
      <motion.div
        className=" max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT COLUMN: ScrollReveal Headline */}
        <div className="lg:col-span-8 space-y-4 overflow-hidden">
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-[#FF4128] tracking-[0.25em] uppercase font-bold"
          >
            STILL CURIOUS?
          </motion.p>

          <div className="overflow-hidden">
            <motion.h4
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
            >
              Let's build something
            </motion.h4>
          </div>
        </div>

        {/* RIGHT COLUMN: Social Pill Buttons & Metadata */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-8">
          {/* Social Links Pill Group */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B3731] bg-[#181511] hover:border-[#FF4128] text-[#EFEBE4] hover:text-[#FF4128] transition-colors duration-200"
                >
                  <IconComponent />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Location & Metadata Block */}
          <motion.div
            variants={itemVariants}
            className="space-y-1 text-left lg:text-right font-mono text-[10px] tracking-widest text-[#EFEBE4]/60 uppercase"
          >
            <p className="font-bold text-[#EFEBE4]">NEW DELHI, INDIA</p>

            <p className="pt-2">
              © 2026 NISHANT PRATAP SINGH. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[#EFEBE4]/40 hover:text-[#FF4128] cursor-pointer transition-colors pt-1">
              TERMS & COPYRIGHT
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
