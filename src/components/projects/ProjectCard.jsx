export function ProjectCards() {
    const projects = [
      {
        title: "Project 1",
        description: "A full-stack web application built with React and Node.js.",
        image: "/imgs/projects/project1.jpg",
        techStack: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/ianmiranda/project1",
        liveLink: "https://project1.com"
      },
      {
        title: "Project 2",
        description: "A mobile app developed with React Native and Firebase.",
        image: "/imgs/projects/project2.jpg",
        techStack: ["React Native", "Firebase"],
        githubLink: "https://github.com/ianmiranda/project2",
        liveLink: "https://project2.com"
      },
      {
        title: "Project 3",
        description: "An e-commerce platform created with Django and PostgreSQL.",
        image: "/imgs/projects/project3.jpg",
        techStack: ["Django", "PostgreSQL", "Stripe"],
        githubLink: "https://github.com/ianmiranda/project3",
        liveLink: "https://project3.com"
      }
    ];
  
    return (
      <div className="">
        <h2 className="text-center text-3xl font-bold mb-10 text-white px-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
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
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  