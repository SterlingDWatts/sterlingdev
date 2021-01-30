import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBrowser,
  faAddressCard,
  faFileUser,
} from "@fortawesome/pro-light-svg-icons";
import classnames from "classnames";
import "./SubNav.css";

function SubNav({ showSubNav, linkClick, scrollToTop }) {
  return (
    <div
      className={classnames("SubNav", {
        "SubNav--hidden": !showSubNav,
      })}
    >
      <HashLink to="/#about" onClick={linkClick}>
        <FontAwesomeIcon icon={faUserTie} />
      </HashLink>
      <HashLink to="/#about" onClick={linkClick} className="SubNav--link-name">
        About
      </HashLink>
      <HashLink to="/#projects" onClick={linkClick}>
        <FontAwesomeIcon icon={faBrowser} />
      </HashLink>
      <HashLink
        to="/#projects"
        onClick={linkClick}
        className="SubNav--link-name"
      >
        Projects
      </HashLink>
      <HashLink to="/#connect" onClick={linkClick}>
        <FontAwesomeIcon icon={faAddressCard} />
      </HashLink>
      <HashLink
        to="/#connect"
        onClick={linkClick}
        className="SubNav--link-name"
      >
        Connect
      </HashLink>
      <Link to="resume" onClick={linkClick}>
        <FontAwesomeIcon icon={faFileUser} />
      </Link>
      <Link to="resume" onClick={scrollToTop} className="SubNav--link-name">
        Resume
      </Link>
    </div>
  );
}

export default SubNav;
