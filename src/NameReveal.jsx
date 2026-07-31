import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./NameReveal.css";

export default function NameReveal({ name = "Nishant", tagline = "" }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const underlineRef = useRef(null);
  const taglineRef = useRef(null);
  const glowRef = useRef(null);

  lettersRef.current = [];

  const addLetterRef = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    const letters = lettersRef.current;
    const ctx = gsap.context(() => {
      // Starting state: oversized, blurred, faded, slightly rotated in 3D
      gsap.set(letters, {
        opacity: 0,
        scale: 6,
        yPercent: 20,
        rotationX: 60,
        filter: "blur(18px)",
        transformOrigin: "50% 100%",
      });
      gsap.set(underlineRef.current, { scaleX: 0 });
      gsap.set(taglineRef.current, { opacity: 0, letterSpacing: "0.2em", y: 10 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(glowRef.current, { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }, 0)
        .to(
          letters,
          {
            opacity: 1,
            scale: 1,
            yPercent: 0,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.07,
          },
          0.1
        )
        .to(
          underlineRef.current,
          { scaleX: 1, duration: 0.7, ease: "power3.inOut" },
          "-=0.35"
        )
        .to(
          taglineRef.current,
          { opacity: 1, letterSpacing: "0.4em", y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.4"
        )
        // subtle, restrained ambient breathing once everything has settled
        .to(
          glowRef.current,
          {
            opacity: 0.6,
            scale: 1.08,
            duration: 2.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [name]);

  return (
    <div className="reveal-stage" ref={containerRef}>
      <div className="reveal-glow" ref={glowRef} />

      <div className="reveal-name" aria-label={name}>
        {name.split("").map((char, i) => (
          <span className="letter" key={`${char}-${i}`} ref={addLetterRef}>
            {char}
          </span>
        ))}
      </div>

      <div className="reveal-underline" ref={underlineRef} />

      {tagline && (
        <div className="reveal-tagline" ref={taglineRef}>
          {tagline}
        </div>
      )}
    </div>
  );
}
