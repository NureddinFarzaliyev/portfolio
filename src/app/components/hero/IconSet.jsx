import React from 'react'
import SkillButton from './SkillButton';

function IconSet({iconSet, linkSet}) {

  if(linkSet){
    return (
      <div className='flex gap-3'>
        {Object.entries(linkSet).map(([link, Icon]) => (
          <a key={link} href={link} target="_blank" rel="noopener noreferrer">
            <SkillButton Icon={Icon} />
          </a>
        ))}
      </div>
    );

  }else if(iconSet){
    return (
      <div className='flex gap-3 flex-wrap justify-center px-8 sm:px-16'>
        {iconSet.map((icon,i) => <SkillButton Icon={icon} key={i}/>)}
      </div>
    )
  }

}

export default IconSet
