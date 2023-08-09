import React from "react";
import BrandsFacebookF from "../../svgs/brands/BrandsFacebookF";
import BrandsGithub from "../../svgs/brands/BrandsGithub";
import BrandsInstagram from "../../svgs/brands/BrandsInstagram";
import BrandsLinkedinIn from "../../svgs/brands/BrandsLinkedinIn";
import BrandsX from "../../svgs/brands/BrandsX";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <a href="https://github.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <BrandsGithub height="20px" fill="#fcd734" />
        </a>
        <a href="https://www.linkedin.com/in/sterlingdwatts/" rel="noopener noreferrer" target="_blank">
          <BrandsLinkedinIn height="20px" fill="#fcd734" />
        </a>
        <a href="https://www.facebook.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <BrandsFacebookF height="20px" fill="#fcd734" />
        </a>
        <a href="https://www.instagram.com/sterlingdwatts/" rel="noopener noreferrer" target="_blank">
          <BrandsInstagram height="20px" fill="#fcd734" />
        </a>
        <a href="https://twitter.com/SterlingDWatts" rel="noopener noreferrer" target="_blank">
          <BrandsX height="20px" fill="#fcd734" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
