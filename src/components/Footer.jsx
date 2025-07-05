import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-10 px-6 border border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-xl font-bold text-cyan-400">AMAN KHAN</h2>
        <div className="flex gap-6 text-gray-400 text-xl">
          <a href="#" className="hover:text-cyan-400 transition">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Aman Khan. All rights reserved.
        </p>
        {/* <p className="text-sm text-gray-500">
          Built with <span className="text-red-500">❤</span> using React and Tailwind CSS. 
        </p> */}
      </div>
    </footer>
  );
}