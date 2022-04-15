import React from "react";

const skills = [
  {
    name: "Frontend",
    technologies:
      "HTML5, CSS, JQuery, Javascript, Bootstrap, React, Responsive design",
  },
  {
    name: "Backend",
    technologies:
      "NodeJs, C#, Java, API, MySQL, MongoDB, Express, ReactJS, Handlebars, Webpack, TypeScript",
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
  return (
    <div>
      <h1>Resume</h1>
      <div className="container">
        <div>
          <button>Download My Resume</button>
        </div>
        <div>
          <h3>Technical Skills</h3>
          <div className="container">
            {skills.map((skill) => (
              <div className="row">
                <div className="col">{skill.name}</div>
                <div className="col">{skill.technologies}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
