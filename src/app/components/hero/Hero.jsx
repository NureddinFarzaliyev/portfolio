import React from "react";
import { displayFont } from "@/app/utils/FontProvider";
import { HeroHighlight } from "../ui/hero-highlight";
import Link from "next/link";
import Skills from "@/app/components/ui/Skills";

const skills = [
  "python",
  "linux",
  "docker",
  "bun",
  "html",
  "css",
  "bootstrap",
  "tailwindcss",
  "motion",
  "radixui",
  "figma",
  "git",
  "javascript",
  "typescript",
  "vite",
  "react",
  "redux",
  "nextjs",
  "zustand",
  "vuejs",
  "pinia",
  "astro",
  "nodejs",
  "expressjs",
  "trpc",
  "jwt",
  "mongodb",
  "postgresql",
  "drizzle",
  "supabase",
  "java",
  "spring",
  "websocket",
];

const NavButton = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="z-[9999] text-white bg-[#0F111A] font-mono py-2 px-4 rounded-sm text-xs opacity-80 hover:opacity-100 transition-opacity cursor-pointer font-semibold"
    >
      {children}
    </Link>
  );
};

const navLinks = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  // {
  //     href: "v2",
  //     label: "V2",
  //   },
];

function Hero() {
  return (
    <div
      className={`h-dvh flex flex-col justify-center items-center text-center gap-6`}
    >
      <HeroHighlight />
      {/*<IconSet linkSet={socialLinkSet} />*/}
      <div>
        <h1
          className={`font-bold px-5 py-1 text-4xl sm:text-7xl tracking-tight ${displayFont.className} text-glow`}
        >
          NUREDDIN
          <br />
          FARZALIYEV
        </h1>
        <p className="text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,1)] text-md md:text-xl transition-all cursor-pointer text-hover-glow relative z-40 mt-2 z-0">
          Fullstack Web Developer
        </p>
      </div>
      <div className="opacity-80 px-4" style={{ filter: "grayscale(0.5)" }}>
        <Skills skills={skills} disableHover fullList centerFullList />
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center z-[9999] px-4">
        {navLinks.map((link) => (
          <NavButton key={link.href} href={link.href}>
            {link.label}
          </NavButton>
        ))}
        <Link
          href="https://raw.githubusercontent.com/NureddinFarzaliyev/resume/master/Nureddin_Farzaliyev_CV.pdf"
          className="z-[9999] text-black bg-white/80 font-semibold py-2 px-4 rounded-sm text-xs opacity-80 hover:opacity-100 transition-opacity cursor-pointer "
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Hero;
