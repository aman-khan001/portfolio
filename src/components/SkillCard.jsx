import { motion } from "framer-motion";

export default function SkillCard({ skill, description, icon }) {
  return (
    <motion.div
      whileHover={{ rotateX: 10, rotateY: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg cursor-pointer w-50 h-55 mx-auto  flex flex-col items-center justify-center hover:shadow-cyan-500/50"
    
      // className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4">
        <img src={icon} alt={`${skill} icon`} className="w-12 h-12 mr-4" />
        <h3 className="text-xl font-semibold text-cyan-400">{skill}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}