"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  "INITIALIZING_ENVIRONMENT...",
  "LOADING_3D_ASSETS...",
  "STAGING_PROJECT_NODES...",
  "ESTABLISHING_DATA_PIPELINE...",
  "READY",
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // 1. Progress counter interval
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Organic increment feel
        const diff = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  // 2. Update status log text based on current percentage
  useEffect(() => {
    if (progress < 25) setStepIndex(0);
    else if (progress < 50) setStepIndex(1);
    else if (progress < 75) setStepIndex(2);
    else if (progress < 100) setStepIndex(3);
    else setStepIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-[#181511] text-[#EFEBE4] flex flex-col items-center justify-center p-6 select-none font-mono"
    >
      {/* Background Graph Paper Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B3731 1px, transparent 1px),
            linear-gradient(to bottom, #3B3731 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Main Loader Container */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-xl border-2 border-[#3B3731] bg-[#181511] shadow-[8px_8px_0px_0px_#FF4128]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#3B3731] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF4128] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#3B3731] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#3B3731] inline-block" />
          </div>
          <span className="text-[10px] tracking-widest text-[#EFEBE4]/50 uppercase">
            [ SYSTEM_INIT ]
          </span>
        </div>

        {/* Counter Display */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-4xl sm:text-6xl font-black text-[#EFEBE4]">
            {progress}
            <span className="text-[#FF4128] text-2xl">%</span>
          </span>
          <span className="text-xs text-[#FF4128] tracking-widest uppercase font-bold animate-pulse">
            LOADING
          </span>
        </div>

        {/* Progress Bar Frame */}
        <div className="w-full h-4 bg-[#181511] border-2 border-[#3B3731] p-0.5 rounded-sm mb-4">
          <motion.div
            className="h-full bg-[#FF4128] shadow-[0_0_10px_#FF4128]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Dynamic Log Output */}
        <div className="h-6 flex items-center justify-between text-xs text-[#EFEBE4]/70">
          <AnimatePresence mode="wait">
            <motion.span
              key={stepIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="truncate"
            >
              &gt; {loadingSteps[stepIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
