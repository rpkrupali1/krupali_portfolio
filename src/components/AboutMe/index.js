import React from "react";
import Profile from "../../assets/Profile.JPG";

const AboutMe = () => {
  return (
    <div className="row">
      <div className="header-image col"></div>
      <div className="col-8">
        <div className="text-center my-2">
          <h2 className="fw-bold">About Me</h2>
        </div>
        <div className="text-center my-2">
          <img className="profile-pic pb-2" src={Profile} alt="profile" />
          <h3 className="pb-2 mb-2 punchline mx-2">
            I want to <span className="make-things">make things</span> that{" "}
            <span className="make-difference">make a difference</span>.
          </h3>
        </div>
        <div className="container text-left">
          <p>
            I am mission-driven Software Engineer and Enterprise Quality
            Architect with a passion for learning new things, innovation,
            collaboration and implementation. Recently earned full stack web
            developer with a web development certificate.
          </p>

          <p>
            I've always sought out opprtunities and challenges that are
            meaningful to me. Although my professional path has taken many
            twists and turns - from manual testing to full stack development.
            I've never stopped engaging my passion to help others and solve
            problems.
          </p>

          <p>
            As a web developer and quality architect, I enjoy using my obsessive
            attention to detail, my unequivocal love for making things, and my
            solution-driven work ethic to make a difference.
          </p>
        </div>
        <div className="text-center">
          <h2 className="fw-bold">Certificates</h2>
        </div>
      </div>
      <div className="header-image col"></div>
    </div>
  );
};

export default AboutMe;
