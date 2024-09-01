import React from "react";
import "./skills.scss";
import Skillcard from "../skillcard/skillcard";
import sass from "../../assets/technos/sass.png";
import htmlcss from "../../assets/technos/htmlcss.png";
import react from "../../assets/technos/react.png";
import js from "../../assets/technos/js.png";
import nodejs from "../../assets/technos/nodejs.png";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <Skillcard logo={sass} name="Sass" />
      <Skillcard logo={htmlcss} name="HTML & CSS" />
      <Skillcard logo={react} name="React" />
      <Skillcard logo={js} name="JavaScript" />
      <Skillcard logo={nodejs} name="Node.JS" />
    </div>
  );
};

export default Skills;
