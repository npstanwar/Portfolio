import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedArrow = () => {
  const containerRef = useRef(null);

  // Track the scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = starts when the top of the container hits the bottom of the viewport
    // "end center" = finishes when the bottom of the container hits the middle of the viewport
    offset: ["start end", "end center"],
  });

  // Map the scroll progress directly to pathLength (0 to 1)
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Fade in instantly at the start to prevent a harsh pop-in, then hold opacity at 1
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "50px 0",
      }}
    >
      <motion.svg width="300px" height="266px" viewBox="0 0 224 199">
        <motion.path
          d="M51.7476 14.2142C51.7476 14.2142 90.207 39.5893 104.046 60.7494C115.951 78.9508 113.705 112.443 87.6032 116.836C62.2026 121.111 53.7607 92.1574 61.0677 76.3398C75.3355 45.4609 148.573 61.9033 162.107 113.86C167.749 135.515 167.524 181.698 167.524 181.698"
          fill="transparent"
          stroke="#3B3731"
          strokeWidth="6"
          strokeLinecap="round"
          // Bind the transformed scroll values directly to the style
          style={{ pathLength, opacity }}
        />
        <motion.path
          d="M140.007 158.322L167.524 181.698L194.718 164.466"
          fill="transparent"
          stroke="#3B3731"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedArrow;
