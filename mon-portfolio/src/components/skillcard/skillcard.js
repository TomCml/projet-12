import React from "react";
import "./skillcard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPenToSquare, faPersonChalkboard, faMagnifyingGlass, faPlay, faChartLine, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faHandshake,  } from '@fortawesome/free-regular-svg-icons';

const skillcard = ({ title, description, icon }) => {

  const iconMap = {
    faCoffee: faCoffee,
    faPenToSquare: faPenToSquare,
    faHandshake: faHandshake,
    faPersonChalkboard: faPersonChalkboard,
    faPlay: faPlay,
    faMagnifyingGlass: faMagnifyingGlass,
    faMobileScreenButton: faMobileScreenButton,
    faChartLine: faChartLine
  };

  return (
    <div className="skillcard">
      <div className="title">
        <h3>{title}</h3>
        <FontAwesomeIcon icon={iconMap[icon] || faPersonChalkboard} />
      </div>
      <p>{description}</p>
    </div>
  );
};

skillcard.defaultProps = {
  title: "Unnamed Skill",
  description: "No description found",
  icon: "faHandshake" 
};


export default skillcard;
