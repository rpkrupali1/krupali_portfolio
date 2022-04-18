import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Project = ({ name, techStack, application, git, image }) => {
  return (
    // <div
    //   className="col-12 m-2 projects-section"
    //   // style={{ backgroundImage: `url(${image})` }}
    // >
    //   <img src={image} alt="project"className="project-image" />
    //   <div className="project-headers text-center" >
    //     <h3>{name}</h3>
    //     <h4>{techStack}</h4>
    //     <a href={git} target="_blank" rel="noreferrer">
    //       <AiFillGithub size={50} />
    //     </a>
    //   </div>
    // </div>
    <div className="main-project mb-4">
      <div
        className="col-12 m-2 projects-section"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project-headers text-center">
        <h3 className="project-title"><a href={image} alt="project_link">{name}</a></h3>
        <h6>{techStack}</h6>
        <a href={git} target="_blank" rel="noreferrer">
          <AiFillGithub size={50} />
        </a>
      </div>
    </div>
  );
};

export default Project;
