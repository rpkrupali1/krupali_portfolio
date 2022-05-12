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
    name: "Shop Shine",
    techStack: "Full stack",
    git: "https://github.com/rpkrupali1/shop-shine",
    application: "https://serene-sea-72116.herokuapp.com/",
    image: PhotoPort,
  },
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
    <div className="row">
      <div className="header-image col"></div>
      <div className="col-8">
        <div className="text-center my-2">
          <h2 className="fw-bold">Portfolio</h2>
        </div>
        <div className="container">
          <p text-left>
            Please find below projects with different technologies that I have
            completed. Please click on git link to get detail information and
            click on project link to see deployed project.
          </p>
          <div className="row">
            {projects.map((project) => (
              <Project
                name={project.name}
                techStack={project.techStack}
                application={project.application}
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
