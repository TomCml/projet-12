import React, { useEffect, useState } from "react";
import "./projects.scss";
import Projectcard from "../projectcard/projectcard";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("./projects.json")
      .then((response) => {
        setData(response.data.projects);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>
      <div className="content">
        {data.map((project, index) => (
          <Projectcard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
