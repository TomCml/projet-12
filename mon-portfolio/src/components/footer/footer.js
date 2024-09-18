import React, { useState, useEffect } from "react";
import "./footer.scss";
import logo from "../../assets/logo v2.png";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <footer>
      <div className="footer-container">
        <div className="links-footer">
          <a href="#technologies">Technologies</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials"></div>
      </div>
    </footer>
  );
};

export default Footer;
