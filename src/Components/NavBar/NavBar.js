import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUserTie,
  faBrowser,
  faAddressCard,
  faFileUser,
} from "@fortawesome/pro-light-svg-icons";
import classnames from "classnames";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    visible: true,
    linkClicked: false,
    showSubNav: false,
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
        showSubNav: false,
      });
    } else {
      this.setState({
        prevScrollPos: currentScrollPos,
        visible: true,
        linkClicked: false,
        showSubNav: false,
      });
    }
  };

  handleScrollToTop = () => {
    window.scrollTo(0, 0);
    this.handleCloseSubNav();
  };

  handleCloseSubNav = () => {
    this.setState({
      showSubNav: false,
    });
  };

  handleLinkClick = () => {
    this.setState({
      linkClicked: true,
    });
    this.handleCloseSubNav();
  };

  toggleNav = () => {
    this.setState({
      showSubNav: !this.state.showSubNav,
    });
  };

  renderSubNav = () => {
    const { showSubNav } = this.state;
    return (
      <div
        className={classnames("SubNav", {
          "SubNav--hidden": !showSubNav,
        })}
      >
        <HashLink to="/#about" onClick={this.handleLinkClick}>
          <FontAwesomeIcon icon={faUserTie} />
        </HashLink>
        <HashLink
          to="/#about"
          onClick={this.handleLinkClick}
          className="SubNav--link-name"
        >
          About
        </HashLink>
        <HashLink to="/#projects" onClick={this.handleLinkClick}>
          <FontAwesomeIcon icon={faBrowser} />
        </HashLink>
        <HashLink
          to="/#projects"
          onClick={this.handleLinkClick}
          className="SubNav--link-name"
        >
          Projects
        </HashLink>
        <HashLink to="/#connect" onClick={this.handleLinkClick}>
          <FontAwesomeIcon icon={faAddressCard} />
        </HashLink>
        <HashLink
          to="/#connect"
          onClick={this.handleLinkClick}
          className="SubNav--link-name"
        >
          Connect
        </HashLink>
        <Link to="resume" onClick={this.handleLinkClick}>
          <FontAwesomeIcon icon={faFileUser} />
        </Link>
        <Link
          to="resume"
          onClick={this.handleScrollToTop}
          className="SubNav--link-name"
        >
          Resume
        </Link>
      </div>
    );
  };

  render() {
    const icon = this.state.showSubNav ? faTimes : faBars;
    return (
      <nav
        className={classnames("NavBar", {
          "NavBar--hidden": !this.state.visible,
        })}
      >
        <div className="NavBar__container">
          <button className="NavBar--hamburger" onClick={this.toggleNav}>
            <FontAwesomeIcon icon={icon} />
          </button>
          <Link
            className="NavBar--marquee"
            to="/"
            onClick={this.handleScrollToTop}
          >
            Sterling | Dev
          </Link>
          <HashLink
            className="NavBar--large"
            to="/#about"
            onClick={this.handleLinkClick}
          >
            About
          </HashLink>
          <HashLink
            className="NavBar--large"
            to="/#projects"
            onClick={this.handleLinkClick}
          >
            Projects
          </HashLink>
          <HashLink
            className="NavBar--large"
            to="/#connect"
            onClick={this.handleLinkClick}
          >
            Connect
          </HashLink>
          <Link
            to="resume"
            className="NavBar--large"
            onClick={this.handleScrollToTop}
          >
            Resume
          </Link>
        </div>
        {this.renderSubNav()}
      </nav>
    );
  }
}

export default NavBar;
