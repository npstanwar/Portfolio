import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.1,
  baseRotation = 5,
  blurStrength = 4,
  enableBlur = true,
  initialColor = "#ffffff", // ⚪️ START COLOR (White)
  finalColor = "#ff4136", // 🔴 END COLOR (Red)
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) =>
      /^\s+$/.test(word) ? (
        word
      ) : (
        <span className="word" key={i}>
          {word}
        </span>
      ),
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const words = el.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top 80%",
        end: "center center",
        scrub: true,
      },
    });

    // 1. ROTATE
    tl.fromTo(el, { rotate: baseRotation }, { rotate: 0, ease: "none" }, 0);

    // 2. PHASE 1: REVEAL (Blur -> Clear, White -> White)
    // We enforce 'initialColor' (White) here so it doesn't default to Black
    tl.fromTo(
      words,
      {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
        color: initialColor,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        color: initialColor, // STAYS WHITE while blurring out
        stagger: 0.1,
        ease: "none",
      },
      0,
    );

    // 3. PHASE 2: COLOR CHANGE (White -> Red)
    // "-=20%" creates a subtle overlap. The red starts fading in JUST before
    // the blur completely finishes, making it feel less robotic.
    tl.to(
      words,
      {
        color: finalColor,
        stagger: 0.1,
        ease: "none",
      },
      "-=20%",
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [
    scrollContainerRef,
    baseOpacity,
    baseRotation,
    blurStrength,
    enableBlur,
    initialColor,
    finalColor,
  ]);

  return (
    <h2 ref={containerRef} className="scroll-reveal">
      <span className="scroll-reveal-text">{splitText}</span>
    </h2>
  );
};

export default ScrollReveal;
