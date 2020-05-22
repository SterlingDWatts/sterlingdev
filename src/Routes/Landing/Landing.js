import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Connect from "../../Components/Connect/Connect";
import "./Landing.css";

class Landing extends Component {
  render() {
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
  }
}

export default Landing;
