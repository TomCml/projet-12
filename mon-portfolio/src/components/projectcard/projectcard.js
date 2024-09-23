import React, { useState } from "react";
import "./projectcard.scss";
import Technocard from "../technocards/technocard";

const Projectcard = ({ project }) => {
  const { name, technologies, description, features, backgroundImage } =
    project;

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div
      className="projectcard"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content">
        <h2 className="title">{name}</h2>
        <p>{description}</p>
        <h3>Features</h3>
        {features && features.length > 0 && (
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        {/*<img src={backgroundImage}></img>*/}
      </div>
      <div className="technos-in-project">
        {technologies.map((techno, index) => (
          <Technocard className="techno-project" key={index} techno={techno} />
        ))}
      </div>
    </div>
  );
};

export default Projectcard;
