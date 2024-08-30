import React from "react";
import "./header.scss";
import logo from "../../assets/logo v2.png";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo Thomas Cemeli" className="logo"></img>
      </div>
      <nav>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#competences">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
      <div></div>
    </header>
  );
}

export default Header;
