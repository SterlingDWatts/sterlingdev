import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    visible: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <nav
        className={classnames("NavBar", {
          "NavBar--hidden": !this.state.visible,
        })}
      >
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
