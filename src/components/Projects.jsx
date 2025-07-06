import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: 'App Portal',
    description: 'A full-stack e-commerce application with user authentication, product management, and a shopping cart.',
    tech: ['React', 'Tailwind', 'Context', 'API', 'Node.js', 'Express', 'MongoDB'],
    image: '/projects/app-portal.png',
    link: 'https://preview.codecanyon.net/item/app-portal/full_screen_preview/25416622?_ga=2.175890853.608313247.1751798438-682056470.1751798438',
    github: 'https://github.com/aman-khan001/app-portal',
  },

  {
    title: 'Eventic - Ticket Sales and Event Management System',
    description: 'My personal portfolio website showcasing my skills, projects, and experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    image: '/projects/eventica.png',
    link: 'https://preview.codecanyon.net/item/eventic-ticket-sales-and-event-management-system/full_screen_preview/29734714?_ga=2.70500631.608313247.1751798438-682056470.1751798438',
    github: 'https://github.com/aman-khan001',
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