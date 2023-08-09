import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Connect from "../../Components/Connect/Connect";
import "./Landing.css";

const Landing = () => {
  const { hash, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === "/") {
      history.replace({ pathname: "/home", hash });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hash !== "") {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="Landing">
      <Helmet>
        <title>Sterling | Dev</title>
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Connect />
    </div>
  );
};

export default Landing;
