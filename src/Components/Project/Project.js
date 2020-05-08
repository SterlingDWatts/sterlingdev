import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <img src={this.props.picture} alt={this.props.alt} />
        <div className="Project--info">
          <h3>{this.props.name}</h3>
          <div className="Project--links">
            <a href={this.props.siteLink}>Site</a> ∙{" "}
            <a href={this.props.clientLink}>Client Repo</a>
            {this.props.serverRepoLink && (
              <>
                {" ∙ "}
                <a href={this.props.serverRepoLink}>Server Repo</a>
              </>
            )}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Project;
