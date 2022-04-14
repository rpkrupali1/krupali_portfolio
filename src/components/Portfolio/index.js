import React from "react";

const projects = [
  {
    name: "Photo Port",
    techStack: "React",
    git: "https://github.com/rpkrupali1/photo-port",
  },
  {
    name: "Pizza Hunt",
    techStack: "NoSQL-MongoDb",
    git: "https://github.com/rpkrupali1/pizza-hunt",
  },
  {
    name: "Kitchen Around You",
    techStack: "Mysql2",
    git: "https://github.com/rpkrupali1/kitchen-around-you",
  },
  {
    name: "Note Taker",
    techStack: "ExpressJs",
    git: "https://github.com/rpkrupali1/kp-note-taker",
  },
  {
    name: "News For You",
    techStack: "JS/Server side APIs",
    git: "https://rpkrupali1.github.io/News4U/",
  },
  {
    name: "RunBuddy",
    techStack: "HTML/CSS",
    git: "https://rpkrupali1.github.io/run-buddy/",
  },
];

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>{projects[0].name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
