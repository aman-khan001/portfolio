import SkillCard from './SkillCard';
import { Stars } from '@react-three/drei';

const skills = [
  {
    skill: 'HTML5',
    description: 'Experienced in crafting semantic and accessible HTML structures.',
    icon: '/textures/html.png', // Updated to use local texture
  },
  {
    skill: 'CSS3',
    description: 'Skilled in styling web applications with modern CSS techniques.',
    icon: '/textures/css.png', // Updated to use local texture
  },
  {
    skill: 'Tailwind CSS',
    description: 'Proficient in using Tailwind CSS for rapid UI development.',
    icon: '/textures/tailwind.png', // Updated to use local texture
  },
  {
    skill: 'JavaScript',
    description: 'Proficient in JavaScript, including ES6+ features.',
    icon: '/textures/js.png', // Updated to use local texture
  },
  {
    skill: 'TypeScript',
    description: 'Experienced in building robust applications with TypeScript.',
    icon: '/textures/typescript.png', // Updated to use local texture
  },
  {
    skill: 'React',
    description: 'Experienced in building dynamic user interfaces with React.',
    icon: '/textures/react.png', // Updated to use local texture
  },
  {
    skill: 'Next.js',
    description: 'Skilled in building server-rendered React applications with Next.js.',
    icon: '/textures/next.png', // Updated to use local texture
  },
  {
    skill: 'MongoDB',
    description: 'Proficient in working with MongoDB for NoSQL database solutions.',
    icon: '/textures/mongo.png', // Updated to use local texture
  },
  {
    skill: 'Node.js',
    description: 'Skilled in server-side development using Node.js.',
    icon: '/textures/node.png', // Updated to use local texture
  },
  {
    skill: 'Python',
    description: 'Experienced in Python for backend development and scripting.',
    icon: '/textures/python.png', // Updated to use local texture
  },
  {
    skill: 'Git & GitHub',
    description: 'Proficient in version control using Git and collaboration on GitHub.',
    icon: '/textures/git.png', // Updated to use local texture
  }
];


export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


