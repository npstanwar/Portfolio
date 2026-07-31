import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="block md:hidden w-full bg-[#181511] border-b border-orange-600/40 text-[#EFEBE4] px-4 py-2.5 z-50 relative"
        >
          <div className="flex items-center justify-between max-w-md mx-auto text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold">💡 Tip:</span>
              <span>Open on large display for better experience</span>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-neutral-400 hover:text-white transition-colors p-1 -mr-1"
              aria-label="Close banner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNotice;
