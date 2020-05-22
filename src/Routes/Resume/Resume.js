import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Helmet>
          <title>Sterling | Resume</title>
          <meta property="og:title" content="Sterling | Resume" />
        </Helmet>
        <div className="Resume--top">
          <section className="Resume--hero">
            <header>
              <h1>Sterling Watts</h1>
              <span>Full Stack Web Developer</span>
            </header>
          </section>
          <section className="Resume--contact">
            <h2>CONTACT</h2>
            <p>San Diego, CA</p>
            <p>
              <b>(858) 609-9463</b>
            </p>
            <p>
              <a
                href="mailto:SterlingDWatts@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                SterlingDWatts@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/sterlingdwatts/"
                rel="noopener noreferrer"
                target="_blank"
              >
                in/SterlingDWatts
              </a>
            </p>
            <p>
              <a
                href="https://github.com/SterlingDWatts"
                rel="noopener noreferrer"
                target="_blank"
              >
                github.com/SterlingDWatts
              </a>
            </p>
          </section>
        </div>
        <div className="Resume--bottom">
          <div className="Resume--right">
            <section className="Resume--summary">
              <h2>SUMMARY</h2>
              <p>
                An enthusiastic Full Stack Developer that enjoys making
                beautiful and intuitive sites as well as analyzing the data that
                can come from them.
              </p>
            </section>
            <section className="Resume--skills">
              <h2>SKILLS</h2>
              <div className="Resume--skill">
                <p>
                  <b>Front-End:</b> HTML5, CSS3, JavaScript ES6, React, Express,
                  jQuery
                </p>
              </div>
              <div className="Resume--skill">
                <p>
                  <b>Back-End:</b> Node.js, PostgreSQL
                </p>
              </div>
              <div className="Resume--skill">
                <p>
                  <b>Dev Tools:</b> Git, GitHub, Chrome Dev Tools
                </p>
              </div>
              <div className="Resume--skill">
                <p>
                  <b>Additional:</b> Mocha, Chai, Enzyme, Heroku, NPM, Python,
                  Pandas, NumPy, Seaborn, Matplotlib
                </p>
              </div>
            </section>
            <section className="Resume--education">
              <h2>EDUCATION</h2>
              <div className="Resume--course">
                <h3>Full Stack Bootcamp</h3>
                <p>MAY 2020</p>
                <p>Bloc</p>
              </div>
              <div className="Resume--course">
                <h3>Data Analyst - Python Path</h3>
                <p>MARCH 2019</p>
                <p>DataQuest</p>
              </div>
              <div className="Resume--course">
                <h3>Computer Science Route</h3>
                <p>JANUARY 2019</p>
                <p>Codecademy</p>
              </div>
            </section>
          </div>
          <div className="Resume--left">
            <section className="Resume--projects">
              <h2>PROJECTS</h2>
              <div className="Resume--project">
                <h3>
                  Quaff Quizz <span>- Wine education web app</span>
                </h3>
                <p>
                  <a
                    href="https://quaff.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE SITE
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/SterlingDWatts/quaff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLIENT REPO
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/SterlingDWatts/quaff-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SERVER REPO
                  </a>{" "}
                  | HTML5, CSS3, JavaScript, React, Nodejs, PostgreSQL, Heroku
                </p>
                <ul>
                  <li>
                    Randomized questions and answers to ensure users learn
                    content instead of memorizing patterns
                  </li>
                  <li>
                    Created topics so that material could be selected by topic
                    instead of studying all the content
                  </li>
                </ul>
              </div>
              <div className="Resume--project">
                <h3>
                  Sterling | Blog <span>- Create | Edit | Share</span>
                </h3>
                <p>
                  <a
                    href="https://sterlingblog.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE SITE
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/SterlingDWatts/sterling-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLIENT REPO
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/SterlingDWatts/sterling-blog-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SERVER REPO
                  </a>{" "}
                  | HTML5, CSS3, JavaScript, React, Nodejs, PostgreSQL, Heroku,
                  Froala WYSIWYG Editor, AWS
                </p>
                <ul>
                  <li>
                    Implemented a “what you see is what you get” editor to make
                    styling blog easy and intuitive
                  </li>
                  <li>
                    Created multiple endpoints to manage different tasks such as
                    surfacing blogs, user authentication, and returning secure
                    AWS credentials
                  </li>
                </ul>
              </div>
              <div className="Resume--project">
                <h3>
                  Game Hub <span>- Explore board games</span>
                </h3>
                <p>
                  <a
                    href="https://sterlingdwatts.github.io/game_hub/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE SITE
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/SterlingDWatts/game_hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    REPO
                  </a>{" "}
                  | HTML5, CSS3, JavaScript, jQuery, XML, Board Game Geek API
                </p>
                <ul>
                  <li>
                    Created algorithm to remove duplicates from API result and
                    sort by popularity
                  </li>
                  <li>
                    Used multiple API endpoints to make game pages more robust
                    with links to related games
                  </li>
                </ul>
              </div>
            </section>
            <section className="Resume--experience">
              <h2>EXPERIENCE</h2>
              <div className="Resume--job">
                <h3>
                  Eddie V's<span>, San Diego - Server</span>
                </h3>
                <p>FEBRUARY 2019 - PRESENT</p>
                <p>Lead staff training on beverage program</p>
              </div>
              <div className="Resume--job">
                <h3>
                  Eddie V's<span>, La Jolla - Manager</span>
                </h3>
                <p>SEPTEMBER 2013 - FEBRUARY 2019</p>
                <p>Reduced beverage costs while increasing beverage sales</p>
              </div>
            </section>
          </div>
        </div>
        <div className="Resume--download">
          <a href="/Resume.docx" download="Sterling_Resume">
            Download a Copy
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
