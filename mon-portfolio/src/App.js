import "./App.scss";
import Header from "./components/header/header";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Section from "./components/section/section";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <div></div>
    </div>
  );
};

export default App;
