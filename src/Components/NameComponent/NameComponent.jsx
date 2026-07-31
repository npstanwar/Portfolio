import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import CustomText from "./CustomText";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const subText = "I help businesses understand it.".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 50, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: prefersReducedMotion
        ? { duration: 0.3 }
        : { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });
  const [isHoveringRedA, setIsHoveringRedA] = useState(false);

  const handleMagneticMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(relX * 0.5);
    mouseY.set(relY * 0.5);
  };

  const handleMagneticLeave = () => {
    setIsHoveringRedA(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-full text-black flex flex-col justify-between items-center p-8 font-sans relative overflow-hidden select-none">
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl w-full my-auto relative z-10">
        {/* FIX: Changed <motion.p> to <motion.div> to allow block children in CustomText */}
        <motion.div
          className="text-md font-semibold text-gray-900 leading-tight"
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, rotateX: -60, y: 50, z: -100 }
          }
          animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 80,
            delay: prefersReducedMotion ? 0 : 1.2,
          }}
        >
          <CustomText />
        </motion.div>

        <div className="relative inline-block mb-8">
          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter flex items-center justify-center leading-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="relative inline-flex items-center justify-center mr-2 w-[1.2em] h-[1.2em]"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            >
              <motion.svg
                className="absolute inset-0 w-full h-full text-blue-500 overflow-visible"
                viewBox="0 0 100 100"
              >
                <motion.rect
                  x="2"
                  y="2"
                  width="96"
                  height="96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 1.5,
                    ease: "easeInOut",
                    delay: prefersReducedMotion ? 0 : 0.5,
                  }}
                />
                {[
                  { x: 2, y: 2 },
                  { x: 98, y: 2 },
                  { x: 2, y: 98 },
                  { x: 98, y: 98 },
                ].map((point, index) => (
                  <motion.g
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 1.8 + index * 0.1,
                      type: "spring",
                    }}
                  >
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </motion.g>
                ))}
              </motion.svg>
              <motion.span variants={letterVariants}>N</motion.span>
            </motion.span>

            <div className="flex">
              {"ish".split("").map((char, index) => (
                <motion.span
                  key={`ish-${index}`}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -8,
                          color: "#3B82F6",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }
                  }
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.span
              className="relative inline-flex items-center justify-center mx-1 w-14 h-14 sm:w-16 sm:h-16"
              onMouseEnter={() => setIsHoveringRedA(true)}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              style={{ x: springX, y: springY }}
            >
              <motion.svg
                viewBox="0 0 100 80"
                className="absolute inset-0 w-full h-full text-[#FF3B30] drop-shadow-xl"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  rotate:
                    isHoveringRedA && !prefersReducedMotion ? [0, -6, 6, 0] : 0,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    delay: prefersReducedMotion ? 0 : 1,
                    stiffness: 150,
                  },
                  rotate: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <path
                  d="M75.1,62.3C70,72.4,59.3,79.1,47,79.1c-17.7,0-32-14.3-32-32s14.3-32,32-32c12.3,0,23,6.7,28.1,16.8l0.4-12.3h15.4v62.4H75.1V62.3z M63.8,47.1c0-9.3-7.5-16.8-16.8-16.8s-16.8,7.5-16.8,16.8c0,9.3,7.5,16.8,16.8,16.8S63.8,56.3,63.8,47.1z"
                  fill="currentColor"
                />
              </motion.svg>
            </motion.span>

            <div className="flex">
              {"nt".split("").map((char, index) => (
                <motion.span
                  key={`nt-${index}`}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -8,
                          color: "#3B82F6",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }
                  }
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        <div style={{ perspective: "1200px" }}>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight mb-8"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, rotateX: -60, y: 50, z: -100 }
            }
            animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 80,
              delay: prefersReducedMotion ? 0 : 1.2,
            }}
          >
            Data tells a story.
          </motion.p>
        </div>

        <div className="text-lg sm:text-xl text-gray-500 font-medium h-8 flex items-center justify-center font-mono">
          <motion.p
            variants={{
              visible: {
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.03,
                  delayChildren: prefersReducedMotion ? 0 : 1.8,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {subText.map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          {!prefersReducedMotion && (
            <motion.span
              className="inline-block w-2.5 h-5 bg-gray-500 ml-1.5"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "steps(2)" }}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
