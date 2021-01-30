import React from "react";
import "./Section.css";

type AppProps = { className: string; children?: any };

const Section = ({ className, children }: AppProps) => {
  return <section className={`${className} Section`}>{children}</section>;
};

export default Section;
