import React from "react";
import { displayFont } from "@/app/utils/FontProvider";
import IconSet from "./IconSet";
import { skillIcons, socialLinkSet } from "@/app/utils/IconProvider";
import { HeroHighlight } from "../ui/hero-highlight";
import Link from "next/link";

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
      <Link
        href="/v2"
        className="z-[9999] text-white bg-[#0F111A] font-mono py-2 px-4 rounded-sm text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
      >
        Check out the Portfolio V2!
      </Link>
    </div>
  );
}

export default Hero;
