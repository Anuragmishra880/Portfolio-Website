import React from "react";
import Introduction from "../Components/Introduction";

import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Introduction />
      <About />
      <Project />
      <Skills />
      <Contact/>
    </>
  );
};

export default Home;
