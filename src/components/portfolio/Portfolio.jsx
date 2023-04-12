import React from "react";
import IMG1 from "../../assets/mainPage.PNG";
import IMG2 from "../../assets/nextPrev.PNG";
import IMG3 from "../../assets/searchPage.PNG";
import IMG4 from "../../assets/clonenetflix.png";
import IMG5 from "../../assets/workPort.jpg";
import IMG6 from "../../assets/workPort2.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Google Clone",
      img: IMG1,
      description:
        "A Google Search clone which is created by using Next JS and tailwind CSS.",
      technologies: "React | NextJs | Tailwind",
      link: "https://google-clone-v2-nine.vercel.app/",
      github: "https://github.com/imtiyaj786/google-clone-v2",
    },
    {
      id: 2,
      title: "Netflix Clone",
      img: IMG4,
      description:
        "Fullstack Netflix Clone with React, NextJS, TailwindCSS & Prisma MongoDB.",
      technologies: "React | NextJs | TailwindCSS",
      link: "https://netflix-clone-imtiyaj786.vercel.app/",
      github: "https://github.com/imtiyaj786/Netflix-Clone",
    },
    {
      id: 3,
      title: "Google Clone",
      img: IMG2,
      description:
        "A Google Search clone which is created by using Next JS and tailwind CSS.",
      technologies: "JavaScript | Webpack",
      link: "https://google-clone-v2-nine.vercel.app/",
      github: "https://github.com/imtiyaj786/google-clone-v2",
    },
    {
      id: 4,
      title: "Google Clone",
      img: IMG3,
      description:
        "A Google Search clone which is created by using Next JS and tailwind CSS.",
      technologies: "JavaScript | CSS",
      link: "https://google-clone-v2-nine.vercel.app/",
      github: "https://github.com/imtiyaj786/google-clone-v2",
    },
    {
      id: 5,
      title: "Google Clone",
      img: IMG5,
      description:
        "A Google Search clone which is created by using Next JS and tailwind CSS.",
      technologies: "JavaScript | CSS",
      link: "https://google-clone-v2-nine.vercel.app/",
      github: "https://github.com/imtiyaj786/google-clone-v2",
    },
    {
      id: 6,
      title: "Google Clone",
      img: IMG6,
      description:
        "A Google Search clone which is created by using Next JS and tailwind CSS.",
      technologies: "JavaScript | Scss | Python",
      link: "https://google-clone-v2-nine.vercel.app/",
      github: "https://github.com/imtiyaj786/google-clone-v2",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
