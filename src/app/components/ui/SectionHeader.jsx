import React from 'react'
import { displayFont } from '@/app/utils/FontProvider'

function SectionHeader({text}) {
  return (
    <h1 className={`${displayFont.className} font-semibold text-center text-4xl md:text-5xl my-14 text-glow`}>
        {text}
    </h1>
  )
}

export default SectionHeader
