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
    <div className="row page-container">
      <div className="header-image col vh-100"></div>
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
            Enterprise Quality Architect at Rocket with 18+ years of experience
            in quality engineering, full-stack development, and team leadership.
            Currently building AI-powered enterprise applications using large
            language models (LLMs) through AWS Bedrock and Agentic AI, with
            tools like GitHub Copilot, Claude Code, and Cline.
          </p>

          <p>
            Built Quality Intelligence (QI) — a platform that provides
            real-time, automated quality scoring across 8,000+ applications.
            Also built an AI-powered API Test Generator, OpenAPI Doc Generator,
            and multiple microservices deployed on Kubernetes.
          </p>

          <p>
            AWS Certified Developer with hands-on experience across NestJS,
            GraphQL, PostgreSQL, Kafka, TypeScript, React, Angular, and
            cloud-native infrastructure (AWS EKS, Terraform, Docker).
          </p>

          <p>
            Experienced people manager — led teams of 30+ across onshore and
            offshore. Delivered demos and training to audiences of up to 400
            engineers. Presented and hosted the Testing Minds Conference.
          </p>

          <p>
            Currently pursuing a Post Graduate Program in AI and Machine
            Learning from Purdue University (in collaboration with IBM) covering
            deep learning, NLP, computer vision, and generative AI.
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
                  Post Graduate Program in AI & Machine Learning{" "}
                </span>
                Purdue University, in collaboration with IBM (In Progress)
              </p>
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
