import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-yellow-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my skills and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="animate-on-scroll"
              style={{ 
                animationDelay: `${index * 150}ms`,
                ...(index % 2 === 0 ? { animationName: 'slide-in-left' } : { animationName: 'slide-in-right' })
              }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;