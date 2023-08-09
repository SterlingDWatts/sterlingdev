import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SubNav from "../SubNav/SubNav";
import LightBars from "../../svgs/light/LightBars";
import LightXMark from "../../svgs/light/LightXMark";
import "./NavBar.css";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [linkClicked, setLinkClicked] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(linkClicked ? true : visible);
      setLinkClicked(false);
      setShowSubNav(false);
    }

    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [linkClicked, prevScrollPos]);

  function handleScrollToTop() {
    window.scrollTo(0, 0);
    setShowSubNav(false);
  }

  function handleLinkClick() {
    setLinkClicked(true);
    setShowSubNav(false);
  }

  function toggleNav() {
    setShowSubNav(!showSubNav);
  }

  const Icon = showSubNav ? LightXMark : LightBars;
  return (
    <nav
      className={classnames("NavBar", {
        "NavBar--hidden": !visible,
      })}
      onMouseEnter={() => setVisible(true)}
    >
      <div className="NavBar__container">
        <button className="NavBar--hamburger" onClick={toggleNav}>
          <Icon height="20px" fill="#fcd734" />
        </button>
        <Link className="NavBar--marquee" to="/home" onClick={handleScrollToTop}>
          Sterling | Dev
        </Link>
        <Link className="NavBar--large" to={{ pathname: "/home", hash: "#about" }} onClick={handleLinkClick}>
          About
        </Link>
        <Link className="NavBar--large" to={{ pathname: "/home", hash: "#projects" }} onClick={handleLinkClick}>
          Projects
        </Link>
        <Link className="NavBar--large" to={{ pathname: "/home", hash: "#connect" }} onClick={handleLinkClick}>
          Connect
        </Link>
        <Link to="resume" className="NavBar--large" onClick={handleScrollToTop}>
          Resume
        </Link>
      </div>
      <SubNav showSubNav={showSubNav} linkClick={handleLinkClick} scrollToTop={handleScrollToTop} />
    </nav>
  );
};

export default NavBar;
