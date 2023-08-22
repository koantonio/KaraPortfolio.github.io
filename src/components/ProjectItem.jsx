import React from "react";
// import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, skills, description, id }) {
  // const navigate = useNavigate();
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 className="projectName"> {name} </h1>
      <p className="projectSkills">{skills}</p>
      <br/>
      <div className="projectDescription">{description}</div>
    </div>
  );
}

export default ProjectItem;