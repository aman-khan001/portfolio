import { motion } from "framer-motion";

export default function Resume(){
  return (
    <section id="resume" className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">My Resume & Experience</h2>
      <motion.a
        href="/Resume-AmanKhan.pdf"
        download
        className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
      <div className="mt-16 max-w-3xl mx-auto space-y-8">
        <motion.div 
          className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-cyan-700 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-2">
            Frontend Developer
          </h3>
          <p className="text-xl font-bold text-cyan-300 mb-2">
            Freelance | 2024 - Present
          </p>
          <p className="text-gray-400">
            - Developed responsive and interactive web applications using React, Tailwind CSS, and Framer Motion.
            <br />
            - Collaborated with clients to understand requirements and deliver high-quality solutions.
            <br />
            - Implemented best practices for performance optimization and accessibility.
          </p>
        </motion.div>
        <motion.div
          className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-cyan-700 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">
            Full Stack Developer 
          </h3>
          <p className="text-xl font-bold text-cyan-300 mb-2">
            Personal Projects & Coaching | 2023 - Present
          </p>
          <p className="text-gray-400">
            - Built full-stack applications using Node.js, Express, and MongoDB.
            <br />
            - Created RESTful APIs and integrated them with frontend frameworks.
            <br />
            - Mentored aspiring developers through coding challenges and project reviews.
          </p>
          </motion.div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto space-y-8">
        
        <motion.div
          className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-cyan-700 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">
            Certifications
          </h3>
          <p className="text-gray-400">
            - Full Stack Web Development Certification | Online Course | 2023
            <br />
            - JavaScript Algorithms and Data Structures | FreeCodeCamp | 2022
          </p>
        </motion.div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
        <a href="#contact" className="bg-cyan-600 text-black hover:bg-cyan-400 font-bold px-6 py-3 rounded-lg transition">
          Hire Me 
        </a>


      </div>
    </section>
  )
}