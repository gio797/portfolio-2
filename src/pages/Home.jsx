import React from "react";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <About />
      <Work />
    </div>
  );
}

export default Home;
