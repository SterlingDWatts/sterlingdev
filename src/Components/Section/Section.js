import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Section.css";

class Section extends Component {
  render() {
    return (
      <section className={`${this.props.className} Section`}>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Section;
