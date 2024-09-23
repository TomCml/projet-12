import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";
import "./darkModeToggle.scss";

const DarkModeToggle = ({ className, style }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`darkmode ${className || ""}`}>
      {darkMode ? (
        <FontAwesomeIcon
          className="darkmodeIcon"
          icon={faSun}
          onClick={() => setDarkMode(false)}
          style={style}
        />
      ) : (
        <FontAwesomeIcon
          className="darkmodeIcon"
          icon={faMoon}
          onClick={() => setDarkMode(true)}
          style={style}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
