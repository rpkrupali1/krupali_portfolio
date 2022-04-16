import React, { useEffect } from "react";

const Navigation = ({ currentPage, handlePageChange }) => {
  useEffect(() => {
    document.title = currentPage;
  });

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li class="nav-item">
          <a
            className={
              (currentPage === "AboutMe" ? "nav-link active" : "nav-link")
            }
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
          >
            About me
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              (currentPage === "Portfolio" ? "nav-link active" : "nav-link")
            }
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              (currentPage === "Contact" ? "nav-link active" : "nav-link")
            }
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              (currentPage === "Resume" ? "nav-link active" : "nav-link")
            }
            href="#resume"
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
