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
            I am a mission-driven Full stack web developer leveraging a
            background in Enterprise Quality Architect with a passion for
            learning new things, innovation, collaboration, and implementation.
            Recently earned a certificate in full stack development from MSU
            University with newly developed skills in JavaScript, CSS, React.js
            MERN and responsive web design.
          </p>

          <p>
            AWS Developer Associate Certified and over 14+ years of diversified
            experience in analysis, design, development, and management of
            manual/automated tests. Expertise in improving quality across
            organizations by collaborating with delivery teams and implementing
            overall quality standards, best practices, and continuous
            improvement by designing and implementing automation frameworks from
            scratch and helping organizations for cost savings.
          </p>

          <p>
            Excellent client-facing communication skills and has led and managed
            teams of 25-30 resources.
          </p>

          <p>
            I have always sought out opportunities and challenges that are
            meaningful to me. Although my professional path has taken many
            twists and turns - from manual testing to full stack development. I
            have never stopped engaging in my passion to help others and solve
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
