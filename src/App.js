import "./App.css";
import Bio from "./Components/Bio";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Bio>
        <Skills />
      </Bio>
    </div>
  );
}

export default App;
