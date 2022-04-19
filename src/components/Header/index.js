import React, { useState } from "react";
import Navigation from "../Navigation";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import {AiOutlineMenu} from "react-icons/ai";

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
      {/* <div className="header-image"></div> */}
      <nav className="navbar fixed-top navbar-expand-md">
        <a className="navbar-brand" href="/">
          <span className="h1 fw-bold mx-4 no-list-style">Krupali Pilgulwar</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <AiOutlineMenu />
        </button>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      {renderPage()}
    </header>
  );
};

export default Header;
