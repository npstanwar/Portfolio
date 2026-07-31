import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto z-500">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-neutral-800 bg-[#F3EFE2] p-5 sm:p-6 md:p-8 text-white shadow-2xl my-auto max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-[#F3EFE2] p-1.5 sm:p-2 text-neutral-600 border border-neutral-800 hover:text-black transition-colors z-20"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Project Header */}
            <span className="text-[10px] sm:text-xs font-mono text-black tracking-widest uppercase mb-1 sm:mb-2 block font-mono pr-8">
              Data Project Detail
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase mb-3 sm:mb-4 text-[#181511] pr-6">
              {project.title}
            </h2>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-900 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-neutral-300 border border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Core Layout */}
            <div className="space-y-4 sm:space-y-6 text-neutral-300">
              <div>
                <h4 className="text-xs sm:text-sm font-mono text-black mb-1.5 sm:mb-2 uppercase tracking-wide">
                  💡 Project Overview
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#181511]">
                  {project.extendedDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono text-black mb-1.5 sm:mb-2 uppercase tracking-wide">
                  🛠️ Tech Stack & Architecture
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#181511]">
                  {project.techDetails ||
                    "Built using optimized queries and structured data transformations."}
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono text-orange-600 mb-1.5 sm:mb-2 uppercase tracking-wide">
                  🏆 Key Metrics & Achievements
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#181511]">
                  {project.achievements?.map((achieve, index) => (
                    <li key={index}>{achieve}</li>
                  )) || (
                    <li>
                      Successfully designed and implemented pipeline execution
                      paths.
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            {project.github && project.github !== "#" && (
              <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-900/10 flex justify-end gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-black hover:bg-orange-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  GitHub Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
