import React from "react";
import Project from "../Project";
import PhotoPort from "../../assets/PhotoPort.PNG";
import PizzaHunt from "../../assets/PizzaHunt.PNG";
import KitchenAroundYou from "../../assets/KitchenAroundYou.PNG";
import NoteTaker from "../../assets/NoteTaker.PNG";
import News4You from "../../assets/News4You.PNG";
import RunBuddy from "../../assets/RunBuddy.JPG";

const projects = [
  {
    name: "Photo Port",
    techStack: "React",
    git: "https://github.com/rpkrupali1/photo-port",
    application: "http://rpkrupali1.github.io/photo-port",
    image: PhotoPort,
  },
  {
    name: "Pizza Hunt",
    techStack: "NoSQL-MongoDb",
    git: "https://github.com/rpkrupali1/pizza-hunt",
    application: "https://kp-pizza-hunt.herokuapp.com/add-pizza",
    image: PizzaHunt,
  },
  {
    name: "Kitchen Around You",
    techStack: "Mysql2",
    git: "https://github.com/rpkrupali1/kitchen-around-you",
    application: "https://kitchen-around-you.herokuapp.com/",
    image: KitchenAroundYou,
  },
  {
    name: "Note Taker",
    techStack: "ExpressJs",
    git: "https://github.com/rpkrupali1/kp-note-taker",
    application: "https://note-taker-kp-challenge.herokuapp.com/",
    image: NoteTaker,
  },
  {
    name: "News For You",
    techStack: "JS/Server side APIs",
    git: "https://github.com/rpkrupali1/News4U",
    application: "https://rpkrupali1.github.io/News4U/",
    image: News4You,
  },
  {
    name: "RunBuddy",
    techStack: "HTML/CSS",
    git: "https://github.com/rpkrupali1/run-buddy",
    application: "https://rpkrupali1.github.io/run-buddy/",
    image: RunBuddy,
  },
];

const Portfolio = () => {
  return (
    <div className="row text-center">
      <div className="header-image col"></div>
      <div className="col-8">
        <h1 className="fw-bold">Portfolio</h1>
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
      <div className="header-image col"></div>
    </div>
  );
};

export default Portfolio;
