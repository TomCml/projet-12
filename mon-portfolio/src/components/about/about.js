import React, { useEffect, useState } from "react";
import "./about.scss";
import profilePicture from "../../assets/pp.jpg";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1150) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div
        className="about"
        style={
          isMobile
            ? { transform: "none" }
            : { transform: `translateX(-${scrollPosition}px)` }
        }
      >
        <div className="thomas">
          <h2>Thomas Cemeli</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="placeholder"></div>
    </section>
  );
};

export default About;
