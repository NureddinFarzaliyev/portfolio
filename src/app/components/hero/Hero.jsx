import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import { displayFont} from '@/app/utils/FontProvider'

import { FaReact, FaNodeJs, FaBootstrap, FaPython} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";


function Hero() {
  return (
    <div className={`h-dvh flex flex-col justify-center items-center text-center gap-3`}>
        {/* <div> */}
            <h1 className={`font-bold px-5 text-5xl sm:text-7xl tracking-tight ${displayFont.className} text-glow`}>Nureddin Farzaliyev</h1>
            <p className='text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,1)] transition-colors cursor-pointer'>Frontend / MERN-Stack Developer</p>
            <div>
                <FaPython />
            </div>
        {/* </div> */}
        <BackgroundBeams className="pointer-events-none"/>
    </div>
  )
}

export default Hero