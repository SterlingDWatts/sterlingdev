import React, { Component } from "react";
import Section from "../Section/Section";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <Section className="Hero" id="sterling">
        <div className="Hero__container">
          <div className="Hero__header">
            <header>
              <h1>
                Sterling <br className="Hero--large" />
                Watts
              </h1>
              <span>Full Stack Web Developer</span>
            </header>
          </div>
          <div className="Hero__image_container">
            <div className="Hero__image"></div>
          </div>
          <div className="Hero--blurb">
            <p>
              I am a passionate Full Stack Web Developer that enjoys making
              beautiful and intuitive websites as well as analyzing the data
              that I can get from them!
            </p>
          </div>
        </div>
      </Section>
    );
  }
}

export default Hero;
