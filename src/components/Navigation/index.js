import React from "react";

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li class="nav-item active">
          <a className="nav-link" href="/">
            About me
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
