import { useProjects } from "../../hooks/useProjects";

export function ProjectCards() {
  const { projects } = useProjects(); 

  return (
    <div className="px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-10 text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col">
            <div className="relative w-full h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow mt-4">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}
