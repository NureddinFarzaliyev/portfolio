"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const baseUrl = "https://skills-icons.vercel.app/api/icons?i=";

const Skills = ({ skills, disableHover, fullList }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  const [isHovered, setIsHovered] = useState(false);

  const maxVisibleIcons = 4;
  const visibleIconsCount = Math.min(skills.length, maxVisibleIcons);
  const visibleIcons = skills.slice(0, visibleIconsCount);
  const remainingIconCount = skills.length - visibleIcons.length;
  const remainingIcons = skills.slice(visibleIconsCount);

  const iconSize = 32;

  if (skills.length <= maxVisibleIcons || fullList) {
    return (
      <div className={`flex gap-1 flex-wrap`}>
        {skills.map((skill) => (
          <div
            className="group relative shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0"
            key={skill}
          >
            <Image
              src={`${baseUrl}${skill}`}
              alt={skill}
              width={iconSize}
              height={iconSize}
            />
            <Tooltip skill={skill} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`h-8`}>
      <div
        className="flex gap-1 relative cursor-pointer flex-wrap"
        onMouseEnter={() => {
          if (!disableHover) {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visibleIcons.map((skill, idx) => (
          <motion.div
            key={skill}
            className={`group relative shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0`}
            animate={{ x: isHovered ? 0 : idx * -10 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={`${baseUrl}${skill}`}
              alt={skill}
              width={iconSize}
              height={iconSize}
            />
            <Tooltip skill={skill} />
          </motion.div>
        ))}
        {remainingIcons.map((skill, idx) => (
          <motion.div
            key={skill}
            className="group relative shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0"
            initial={{ x: (idx + visibleIconsCount) * -10, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : (idx + visibleIconsCount) * -10,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={`${baseUrl}${skill}`}
              alt={skill}
              width={iconSize}
              height={iconSize}
            />
            <Tooltip skill={skill} />
          </motion.div>
        ))}
        <motion.div
          className={`w-8 h-8 rounded-full bg-[#1F1F23] text-[#E4E4E7] border border-[#2E2E33] font-bold flex items-center justify-center text-sm shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 absolute pointer-events-none`}
          style={{ left: (visibleIconsCount + 1) * 20 }}
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          +{remainingIconCount}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

const Tooltip = ({ skill }) => (
  <span
    role="tooltip"
    className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#0a0a0a] px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 border border-white/10 shadow-[rgba(0,0,0,0.35)_0px_0px_5px] shadow-black/50"
  >
    {skill}
  </span>
);
