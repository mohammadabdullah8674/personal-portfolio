import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({image, name, id, cover}) {
    const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={()=> navigate("/projects/" + id)}>
        <div style={{background : `url(${cover || image})` }} className="bgImage"></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem