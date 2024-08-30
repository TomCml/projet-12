import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mon Portfolio</h1>
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>
          À propos
        </a>
        <a href="#projects" style={styles.link}>
          Projets
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
