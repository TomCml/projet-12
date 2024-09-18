import React from "react";
import "./projectcard.scss";
import Technocard from "../technocards/technocard";

const Projectcard = ({ project }) => {
  const { name, technologies, description, features, backgroundImage } =
    project;

  console.log(backgroundImage);

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
        <div className="technos-in-project">
          {technologies.map((techno, index) => (
            <Technocard
              className="techno-project"
              key={index}
              techno={techno}
            />
          ))}
        </div>
        <p>{description}</p>
        <h3>Features</h3>
        {features && features.length > 0 && (
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projectcard;
