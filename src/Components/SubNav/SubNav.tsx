import React from "react";
import { Link } from "react-router-dom";
import LightAddressCard from "../../svgs/light/LightAddressCard";
import LightBrowser from "../../svgs/light/LightBrowser";
import LightFileUser from "../../svgs/light/LightFileUser";
import LightUserTie from "../../svgs/light/LightUserTie";
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
      <div className="SubNav__container">
        <Link to={{ pathname: "/home", hash: "#about" }} onClick={linkClick}>
          <LightUserTie height="15px" fill="#fcd734" />
        </Link>
        <Link to={{ pathname: "/home", hash: "#about" }} onClick={linkClick} className="SubNav--link-name">
          About
        </Link>
        <Link to={{ pathname: "/home", hash: "#projects" }} onClick={linkClick}>
          <LightBrowser height="15px" fill="#fcd734" />
        </Link>
        <Link to={{ pathname: "/home", hash: "#projects" }} onClick={linkClick} className="SubNav--link-name">
          Projects
        </Link>
        <Link to={{ pathname: "/home", hash: "#connect" }} onClick={linkClick}>
          <LightAddressCard height="15px" fill="#fcd734" />
        </Link>
        <Link to={{ pathname: "/home", hash: "#connect" }} onClick={linkClick} className="SubNav--link-name">
          Connect
        </Link>
        <Link to="resume" onClick={linkClick}>
          <LightFileUser height="15px" fill="#fcd734" />
        </Link>
        <Link to="resume" onClick={scrollToTop} className="SubNav--link-name">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default SubNav;
