import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, image, link, github}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-[rgb(26,26,26)] text-white p-6 rounded-2xl shadow-lg  cursor-pointer w-full mx-auto  h-auto flex flex-col items-center justify-center hover:shadow-cyan-500/50"
      >
        <img src={image} alt={`${title} screenshot`} className="w-full h-32 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">
          {description}
        </p>
        <p className="text-gray-400 mb-4">
          <strong>Tech Stack:</strong> {tech.join(', ')}
        </p>
        <div className="flex space-x-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              GitHub
            </a>
          )}
        </div>

      </motion.div>
  )
}