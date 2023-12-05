import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>EventHorizon</span>
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <Link to="/login" className="profile-link">
          login <FontAwesomeIcon icon={faUserCircle} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
