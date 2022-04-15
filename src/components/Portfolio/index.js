import React from "react";
import Project from "../Project";

const projects = [
  {
    name: "Photo Port",
    techStack: "React",
    git: "https://github.com/rpkrupali1/photo-port",
    image: "PhotoPort.PNG",
  },
  {
    name: "Pizza Hunt",
    techStack: "NoSQL-MongoDb",
    git: "https://github.com/rpkrupali1/pizza-hunt",
    image: "PizzaHunt.PNG",
  },
  {
    name: "Kitchen Around You",
    techStack: "Mysql2",
    git: "https://github.com/rpkrupali1/kitchen-around-you",
    image: "KitchenAroundYou.PNG",
  },
  {
    name: "Note Taker",
    techStack: "ExpressJs",
    git: "https://github.com/rpkrupali1/kp-note-taker",
    image: "NoteTaker.PNG",
  },
  {
    name: "News For You",
    techStack: "JS/Server side APIs",
    git: "https://rpkrupali1.github.io/News4U/",
    image: "",
  },
  {
    name: "RunBuddy",
    techStack: "HTML/CSS",
    git: "https://rpkrupali1.github.io/run-buddy/",
    image: "RunBuddy.JPG",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <Project
              name={project.name}
              techStack={project.techStack}
              git={project.git}
              image={project.image}
            />
          ))}
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
