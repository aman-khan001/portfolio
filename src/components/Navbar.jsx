import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-cyan-400 text-xl font-bold">Aman's Portfolio</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className="block text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}