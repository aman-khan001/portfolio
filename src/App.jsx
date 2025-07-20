import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CursorTrail from "./components/CursorTrail";



const App = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative text-white bg-gradient-to-br from-gray-900 to-black"
    >
      <CursorTrail />
      <Navbar />
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="home" 
        className="relative"
      >
        <Hero />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="about" 
        className="relative py-20"
      >
        <About />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="skills" 
        className="relative py-20"
      >
        <Skills />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="projects" 
        className="relative py-20"
      >
        <Projects />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="resume" 
        className="relative py-20"
      >
        <Resume />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="contact" 
        className="relative py-30"
      >
        <Contact />
      </motion.section>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default App;
