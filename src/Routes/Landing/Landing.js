import React, { Component } from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Connect from "../../Components/Connect/Connect";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Hero />
        <About />
        <Projects />
        <Connect />
      </div>
    );
  }
}

export default Landing;
