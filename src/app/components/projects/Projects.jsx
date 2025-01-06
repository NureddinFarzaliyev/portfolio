"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projectData from './projectData'
import Link from 'next/link'
import SectionHeader from '../ui/SectionHeader'

function Projects() {
    
    const [activeProject, setActiveProject] = useState(null)
 
  return (
    <div className='flex flex-col items-center'>

        <SectionHeader text={"my projects"} />

        <div className="projects-container md:grid grid-cols-2 px-10 lg:px-20 2xl:px-0">
            {projectData.map((project, i) => {
                return(
                    <div className='m-5' key={i}>
                        <ProjectCard projectData={project} key={i} projectId={i} activeProject={activeProject} setActiveProject={setActiveProject} />
                    </div>
                )
            })}
        </div>

        <Link href={'https://github.com/NureddinFarzaliyev'} target='_blank' className='w-[90vw] md:w-[50vw] mt-4 font-bold flex items-center justify-center py-3 bg-[#020914] hover:scale-105 transition-all rounded-md active:scale-95'>
            See All My Projects
        </Link>
    </div>
  )
}

export default Projects
