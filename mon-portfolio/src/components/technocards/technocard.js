import React, { useEffect, useState } from "react";
import "./technocard.scss";
import axios from "axios";
import Loader from "../loader/loader";

const Technocard = ({ techno }) => {
  const [selectedTechno, setSelectedTechno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoverDirection, setHoverDirection] = useState("left");

  useEffect(() => {
    axios
      .get("./technos.json")
      .then((response) => {
        const technologies = response.data.technos;

        if (techno && typeof techno === "string") {
          const foundTechno = technologies.find(
            (t) => t.name && t.name.toLowerCase() === techno.toLowerCase()
          );
          setSelectedTechno(foundTechno);
        } else {
          setSelectedTechno(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [techno]);

  if (loading) return <Loader />;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!selectedTechno) return <p>Technologie non trouvée.</p>;

  return (
    <div className={`technocard `}>
      <img src={selectedTechno.logo} alt={`${selectedTechno.name} logo`} />
      <h3>{selectedTechno.name}</h3>
    </div>
  );
};

export default Technocard;
