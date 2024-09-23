import React, { useContext, useState, useEffect } from "react";
import "./footer.scss";
import logo from "../../assets/logo v2.png";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer>
      <div className="footer-container">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
