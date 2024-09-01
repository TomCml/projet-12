import React from "react";
import "./header.scss";
import logo from "../../assets/logo v2.png";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo Thomas Cemeli" className="logo"></img>
        </div>
        <nav>
          <a href="#about">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <a>
            <img src={github}></img>
          </a>
          <a>
            <img src={linkedin}></img>
          </a>
          <a>
            <img src={instagram}></img>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
