import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const style = {
    backgroundColor: "#f1f1f1",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <footer className="text-center mt-auto" style={style}>
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
            <AiFillGithub />
            <span>Github</span>
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
