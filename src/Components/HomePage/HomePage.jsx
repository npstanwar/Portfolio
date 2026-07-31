import React from "react";
import HeroSection from "../NameComponent/NameComponent";
import StatsSection from "../StatsSection/StatsSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import AnimatedArrow from "../animatedArrow/AnimatedArrow";
import DotField from "../DottedBg/DottedBg";
import HangingProjects from "../HangingProjects/HangingProjects";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import About from "../AboutSection/AboutSection";

function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <div className="pt-12 md:pt-30">
        <HeroSection />
      </div>

      {/*Stats Section*/}
      <StatsSection />

      {/*Skills Section*/}
      <SkillsSection />

      <AnimatedArrow />

      {/*Project Section*/}
      <section
        className="relative z-10 w-full bg-[#D9C1A0] overflow-hidden py-16"
        id="projects"
      >
        {/* BACKGROUND CANVAS LAYER */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto z-0">
          <DotField
            dotRadius={3}
            dotSpacing={14}
            bulgeStrength={30}
            glowRadius={10}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#D9C1A0"
            gradientTo="#0000"
            glowColor="#D9C1A0"
          />
        </div>

        {/* FOREGROUND CONTENT LAYER */}
        <div className="relative z-10 w-full px-6">
          {/* Flex container holding the title and right-aligned badge */}
          <div className="px-10 mb-12 flex items-center justify-between gap-6">
            <h2 className="font-display text-[#1C1917] font-black text-6xl md:text-8xl tracking-tighter leading-[0.9]">
              PROJECT GALLERY
            </h2>

            {/* Hidden on small screens, visible as a pill badge on medium (md) screens and above */}
            <span className="hidden md:inline-block border border-[#1C1917]/20 px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider text-gray-600 whitespace-nowrap">
              Scroll on projects to see more
            </span>
          </div>

          <HangingProjects />
        </div>
      </section>

      {/*Experience Section */}
      <ExperienceSection />

      {/*About Section*/}
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default HomePage;
