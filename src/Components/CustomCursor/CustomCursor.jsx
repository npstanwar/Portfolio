"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  const MAX_POINTS = 20;
  const STROKE_WIDTH = 3;
  const STROKE_COLOR = "#FF4128";

  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);

    pointsRef.current.push({
      x: clientX,
      y: clientY,
      timestamp: performance.now(),
    });

    if (pointsRef.current.length > MAX_POINTS) {
      pointsRef.current.shift();
    }
  };

  const manageMouseOver = (e) => {
    const isInteractive = Boolean(
      e.target.closest(
        "a, button, input, textarea, [role='button'], [data-cursor='pointer']",
      ),
    );
    setIsHovering(isInteractive);
  };

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const now = performance.now();
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.timestamp < 150,
      );
      const points = pointsRef.current;

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        const lastPoint = points[points.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);

        ctx.strokeStyle = STROKE_COLOR;
        ctx.lineWidth = STROKE_WIDTH;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Pointer & Visibility Listeners
  useEffect(() => {
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setIsVisible(true);

    const handleMouseLeave = () => {
      setIsVisible(false);
      pointsRef.current = [];
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={isVisible ? "block" : "hidden"}>
      {/* Canvas Trail */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9997]"
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF4128] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouse.x,
          y: mouse.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#FF4128] rounded-full pointer-events-none z-[9998]"
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          opacity: isHovering ? 0.9 : 0.6,
          backgroundColor: isHovering
            ? "rgba(255, 65, 40, 0.15)"
            : "transparent",
          borderColor: isHovering ? "transparent" : "#FF4128",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </div>
  );
};

export default CustomCursor;
