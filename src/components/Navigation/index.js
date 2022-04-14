import React from "react";

const projects = [

  {name: 'Kitchen around you', description:''}
];

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li class="nav-item active">
          <a className="nav-link" href="/">
            About me
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
