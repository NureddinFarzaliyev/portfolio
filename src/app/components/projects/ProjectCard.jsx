import React from 'react'
import Link from 'next/link'

function ProjectCard({projectData}) {
  return (
    <div className='xl:w-[30vw] bg-[#020914] p-4 rounded-md flex flex-col gap-3 justify-around'>
        <img src={projectData.image} alt={projectData.title} className='rounded-md aspect-video' />
        <h1 className='text-2xl font-semibold'>
            {projectData.title}
            <span className='opacity-50 text-lg ml-2'> {projectData.date}</span>
        </h1>
        <p className='text-sm opacity-80 md:h-32'>
            {projectData.description}
        </p>

        <div className='mt-5 flex flex-col 2xl:flex-row items-center 2xl:items-start gap-2 2xl:gap-0 justify-between'>
            <div className='flex gap-[2px]'>
                {projectData.skills.map((skillName, i) => (
                    <img src={`/icons/${skillName}.png`} key={i} height={32} width={32} />
                ))}
            </div>
            <div className='flex gap-2'>
                {projectData.youtube && (
                    <Link href={projectData.youtube} target='_blank'> 
                        <div className='flex items-center bg-white rounded-md text-black px-1 pl-2 text-xs gap-1 hover:scale-110 transition-transform'>
                            <span>Video</span>
                            <img src="/icons/youtube.png" alt="yt" />
                        </div>
                    </Link>
                )}
                {projectData.github && (
                    <Link href={projectData.github} target='_blank'> 
                        <div className='flex items-center bg-[#242938] rounded-md text-white px-1 pl-2 text-xs gap-1 hover:scale-110 transition-transform'>
                            <span>Source</span>
                            <img src="/icons/github.png" alt="yt" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
