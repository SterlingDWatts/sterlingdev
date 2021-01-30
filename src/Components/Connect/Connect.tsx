import React from "react";
import Section from "../Section/Section";
import "./Connect.css";

function Connect() {
  return (
    <Section className="Connect">
      <div className="Connect--picture-container">
        <div className="Connect--picture"></div>
      </div>
      <div className="Connect--info">
        <div id="connect"> </div>
        <header>
          <h2>Connect</h2>
        </header>
        <div className="Connect--info-grid">
          <span>Cell</span>
          <span>858.609.9463</span>
          <span>Email</span>
          <span>
            <a
              href="mailto:SterlingDWatts@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              SterlingDWatts@gmail.com
            </a>
          </span>
          <span>Github</span>
          <span>
            <a
              href="https://github.com/SterlingDWatts"
              rel="noopener noreferrer"
              target="_blank"
            >
              /SterlingDWatts
            </a>
          </span>
          <span>Linkedin</span>
          <span>
            <a
              href="https://www.linkedin.com/in/sterlingdwatts/"
              rel="noopener noreferrer"
              target="_blank"
            >
              /sterlingdwatts
            </a>
          </span>
        </div>
      </div>
    </Section>
  );
}

export default Connect;
