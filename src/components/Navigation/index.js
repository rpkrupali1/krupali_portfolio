import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = ({ currentPage, handlePageChange }) => {
  useEffect(() => {
    document.title = currentPage;
  });

  return (
    <Navbar.Collapse id="basic-navbar-nav" className="mx-4">
      <Nav className="ml-auto">
        <Nav.Link
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
          href="#aboutme"
          onClick={() => handlePageChange("AboutMe")}
        >
          About me
        </Nav.Link>
        <Nav.Link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Nav.Link>
        <Nav.Link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default Navigation;
