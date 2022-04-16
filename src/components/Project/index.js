import React from "react";

const Project = ({ name, techStack, git, image }) => {


  return (
    <div
      className="col-4 m-2"
      //style={{ backgroundImage: `url(${require}(../../assets/${image}))` }}
      //style={{ backgroundImage: `url(${require("../../assets/NoteTaker.PNG")})` }}
      //style={{ backgroundImage: `url(${require(imageUrl)})`}}
      //style={{ backgroundImage: "url(../../NoteTaker.PNG)" }}
      // style={{
      //   backgroundImage: `url(${require("../../assets/NoteTaker.PNG")})`,
      // }}
      style={{ backgroundImage: `url(${image})` }}      
    >
      {/* <img src={image} alt='test'/> */}
      <h3>{name}</h3>
      <h4>{techStack}</h4>
      <a href={git} target="_blank" rel="noreferrer">
        {git}
      </a>
    </div>
  );
};

export default Project;
