import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/logo v2.png";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo Thomas Cemeli" className="logo"></img>
        </div>
        <nav>
          <a href="#technologies">Technologies</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <a href="https://github.com/TomCZQ" target="_blank" rel="noreferrer">
            <img src={github} alt="Github logo"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/tonprofil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin logo"></img>
          </a>
          <a
            href="https://www.instagram.com/thomas_cemeli/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram logo"></img>
          </a>
          <div className="darkmode">
            {darkMode ? (
              <FontAwesomeIcon
                className="darkmodeIcon"
                icon={faMoon}
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <FontAwesomeIcon
                className="darkmodeIcon"
                icon={faSun}
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
