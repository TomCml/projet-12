import React, { useEffect, useState } from "react";
import "./technocard.scss";
import axios from "axios";

const Technocard = ({ techno }) => {
  const [selectedTechno, setSelectedTechno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoverDirection, setHoverDirection] = useState("left"); // Gère la direction du hover

  // Gestion de l'entrée de la souris pour déterminer la direction de l'animation
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const mouseX = e.clientX;
    const cardRect = card.getBoundingClientRect();

    // Si la souris entre par la gauche du conteneur
    if (mouseX - cardRect.left < cardRect.width / 2) {
      setHoverDirection("left"); // Remplir de gauche à droite
    } else {
      setHoverDirection("right"); // Remplir de droite à gauche
    }
  };

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

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!selectedTechno) return <p>Technologie non trouvée.</p>;

  return (
    <div
      className={`technocard ${
        hoverDirection === "left" ? "hover-left" : "hover-right"
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <img src={selectedTechno.logo} alt={`${selectedTechno.name} logo`} />
      <h3>{selectedTechno.name}</h3>
    </div>
  );
};

export default Technocard;
