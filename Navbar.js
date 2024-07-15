import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg navbar-toggler bg-dark fixed-top b-2">
        <div className="container">
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontFamily: "times new roman" }}>
              Home
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="linkroute" to="/about">
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link className="linkroute" to="/contact">
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <Link className="linkroute" to="/login">
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
