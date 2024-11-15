import React from 'react'

function SkillButton({Icon}) {
  return (
    <div className='text-4xl opacity-90 text-zinc-800 hover:text-white cursor-pointer box-hover-glow'>
        <Icon />
    </div>
  )
}

export default SkillButton
