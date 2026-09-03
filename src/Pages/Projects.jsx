import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { projectsData } from '../data'
function Projects() {
  
  return (
    <section id='projects'>
     <h2 >Projects</h2>

    <div id='projectCard'>
     {projectsData.map((project)=>{
      return(
        <ProjectCard key={project.projectId} projectName={project.projectName} projectImage={project.projectImage} projectLink={project.projectLink} projectDescription={project.projectDescription}/>
      )
     })}
    
    </div>

     
    </section>
  )
}

export default Projects
