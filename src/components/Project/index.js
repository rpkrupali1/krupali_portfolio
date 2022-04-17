import React from "react";
import { AiFillGithub } from "react-icons/ai";


const Project = ({ name, techStack, git, image }) => {
  return (
    <div
      className="col-12 m-2 projects-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="project-headers" >
        <h3>{name}</h3>
        <h4>{techStack}</h4>
        <a href={git} target="_blank" rel="noreferrer">
          <AiFillGithub size={50} />
        </a>
      </div>
    </div>
  );
};

export default Project;
