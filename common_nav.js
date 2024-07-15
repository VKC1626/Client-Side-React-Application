import React from "react";
import { Link } from "react-router-dom";

const Common_nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark" position="fixed">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="linkroute" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="linkroute" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="linkroute" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Common_nav;
