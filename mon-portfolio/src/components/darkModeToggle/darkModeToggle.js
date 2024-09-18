import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext); // Accéder au mode sombre

  return (
    <div className="darkmode">
      {darkMode ? (
        <FontAwesomeIcon
          className="darkmodeIcon"
          icon={faSun}
          onClick={() => setDarkMode(false)} // Basculer en mode clair
        />
      ) : (
        <FontAwesomeIcon
          className="darkmodeIcon"
          icon={faMoon}
          onClick={() => setDarkMode(true)} // Basculer en mode sombre
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
