import React, { useEffect, useState } from "react";
import "./technos.scss";
import Technocard from "../technocards/technocard";
import axios from "axios";

const Skills = () => {

  const [technos, setTechnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("./technos.json")
      .then(response => {
        setTechnos(response.data.technos);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="technos">
     <h2>Technologies</h2>

     <div className="card-container">
      {technos.map((techno, index) => (
              <Technocard key={index} techno={techno.name} />
            ))}

     </div>
      
    </div>
  );
};

export default Skills;
