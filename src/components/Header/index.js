import React from "react";
import Navigation from "../Navigation";
import AboutMe from "../AboutMe";

const Header = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="/">
          Krupali
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <Navigation />
      </nav>

      <div className="jumbotron pt-6">
        <h1></h1>
      </div>

      <AboutMe />
    </header>
  );
};

export default Header;
