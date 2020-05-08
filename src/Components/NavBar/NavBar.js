import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <Link className="NavBar--marquee" to="/sterling">
            Sterling | Dev
          </Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/connect">Connect</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
