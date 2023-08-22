import React from "react";

function ProjectItem({ image, name, skills, description, id }) {
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