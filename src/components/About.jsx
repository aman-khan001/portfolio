import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-cyan-400 mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg  max-w-2xl mx-auto text-center"
        >
          Hi, I'm <span className="text-cyan-400 font-semibold">Aman</span>  — a full stack web developer who turns ideas into clean, functional websites. I specialize in MERN, Python, and responsive design. I love writing code that solves real-world problems and learning something new every day.
        </motion.p>
      </div>
    </section>
  )
}