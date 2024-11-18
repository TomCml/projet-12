import React, { useEffect, useState } from "react";
import "./about.scss";
import profilePicture from "../../assets/pp.jpg";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1150) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div
        className="about"
        style={
          isMobile
            ? { transform: "none" }
            : { transform: `translateX(-${scrollPosition}px)` }
        }
      >
        <div className="thomas">
          <h2>Thomas Cemeli</h2>
        </div>
        <p>
          Bonjour et bienvenue sur mon portfolio ! Je suis un développeur
          front-end en formation chez OpenClassrooms, qui s'est en chemin
          découvert une forte appétence pour le back-end. Mon objectif est de
          proposer un travail de qualité à mes clients, en répondant précisément
          à leurs besoins. Je suis motivé par le désir constant de m'améliorer
          et d'apprendre de nouvelles technologies, afin de fournir des
          solutions innovantes et performantes.
        </p>
      </div>
      <div className="placeholder"></div>
    </section>
  );
};

export default About;
