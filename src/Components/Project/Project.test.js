import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

describe("Project Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Project
          picture="https://www.pic.com/pic.png"
          alt="project picture"
          name="project"
          siteLink="https://www.site.com"
          clientLink="https://www.site.com"
        />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Project
            picture="https://www.pic.com/pic.png"
            alt="project picture"
            name="project"
            siteLink="https://www.site.com"
            clientLink="https://www.site.com"
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
