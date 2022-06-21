import "./App.css";
import Bio from "./Components/Bio";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MyWork from "./Components/MyWork";
import Skills from "./Components/Skills";
import Spacer from "./Components/Spacer";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Bio>
        <Skills />
      </Bio>
      <Spacer />
      <MyWork />
    </div>
  );
}

export default App;
