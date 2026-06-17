import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/EmailMe'
function App() {
  return (
    <div
      className="min-h-screen bg-[#080c14]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App