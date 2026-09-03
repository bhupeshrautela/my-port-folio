import React from 'react'

function ProjectCard({projectLink,projectImage,projectName,projectDescription}) {
  return (
    <div className='projectBox'>
<a href={projectLink} className='projectLink'>

  <div className='projectImgCard'>
    <img src={projectImage} alt="" />
  </div>
  <p>{projectName}</p>
  <p>{projectDescription}</p>
</a>
</div>
  )
}

export default ProjectCard
