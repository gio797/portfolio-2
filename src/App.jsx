import { useState } from "react";
import Header from "./components/header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
