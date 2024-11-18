import React from "react";
import "./projectcard.scss";
import Technocard from "../technocards/technocard";

const Projectcard = ({ project }) => {
  const { name, technologies, description, features, backgroundImage, link } =
    project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="projectcard-link"
    >
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
          <h3>Fonctionnalités</h3>
          {features && features.length > 0 && (
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="technos-in-project">
          {technologies.map((techno, index) => (
            <Technocard
              className="techno-project"
              key={index}
              techno={techno}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Projectcard;
