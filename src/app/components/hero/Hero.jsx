import React from "react";
import { displayFont } from "@/app/utils/FontProvider";
import IconSet from "./IconSet";
import { skillIcons, socialLinkSet } from "@/app/utils/IconProvider";
import { HeroHighlight } from "../ui/hero-highlight";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

function Hero() {
  return (
    <div
      className={`h-dvh flex flex-col justify-center items-center text-center gap-6`}
    >
      <HeroHighlight />
      <IconSet linkSet={socialLinkSet} />
      <h1
        className={`font-bold px-5 py-1 text-4xl sm:text-7xl tracking-tight ${displayFont.className} text-glow`}
      >
        NUREDDIN
        <br />
        FARZALIYEV
      </h1>
      <div>
        <IconSet iconSet={skillIcons} />
        <p className="text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,1)] text-md md:text-xl transition-all cursor-pointer text-hover-glow mt-4 relative z-40">
          Web Developer
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          href="/v2"
          className="z-[9999] text-white bg-[#0F111A] font-mono py-2 px-4 rounded-sm text-xs opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        >
          Check out the Portfolio V2!
        </Link>
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
