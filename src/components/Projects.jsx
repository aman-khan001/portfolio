import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: 'BrandStore (E-commerce)',
    description: 'A full-stack e-commerce application with user authentication, product management, and a shopping cart.',
    tech: ['React', 'Tailwind', 'Context', 'API', 'Node.js', 'Express', 'MongoDB'],
    image: '/textures/brandstore.png',
    link: 'https://ayyamshah.github.io/brandstore/',
    github: '#',
  },

  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my skills, projects, and experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    image: '/textures/portfolio.png',
    link: 'https://ayyamshah.github.io/portfolio/',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}