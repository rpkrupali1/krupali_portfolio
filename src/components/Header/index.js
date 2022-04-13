import React from "react";

const Header = () => {
  return (
    <div className="jumbotron">
      <nav className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="/">
          Krupali
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

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
      </nav>

      <div className="jumbotron">
        <h1></h1>
      </div>
    </div>
  );
};

export default Header;
