import "./App.scss";
import Header from "./components/header/header";
import About from "./components/about/about";
import Technos from "./components/technos/technos";
import Skills from "./components/skills/skills"
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact"

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">  
        <About />
        <div className="skills-and-technos">
          <Technos />
          <Skills />
        </div>
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  );
};

export default App;
