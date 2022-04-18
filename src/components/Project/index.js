import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Project = ({ name, techStack, application, git, image }) => {
  return (
    <div className="main-project mb-4">
      <div
        className="col-12 m-2 projects-section"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project-headers text-center">
        <h3>
          <a href={image} alt="project_link" className="project-title">
            {name}
          </a>
        </h3>
        <h6>{techStack}</h6>
        <a href={git} target="_blank" rel="noreferrer">
          <AiFillGithub size={50} />
        </a>
      </div>
    </div>
  );
};

export default Project;
