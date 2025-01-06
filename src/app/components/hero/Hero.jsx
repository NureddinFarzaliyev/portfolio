import React from 'react'
import { displayFont } from '@/app/utils/FontProvider'
import IconSet from './IconSet'
import { skillIcons, socialLinkSet } from '@/app/utils/IconProvider'
import { HeroHighlight } from '../ui/hero-highlight'

function Hero() {
  return (
    <div className={`h-dvh flex flex-col justify-center items-center text-center gap-6`}>
      <HeroHighlight/>
      <IconSet linkSet={socialLinkSet} />
      <h1 className={`font-bold px-5 py-1 text-5xl sm:text-7xl tracking-tight ${displayFont.className} text-glow`}>NUREDDIN<br/>FARZALIYEV</h1>
      <div>
        <IconSet iconSet={skillIcons} />
        <p className='text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,1)] transition-all cursor-pointer text-hover-glow mt-4 relative z-40'>Frontend / MERN-Stack Developer</p>
      </div>


    </div>
  )
}

export default Hero