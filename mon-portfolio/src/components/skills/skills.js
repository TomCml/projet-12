import React, { useEffect, useState } from "react";
import "./skills.scss";
import axios from "axios";
import Skillcard from "../skillcard/skillcard";
import Loader from "../loader/loader";

const Skills = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("./skills.json")
      .then((response) => {
        setData(response.data);
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
    <div className="skills" id="skills">
      <h2>Compétences</h2>

      {data &&
        data.map((item, index) => (
          <Skillcard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
    </div>
  );
};

export default Skills;
