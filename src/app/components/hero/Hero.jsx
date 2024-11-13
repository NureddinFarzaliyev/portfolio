import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import { displayFont, textFont } from '@/app/utils/FontProvider'


function Hero() {
  return (
    <div className={`h-dvh flex flex-col justify-center items-center text-center gap-3`}>
        {/* <div> */}
            <h1 className={`font-bold text-6xl ${displayFont.className}`}>Nureddin Farzaliyev</h1>
            <p className='text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,1)] transition-colors cursor-pointer'>Frontend / MERN-Stack Developer</p>
            <div>
                skills
            </div>
        {/* </div> */}
        <BackgroundBeams className="pointer-events-none"/>
    </div>
  )
}

export default Hero