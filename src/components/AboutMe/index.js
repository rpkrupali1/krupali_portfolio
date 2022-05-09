import React from "react";
import Profile from "../../assets/Profile.JPG";
import awsBadge from "../../assets/aws-certified-developer-associate.png";
import fileSaver from "file-saver";

const AboutMe = () => {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL +
        "/AWSCertifiedDeveloper-AssociateCertificate.pdf",
      "KrupaliPilgulwar-Cert-AWS.pdf"
    );
  };

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
            I've always sought out opportunities and challenges that are
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
          <h2 className="text-center fw-bold">Certificates</h2>
          <div className="row p-2 px-4 ">
            <div className="col-12 col-sm-5 container cert-container">
              <p className="fw-bold">AWS Certified Developer – Associate</p>
              <img src={awsBadge} alt="awsBadge" />{" "}
              <button className="button m-4 p-2" onClick={saveFile}>
                Download My Certificate
              </button>
            </div>
            <div className="col-12 col-sm-5 container cert-container">
              <p>
                <span className="fw-bold">
                  Full Stack Web Developer Boot Camp Certificate{" "}
                </span>
                From Michigan State University
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-image col vh-100"></div>
    </div>
  );
};

export default AboutMe;
