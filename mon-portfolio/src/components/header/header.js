import React, { useContext, useState, useEffect } from "react";
import "./header.scss";
import logoDark from "../../assets/logo-dark-mode.png";
import logoLight from "../../assets/logo-light-mode.png";
import { DarkModeContext } from "../../context/darkModeContext/darkModeContext";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import github from "../../assets/socials/github-mark.png";
import linkedin from "../../assets/socials/In-Blue-40@2x.png";
import instagram from "../../assets/socials/Instagram_Glyph_Black.png";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const { darkMode } = useContext(DarkModeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      onSlide={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="#technologies">
          <ListItemText
            primary="Technologies"
            primaryTypographyProps={{ fontSize: "1.3rem" }}
          />
        </ListItem>
        <ListItem button component="a" href="#skills">
          <ListItemText
            primary="Compétences"
            primaryTypographyProps={{ fontSize: "1.3rem" }}
          />
        </ListItem>
        <ListItem button component="a" href="#projects">
          <ListItemText
            primary="Projets"
            primaryTypographyProps={{ fontSize: "1.3rem" }}
          />
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ListItemText
            primary="Contact"
            primaryTypographyProps={{ fontSize: "1.3rem" }}
          />
        </ListItem>
        <ListItem>
          <div>
            <DarkModeToggle style={{ color: "var(--accent-color)" }} />
          </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo Thomas Cemeli"
            className="logo"
          />
        </div>
        {isMobile ? (
          <>
            <IconButton
              className="mobile-menu-button"
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: 200,
                  backgroundColor: "var(--background-color)",
                  zIndex: 9999,
                },
              }}
            >
              <div className="drawer-header">
                <IconButton
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: "var(--main-text-color)",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
              {menuItems}
            </Drawer>
          </>
        ) : (
          <>
            <nav className="desktop-menu">
              <a href="#technologies">Technologies</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="socials">
              <a
                href="https://github.com/TomCZQ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Github logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-cemeli-aa7451233/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin logo" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="Instagram logo" />
              </a>
              <DarkModeToggle />
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
