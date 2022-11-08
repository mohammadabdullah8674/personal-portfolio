import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/projectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id]
    return (
        <div className='project'>
            <div className='project-content'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills :</b>
                {project.skills}
            </p>
            <a href={project.githubLink} target="_blank"><GitHubIcon /></a>

            </div>
        </div>
    )
}

export default ProjectDisplay