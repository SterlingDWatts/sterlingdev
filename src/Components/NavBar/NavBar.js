import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons";
import classnames from "classnames";
import SubNav from "../SubNav/SubNav";
import "./NavBar.css";

function NavBar() {
  const [state, setState] = useState({
    prevScrollPos: window.pageYOffset,
    visible: true,
    linkClicked: false,
    showSubNav: false,
  });

  useEffect(() => {
    function handleScroll() {
      const { prevScrollPos, linkClicked } = state;
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setState({
        prevScrollPos: currentScrollPos,
        visible: linkClicked ? true : visible,
        linkClicked: false,
        showSubNav: false,
      });
    }

    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScrollToTop() {
    window.scrollTo(0, 0);
    setState({
      ...state,
      showSubNav: false,
    });
  }

  function handleLinkClick() {
    setState({
      ...state,
      linkClicked: true,
      showSubNav: false,
    });
  }

  function toggleNav() {
    const { showSubNav } = state;
    setState({
      ...state,
      showSubNav: !showSubNav,
    });
  }

  const { showSubNav, visible } = state;
  const icon = showSubNav ? faTimes : faBars;
  return (
    <nav
      className={classnames("NavBar", {
        "NavBar--hidden": !visible,
      })}
    >
      <div className="NavBar__container">
        <button className="NavBar--hamburger" onClick={toggleNav}>
          <FontAwesomeIcon icon={icon} />
        </button>
        <Link className="NavBar--marquee" to="/" onClick={handleScrollToTop}>
          Sterling | Dev
        </Link>
        <HashLink
          className="NavBar--large"
          to="/#about"
          onClick={handleLinkClick}
        >
          About
        </HashLink>
        <HashLink
          className="NavBar--large"
          to="/#projects"
          onClick={handleLinkClick}
        >
          Projects
        </HashLink>
        <HashLink
          className="NavBar--large"
          to="/#connect"
          onClick={handleLinkClick}
        >
          Connect
        </HashLink>
        <Link to="resume" className="NavBar--large" onClick={handleScrollToTop}>
          Resume
        </Link>
      </div>
      <SubNav
        showSubNav={showSubNav}
        linkClick={handleLinkClick}
        scrollToTop={handleScrollToTop}
      />
    </nav>
  );
}

export default NavBar;
