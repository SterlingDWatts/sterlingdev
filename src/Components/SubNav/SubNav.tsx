import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faBrowser, faAddressCard, faFileUser } from "@fortawesome/pro-light-svg-icons";
import classnames from "classnames";
import "./SubNav.css";

type AppProps = {
  showSubNav: boolean;
  linkClick: () => void;
  scrollToTop: () => void;
};

const SubNav = ({ showSubNav, linkClick, scrollToTop }: AppProps) => {
  return (
    <div
      className={classnames("SubNav", {
        "SubNav--hidden": !showSubNav,
      })}
    >
      <Link to={{ pathname: "/", hash: "#about" }} onClick={linkClick}>
        <FontAwesomeIcon icon={faUserTie} />
      </Link>
      <Link to={{ pathname: "/", hash: "#about" }} onClick={linkClick} className="SubNav--link-name">
        About
      </Link>
      <Link to={{ pathname: "/", hash: "#projects" }} onClick={linkClick}>
        <FontAwesomeIcon icon={faBrowser} />
      </Link>
      <Link to={{ pathname: "/", hash: "#projects" }} onClick={linkClick} className="SubNav--link-name">
        Projects
      </Link>
      <Link to={{ pathname: "/", hash: "#connect" }} onClick={linkClick}>
        <FontAwesomeIcon icon={faAddressCard} />
      </Link>
      <Link to={{ pathname: "/", hash: "#connect" }} onClick={linkClick} className="SubNav--link-name">
        Connect
      </Link>
      <Link to="resume" onClick={linkClick}>
        <FontAwesomeIcon icon={faFileUser} />
      </Link>
      <Link to="resume" onClick={scrollToTop} className="SubNav--link-name">
        Resume
      </Link>
    </div>
  );
};

export default SubNav;
