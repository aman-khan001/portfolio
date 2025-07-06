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
      className="relative text-white bg-black/95"
    >
      <CursorTrail />
      <Navbar />
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home" 
        className="relative"
      >
        <Hero />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="about" 
        className="relative py-20"
      >
        <About />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="skills" 
        className="relative py-20"
      >
        <Skills />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="projects" 
        className="relative py-20"
      >
        <Projects />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="resume" 
        className="relative py-20"
      >
        <Resume />
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="contact" 
        className="relative py-30"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/universe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Contact />
      </motion.section>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default App;
