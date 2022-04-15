import React from "react";

const Project = ({ name, techStack, git, image }) => {
  return (
    <div
      className="col"
      style={{ backgroundImage: `url(../../assets/${image})` }}
    >
      <h3>{name}</h3>
      <h4>{techStack}</h4>
      <a href={git}>{git}</a>
    </div>
  );
};

export default Project;
