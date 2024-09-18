import React, { useEffect, useState } from "react";
import "./technos.scss";
import Technocard from "../technocards/technocard";
import axios from "axios";
import ide from "../../../src/assets/ide.jpg";
import Loader from "../loader/loader";

const Skills = () => {
  const [technos, setTechnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("./technos.json")
      .then((response) => {
        setTechnos(response.data.technos);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <section className="technos" id="technologies">
      <h2>Technologies</h2>
      <div className="card-container">
        {technos.map((techno, index) => (
          <Technocard key={index} techno={techno.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
