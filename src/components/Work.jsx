import React from "react";
import img01 from "../images/portfolio-01.jpg";
import img02 from "../images/portfolio-02.jpg";
import img03 from "../images/portfolio-03.jpg";
import img04 from "../images/portfolio-04.jpg";
import img05 from "../images/portfolio-05.jpg";
import img06 from "../images/portfolio-06.jpg";
import img07 from "../images/portfolio-07.jpg";
import img08 from "../images/portfolio-08.jpg";
import img09 from "../images/portfolio-09.jpg";
import img10 from "../images/portfolio-10.jpg";

function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <a href="project" className="portfolio__item">
          <img src={img01} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img02} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img03} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img04} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img05} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img06} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img07} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img08} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img09} alt="" className="portfolio__img" />
        </a>

        <a href="project" className="portfolio__item">
          <img src={img10} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default Work;
