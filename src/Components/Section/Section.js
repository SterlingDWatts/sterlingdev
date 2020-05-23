import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

function Section(props) {
  return (
    <section className={`${props.className} Section`}>{props.children}</section>
  );
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Section;
