import React from "react";
import "./skillcard.scss";

const Skillcard = ({ logo, name }) => {
  return (
    <div className="skillcard">
      <img src={logo} alt={`${name} logo`} />
      <h3>{name}</h3>
    </div>
  );
};

Skillcard.defaultProps = {
  logo: "",
  name: "Unnamed Skill",
};

export default Skillcard;
