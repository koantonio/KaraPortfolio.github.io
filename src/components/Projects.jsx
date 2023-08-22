import React from 'react'
/* import john from './images/john-doe.png' */
// import { useNavigate } from "react-router-dom";
import './Projects.css';
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import favicon from "../projectImages/favicon.png"
import './Hero';

const Projects = () => {
    // const navigate = useNavigate();
    return (
        <div id="projects" className='projects'>
          <br/><br/><br/><br/>
          <h1>Projects</h1>
          <p>For more info checkout my <a className="github" href="https://github.com/koantonio">GitHub!</a>
            
          </p>
          <div className="projectList">
            {ProjectList.map((project) => {
            return <ProjectItem name={project.name} image={project.image} skills={project.skills} description={project.description} />
            })}
          </div>
        </div>
    );
}

export default Projects;