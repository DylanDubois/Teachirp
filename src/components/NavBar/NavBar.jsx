import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const navBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary header">
      <Link className="navbar-brand text-primary brand" to="/">
        Teachirp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/add-course">
              Add Course
            </Link>
          </li> */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-target="#yungdropdown"
            >
              Courses
            </Link>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
              id="yungdropdown"
            >
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        {props.user && (
          <div className="profile-dropdown ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-target="#profiledropdown"
                >
                  {props.user.displayName}
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="profiledropdown"
                >
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={props.signOut}
                  >
                    Sign-Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default navBar;
