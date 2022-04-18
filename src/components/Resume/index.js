import React from "react";
import fileSaver from "file-saver";

const skills = [
  {
    name: "Frontend",
    technologies:
      "HTML5, CSS, JQuery, Javascript, Bootstrap, React, Responsive design",
  },
  {
    name: "Backend",
    technologies:
      "NodeJs, C#, Java, API, Express, ReactJS, Handlebars, Webpack, TypeScript",
  },
  {
    name: "Database",
    technologies: "MySQL, MongoDB, DynamoDb",
  },
  {
    name: "Test Automation Tools",
    technologies:
      "Selenium, Cypress, CodeceptJs, Provar, Copado, Protractor, QTP/UFT, JMeter, K6",
  },
  {
    name: "CRM",
    technologies: "Salesforce",
  },
  {
    name: "CICD",
    technologies:
      "CircleCI, AWS, AzureDevops/ADS/TFS, Jenkins, Github, Bitbucket",
  },
  {
    name: "Deployment",
    technologies: "Heroku, AWS, Github pages",
  },
  {
    name: "Service Virtualization",
    technologies: "Mountebank",
  },
  {
    name: "Code Quality/Security/Coverage",
    technologies: "AppSpider, Snyk, SonarQube, Linting",
  },
  {
    name: "Monitoring / Alerting/ Obeservability",
    technologies: "Dynatrace, AlertSite, Grafana",
  },
  {
    name: "Orchestration",
    technologies: "Docker, Kubernetes, EKS, Terraform, Rancher",
  },
];

const Resume = () => {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/Krupali_Pilgulwar.pdf",
      "MyCV.pdf"
    );
  };

  return (
    <div className="row">
      <div className="header-image col"></div>
      <div className="col-8">
        <div className="text-center my-2">
          <h2 className="fw-bold">Resume</h2>
        </div>
        <div className="container">
          <div className="text-center my-2">
            <button className="button h3 m-4 p-4" onClick={saveFile}>
              Download My Resume
            </button>
          </div>
          <div>
            <h3 className="text-center fw-bold mb-4">Technical Skills</h3>
            <div className="container">
              {skills.map((skill) => (
                <div>
                  <div className="row justify-content-center mb-3 mx-auto">
                    <div className="col-2 col-md-auto fw-bold">
                      {skill.name} :
                    </div>
                    <div className="col">{skill.technologies}</div>
                  </div>
                  <div className="row">
                    <div className="col skills mx-auto mb-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="header-image col"></div>
    </div>
  );
};

export default Resume;
