import "./App.css";
import Bio from "./Components/Bio";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Bio />
    </div>
  );
}

export default App;
