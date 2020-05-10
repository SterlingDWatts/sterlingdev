import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classnames from "classnames";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    visible: true,
    linkClicked: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos, linkClicked } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    if (!linkClicked) {
      this.setState({
        prevScrollPos: currentScrollPos,
        visible,
      });
    } else {
      this.setState({
        prevScrollPos: currentScrollPos,
        visible: true,
        linkClicked: false,
      });
    }
  };

  handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  handleLinkClick = () => {
    this.setState({
      linkClicked: true,
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
          <Link
            className="NavBar--marquee"
            to="/"
            onClick={this.handleScrollToTop}
          >
            Sterling | Dev
          </Link>
          <HashLink to="/#about" onClick={this.handleLinkClick}>
            About
          </HashLink>
          <HashLink to="/#projects" onClick={this.handleLinkClick}>
            Projects
          </HashLink>
          <HashLink to="/#connect" onClick={this.handleLinkClick}>
            Connect
          </HashLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
