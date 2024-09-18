import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import About from "./components/about/about";
import Technos from "./components/technos/technos";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import DarkModeProvider from "../src/context/darkModeContext/darkModeContext";

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Sélection de toutes les balises <section>

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Ajout de la classe "visible" quand la section est visible
          }
        });
      },
      { threshold: 0.1 } // Déclenche l'animation quand 10% de la section est visible
    );

    sections.forEach((section) => {
      observer.observe(section); // Observer chaque section
    });

    // Nettoyage de l'observer lors de la destruction du composant
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <div className="body">
          <About /> {/* About contient sa propre balise <section> */}
          <div className="skills-and-technos">
            <Technos /> {/* Technos contient sa propre balise <section> */}
            <Skills /> {/* Skills contient sa propre balise <section> */}
          </div>
          <Projects /> {/* Projects contient sa propre balise <section> */}
          <Contact /> {/* Contact contient sa propre balise <section> */}
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
