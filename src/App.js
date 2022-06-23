import "./App.css";
import Bio from "./Components/Bio";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MyWork from "./Components/MyWork";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Bio />
      <Skills />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
