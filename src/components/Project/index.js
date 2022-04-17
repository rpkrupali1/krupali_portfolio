import React from "react";

const Project = ({ name, techStack, git, image }) => {
  return (
    <div
      className="col-12 col-md-6 m-2 blur"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="projects-section" >
        <h3>{name}</h3>
        <h4>{techStack}</h4>
        <a href={git} target="_blank" rel="noreferrer">
          {git}
        </a>
      </div>
    </div>
  );
};

export default Project;
