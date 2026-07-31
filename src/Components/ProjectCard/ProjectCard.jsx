import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ProjectCard = ({ title, description, tags = [], image, onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative block h-[420px] sm:h-[450px] w-full max-w-[350px] rounded-xl bg-[#F3EFE2] transition-all duration-300 hover:shadow-[0px_8px_0px_0px_#FF4128] cursor-pointer mx-auto"
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="absolute inset-2 sm:inset-4 grid grid-rows-[1fr_auto] gap-3 sm:gap-4 rounded-xl bg-[#F3EFE2] p-4 sm:p-6 shadow-xl [transform:none] md:[transform:translateZ(75px)]"
      >
        {/* IMAGE CONTAINER */}
        <div className="relative h-full w-full overflow-hidden rounded-lg min-h-[160px] sm:min-h-[180px]">
          <img
            src={image || "/api/placeholder/400/300"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* TEXT DETAILS */}
        <div className="flex flex-col justify-end">
          <h3 className="text-xl sm:text-2xl font-bold text-[#181511] uppercase tracking-wider mb-1.5 sm:mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#181511]/90 line-clamp-2 mb-3 sm:mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-800 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-neutral-300 border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
