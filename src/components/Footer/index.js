import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const style = {
    backgroundColor: "#576574",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <footer className="text-center mt-auto" style={style}>
      <div className="container">
        <section className="">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/krupali-pilgulwar-0760721a"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/rpkrupali1"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
