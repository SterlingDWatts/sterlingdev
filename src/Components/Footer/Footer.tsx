import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <a href="https://github.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} title="Github" />
        </a>
        <a href="https://www.linkedin.com/in/sterlingdwatts/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} title="Linkedin" />
        </a>
        <a href="https://www.facebook.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} title="Facebook" />
        </a>
        <a href="https://www.instagram.com/sterlingdwatts/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faInstagram} title="Instagram" />
        </a>
        <a href="https://twitter.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitter} title="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
