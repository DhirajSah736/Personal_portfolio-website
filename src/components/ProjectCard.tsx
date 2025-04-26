import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 group h-full">
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-700">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-sm"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 flex items-center gap-1 text-sm"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;