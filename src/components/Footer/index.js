import React from "react";


const Footer = () => {
  return (
    <footer className="text-center" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/krupali-pilgulwar-0760721a"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="bi bi-linkedin" />
            <span>linkedin</span>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/rpkrupali1"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-github" fill="currentColor"/>
            <span>Github</span>
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
