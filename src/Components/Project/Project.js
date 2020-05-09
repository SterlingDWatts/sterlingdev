import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Project.css";

const SITE_REGEX = /(https:\/\/[?a-zA-Z0-9@:%._\+~#=-]{2,256})\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <img src={this.props.picture} alt={this.props.alt} />
        <div className="Project--info">
          <h3>{this.props.name}</h3>
          <div className="Project--links">
            <a
              href={this.props.siteLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Site
            </a>{" "}
            ∙{" "}
            <a
              href={this.props.clientLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Client Repo
            </a>
            {this.props.serverRepoLink && (
              <>
                {" ∙ "}
                <a
                  href={this.props.serverRepoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Server Repo
                </a>
              </>
            )}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: (props, propName, componentName) => {
    const prop = props[propName];
    const pic_regex = /(https:\/\/[?a-zA-Z0-9@:%._\+~#=-]{2,256})\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.[pPnNgG]{3}/;

    if (!prop) {
      return new Error(
        `${propName} is required in ${componentName}. Validation Failed.`
      );
    }

    if (typeof prop != "string") {
      return new Error(
        `Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`
      );
    }

    if (!pic_regex.test(prop)) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a valid url ending in '.png' or '.PNG' in ${componentName}.`
      );
    }
  },
  siteLink: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(
        `${propName} is required in ${componentName}. Validation Failed.`
      );
    }

    if (typeof prop != "string") {
      return new Error(
        `Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`
      );
    }

    if (!SITE_REGEX.test(prop)) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a valid url in ${componentName}.`
      );
    }
  },
  clientLink: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(
        `${propName} is required in ${componentName}. Validation Failed.`
      );
    }

    if (typeof prop != "string") {
      return new Error(
        `Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`
      );
    }

    if (!SITE_REGEX.test(prop)) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a valid url in ${componentName}.`
      );
    }
  },
  serverRepoLink: (props, propName, componentName) => {
    const prop = props[propName];

    if (typeof prop != "string" && !!prop) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`
      );
    }

    if (!SITE_REGEX.test(prop) && !!prop) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a valid url in ${componentName}.`
      );
    }
  },
};

export default Project;
