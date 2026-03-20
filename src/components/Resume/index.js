import React from "react";

const skills = [
  {
    name: "AI & Agentic AI",
    technologies:
      "AWS Bedrock, GitHub Copilot, Claude Code, Cline, Agentic AI, MCP (Model Context Protocol), Generative AI",
  },
  {
    name: "Languages",
    technologies:
      "TypeScript, JavaScript (ES6+), C#, Java, Python, HTML5, CSS3, SQL, GraphQL",
  },
  {
    name: "Frontend",
    technologies:
      "Angular 17, React, Redux, Tailwind CSS, Bootstrap, Responsive Design",
  },
  {
    name: "Backend & APIs",
    technologies:
      "NestJS, Node.js, Express, .NET/xUnit/NUnit, REST, GraphQL, Apollo, Fastify",
  },
  {
    name: "Event Streaming",
    technologies: "Apache Kafka (SASL), Event-driven Architecture",
  },
  {
    name: "Databases",
    technologies: "PostgreSQL, MySQL, MongoDB, DynamoDB, TypeORM",
  },
  {
    name: "Test Automation",
    technologies:
      "Playwright, Cypress, Selenium, CodeceptJs, Provar, Copado, K6, JMeter, Stryker (Mutation Testing), Visual Regression Testing",
  },
  {
    name: "Test Frameworks",
    technologies: "TestNG, JUnit, NUnit, xUnit, Cucumber, SpecFlow, Vitest, Jest",
  },
  {
    name: "API & Contract Testing",
    technologies:
      "Postman, Insomnia, SoapUI, RestSharp, Rest Assured, Newman, Contract Testing",
  },
  {
    name: "CI/CD & DevOps",
    technologies:
      "GitHub Actions, CircleCI, Azure DevOps, Jenkins, Docker, Kubernetes, EKS, Helm, Terraform",
  },
  {
    name: "Cloud & Infrastructure",
    technologies:
      "AWS (Bedrock, EKS, DynamoDB), Heroku, SauceLabs, BrowserStack, Rancher",
  },
  {
    name: "Code Quality & Security",
    technologies: "SonarQube, Snyk, AppSpider, Linting, Code Coverage",
  },
  {
    name: "Observability & Reporting",
    technologies: "ReportPortal, Dynatrace, Grafana, Splunk, AlertSite",
  },
  {
    name: "CRM & Platforms",
    technologies: "Salesforce, ServiceNow",
  },
  {
    name: "Tools & Management",
    technologies:
      "Jira, ADO, X-ray, Zephyr, Test Rail, Confluence, Git, Bitbucket",
  },
];

const Resume = () => {
  return (
    <div className="row page-container">
      <div className="header-image col"></div>
      <div className="col-8">
        <div className="text-center my-2">
          <h2 className="fw-bold">Resume</h2>
        </div>
        <div className="container">
          <div className="text-center my-2">
          </div>
          <div>
            <h3 className="text-center fw-bold mb-4">Technical Skills</h3>
            <div className="container">
              {skills.map((skill) => (
                <div>
                  <div className="row justify-content-center mb-3 mx-auto">
                    <div className="col-2 col-md-auto col-sm-12 fw-bold w-auto">
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
