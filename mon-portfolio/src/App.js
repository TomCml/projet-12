import "./App.scss";
import Header from "./components/header/header";
import Projects from "./pages/projects/projects";
import Section from "./components/section/section";
import About from "./components/about/about";
import SkillCard from "./components/skillcard/skillcard";
import Skills from "./components/skills/skills";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <div></div>
    </div>
  );
};

export default App;
