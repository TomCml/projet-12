import React, { useContext } from "react";
import "./loader.scss";
import logoDark from "../../assets/logo-dark-mode.png";
import logoLight from "../../assets/logo-light-mode.png";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";

const Loader = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="loader-container">
      <img
        src={darkMode ? logoDark : logoLight}
        alt="Loader Logo"
        className="loader-logo"
      />
    </div>
  );
};

export default Loader;
