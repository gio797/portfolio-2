import React from "react";
import img from "../images/dev-jane-02.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about"></p>

      <div className="about-me__body">
        <p></p>
        <p></p>
      </div>

      <img src={img} alt="Jane leaning against a bus" />
    </section>
  );
}

export default About;
