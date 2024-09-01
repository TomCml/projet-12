import "./App.scss";
import Header from "./components/header/header";
import Projects from "./pages/projects/projects";
import Section from "./components/section/section";
import About from "./components/about/about";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div></div>
    </div>
  );
};

export default App;
