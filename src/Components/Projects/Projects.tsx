import React from "react";
import Section from "../Section/Section";
import Project from "../Project/Project";
import BrandsCssThreeAlt from "../../svgs/brands/BrandsCssThreeAlt";
import BrandsHtmlFive from "../../svgs/brands/BrandsHtmlFive";
import BrandsJsSquare from "../../svgs/brands/BrandsJsSquare";
import BrandsNodeJs from "../../svgs/brands/BrandsNodeJs";
import BrandsPostreSql from "../../svgs/brands/BrandsPostreSql";
import BrandsReact from "../../svgs/brands/BrandsReact";
import "./Projects.css";

const Projects = () => {
  return (
    <Section className="Projects">
      <div id="projects"> </div>
      <header>
        <h2>Projects</h2>
      </header>
      <div className="Projects__container">
        <Project
          picture="https://quaff.now.sh/QuaffLanding.PNG"
          alt="Quaff Quiz Home Page for large screens"
          name="Quaff Quizz"
          siteLink="https://quaff.now.sh"
          clientLink="https://github.com/SterlingDWatts/quaff"
          serverRepoLink="https://github.com/SterlingDWatts/quaff-server"
        >
          <p>Learn and Study Wine!</p>
          <p>
            Learn wine through short digestible modules followed by tests. Get a high enough score and unlock the next
            module! As modules are unlocked the questions are added into the study section filtered by topic to make it
            easy to cement the knowledge.
          </p>
          <div className="Project__icons">
            <BrandsJsSquare fill="#00685b" height="32px" />
            <BrandsReact fill="#00685b" height="32px" />
            <BrandsHtmlFive fill="#00685b" height="32px" />
            <BrandsCssThreeAlt fill="#00685b" height="32px" />
            <BrandsNodeJs fill="#00685b" height="32px" />
            <BrandsPostreSql fill="#00685b" height="32px" backgroundColor="#ffff6b" />
          </div>
        </Project>
        <Project
          picture="https://sterlingblog.now.sh/sterling-blog-desktop-2.png"
          alt="Sterling | Blog Home Page for large screens"
          name="Sterling | Blog"
          siteLink="https://sterlingblog.now.sh/"
          clientLink="https://github.com/SterlingDWatts/sterling-blog"
          serverRepoLink="https://github.com/SterlingDWatts/sterling-blog-server"
        >
          <p>Create | Edit | Share</p>
          <p>
            A blog content management system. Scroll through and read existing blogs. Create new blogs as well as edit
            your existing blogs using an intuitive "what you see is what you get" editor.
          </p>
          <div className="Project__icons">
            <BrandsJsSquare fill="#00685b" height="32px" />
            <BrandsReact fill="#00685b" height="32px" />
            <BrandsHtmlFive fill="#00685b" height="32px" />
            <BrandsCssThreeAlt fill="#00685b" height="32px" />
            <BrandsNodeJs fill="#00685b" height="32px" />
            <BrandsPostreSql fill="#00685b" height="32px" backgroundColor="#ffff6b" />
          </div>
        </Project>
        <Project
          picture="https://sterlingdwatts.github.io/portfolio/images/game-hub-desktop-landing-page.png"
          alt="Game Hub Home Page for large screens"
          name="Game Hub"
          siteLink="https://sterlingdwatts.github.io/game_hub/"
          clientLink="https://github.com/SterlingDWatts/game_hub"
        >
          <p>The hottest new way to discover new board games!</p>
          <p>
            Game Hub allows users to search for a specific board game or select from an always updating list of the
            hottest trending games! Game Hub has detailed information about each game and has links for families the
            game belongs to so you can find similar games. On each game's info page, there are also links to any
            expansions that exist for the game, so that if you love the game you can keep the fun going!
          </p>
          <div className="Project__icons">
            <BrandsJsSquare fill="#00685b" height="32px" />
            <BrandsHtmlFive fill="#00685b" height="32px" />
            <BrandsCssThreeAlt fill="#00685b" height="32px" />
          </div>
        </Project>
      </div>
    </Section>
  );
};

export default Projects;
