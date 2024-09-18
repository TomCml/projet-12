import React, { createContext, useState, useEffect } from "react";

// Créer le contexte
export const DarkModeContext = createContext();

// Fournisseur de contexte
const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Fonction pour mettre à jour les variables CSS
  const updateCSSVariables = (isDarkMode) => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty("--background-color", "#1E1E1E");
      root.style.setProperty("--secondary-background-color", "#333333");
      root.style.setProperty("--main-text-color", "#FAFAFA");
      root.style.setProperty("--secondary-text-color", "#E0E0E0");
      root.style.setProperty("--accent-color", "#FFD700");
    } else {
      root.style.setProperty("--background-color", "#FAFAFA");
      root.style.setProperty("--secondary-background-color", "#E0E0E0");
      root.style.setProperty("--main-text-color", "#333333");
      root.style.setProperty("--secondary-text-color", "#1C1C1C");
      root.style.setProperty("--accent-color", "#0026FF");
    }
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    updateCSSVariables(darkMode); // Mettre à jour les variables CSS
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
