import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Projects from "./components/Projects/projects";
import Footer from  "./components/Footer/footer"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Footer/>
    </div>
  );
}

export default App;
