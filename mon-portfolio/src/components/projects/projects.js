import React, { useEffect, useState } from 'react';
import './projects.scss';
import Projectcard from '../projectcard/projectcard';
import axios from 'axios';

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("./projects.json")
      .then(response => {
        setData(response.data.projects);
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
    <div className="projects">
      <h2>Mes projets</h2>
      <div className="content">
        {data.map((project, index) => (
          <Projectcard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
