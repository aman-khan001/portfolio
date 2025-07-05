import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import StarBackground from "./components/StarBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="relative text-white bg-black/95">
      <Navbar />
      <section id="home" className="relative">
        <Hero />
      </section>

      <section id="about" className="relative py-20">
        <About />
      </section>
      <section id="skills" className="relative py-20">
        <Skills />
      </section>
      <section id="projects" className="relative py-20">
        <Projects />
      </section>
      <section id="resume" className="relative py-20">
        <Resume />
      </section>
      <section id="contact" className="relative py-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
