import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import "../Styles/projects.css"
import { projectList } from '../helpers/projectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {
        projectList.map((project,index)=> {
          return <ProjectItem key={index} id={index} name={project.name} image={project.image} cover={project?.cover} />
        })
      }
      </div>
    </div>
  )
}

export default Projects