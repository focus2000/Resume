import React from 'react';
import github from '../assets/icons/github.png'

const ProjectCard = ({project:{name, image, github_url, deployed_url}}) => {
    return (
        <div className ="projectCard col-md-6 col-lg-6  my-2">
        <figure className="projectCard_wrapper">
            <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="projectCard_image"/>
            </a>
            <div className="projectCard_title">
                <a href={github_url} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github link" className="projectCard_icon"/>
                </a>
                {name}
            </div>
        </figure>
        </div>
    )
}

export default ProjectCard