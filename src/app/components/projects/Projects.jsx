import React from 'react'
import { displayFont } from '@/app/utils/FontProvider'
import ProjectCard from './ProjectCard'
import projectData from './projectData'

function Projects() {
  return (
    <div className='h-dvh flex flex-col items-center'>
        <h1 className={`${displayFont.className} font-semibold text-center text-5xl my-14`}>
            my projects
        </h1>

        <div className="projects-container md:grid grid-cols-2">
            {projectData.map((project, i) => {
                return(
                    <div className='m-5' key={i}>
                        <ProjectCard projectData={project} key={i} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects
