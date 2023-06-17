import React from "react";
import img from "../images/dev-jane-02.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Designer & developer based out of NYC
      </p>

      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laborum quae doloremque reiciendis voluptas ab
          repellendus, tenetur labore. Voluptatibus non, atque ratione
          repudiandae suscipit delectus harum odio laudantium tenetur aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          error vero. Atque adipisci deleniti dolorum dicta aliquid, cum
          pariatur inventore provident neque, nam voluptate nesciunt tempora
          enim vero expedita quia.
        </p>
      </div>

      <img
        src={img}
        alt="Jane leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
}

export default About;
