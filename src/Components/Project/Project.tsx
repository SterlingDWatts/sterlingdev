import React from "react";
import "./Project.css";

type AppProps = {
  picture: string;
  alt: string;
  name: string;
  siteLink: string;
  clientLink: string;
  children: any;
  serverRepoLink?: string;
};

function Project({
  picture,
  alt,
  name,
  siteLink,
  clientLink,
  children,
  serverRepoLink,
}: AppProps) {
  return (
    <div className="Project">
      <img src={picture} alt={alt} />
      <div className="Project--info">
        <h3>{name}</h3>
        <div className="Project--links">
          <a href={siteLink} rel="noopener noreferrer" target="_blank">
            Site
          </a>{" "}
          ∙{" "}
          <a href={clientLink} rel="noopener noreferrer" target="_blank">
            Client Repo
          </a>
          {serverRepoLink && (
            <>
              {" ∙ "}
              <a
                href={serverRepoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Server Repo
              </a>
            </>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Project;
