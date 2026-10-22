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
            className="shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0"
            key={skill}
          >
            <Image
              src={`${baseUrl}${skill}`}
              alt={skill}
              width={iconSize}
              height={iconSize}
            />
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
            className={`shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0`}
            animate={{ x: isHovered ? 0 : idx * -10 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={`${baseUrl}${skill}`}
              alt={skill}
              width={iconSize}
              height={iconSize}
            />
          </motion.div>
        ))}
        {remainingIcons.map((skill, idx) => (
          <motion.div
            key={skill}
            className="shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 rounded-md shrink-0"
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
          </motion.div>
        ))}
        <motion.div
          className={`w-8 h-8 rounded-full bg-[#1F1F23] text-[#E4E4E7] border border-[#2E2E33] font-bold flex items-center justify-center text-sm shadow-[rgba(0,0,0,0.35)_-5px_0px_5px] shadow-black/50 absolute`}
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
