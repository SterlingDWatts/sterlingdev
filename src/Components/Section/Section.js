import React, { Component } from "react";
import "./Section.css";

class Section extends Component {
  render() {
    return (
      <section className={`${this.props.className} Section`} id={this.props.id}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
