import React from "react";
import img from "../images/dev-jane-01.jpg";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img
        src={img}
        alt="a picture of Jane Smith smiling"
        className="intro__img"
      />
    </section>
  );
}

export default Intro;
