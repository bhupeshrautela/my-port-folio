import React from 'react'

function ProjectCard({ProjectDescription,ProjectImage}) {
  return (
    <div className='projectContainer'>
        <p>{ProjectDescription}</p>
      <div><img src={ProjectImage} alt="project image" /></div>
    </div>
  )
}

export default ProjectCard
