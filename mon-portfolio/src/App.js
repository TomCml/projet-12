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
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <div className="body">
          <About />
          <div className="skills-and-technos">
            <Technos />
            <Skills />
          </div>
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
