import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";

describe("<Projects />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("render the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Projects />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
