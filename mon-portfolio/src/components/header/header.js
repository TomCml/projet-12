import React, { useContext } from "react";
import "./header.scss";
import logoDark from "../../assets/logo-dark-mode.png";
import logoLight from "../../assets/logo-light-mode.png";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";

function Header() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo Thomas Cemeli"
            className="logo"
          />
        </div>
        <nav>
          <a href="#technologies">Technologies</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={github} alt="Github logo" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram logo" />
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
