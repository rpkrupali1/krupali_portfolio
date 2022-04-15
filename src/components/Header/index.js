import React, { useState } from "react";
import Navigation from "../Navigation";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  const renderPage = () => {
    switch (currentPage) {
      default:
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="">
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="/">
          Krupali Pilgulwar
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
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      {renderPage()}

      <div className="jumbotron pt-6">
        <h1></h1>
      </div>
    </header>
  );
};

export default Header;
