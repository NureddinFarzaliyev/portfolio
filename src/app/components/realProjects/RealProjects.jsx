"use client";
import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../projects/ProjectCard";
import realProjectData from "./realProjectData";

function RealProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="flex flex-col items-center mt-32">
      <SectionHeader text={"real projects"} />
      <div className="projects-container md:grid grid-cols-2 px-3 lg:px-20 2xl:px-0">
        {realProjectData.map((project, i) => {
          return (
            <div className="m-5" key={i}>
              <ProjectCard
                projectData={project}
                key={i}
                projectId={i}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />
            </div>
          );
        })}
        <div
          className={`projectCard xl:w-[30vw] bg-[#020914] p-4 m-5 rounded-md flex flex-col items-center justify-center gap-3 card-glow`}
        >
          <span className="opacity-60 text-xl">Total</span>
          <span className="text-7xl font-bold">10+</span>
          <span className="opacity-60 text-xl">Real Projects</span>
        </div>
      </div>
    </div>
  );
}

export default RealProjects;
