import React from "react";
import { portfolio } from "../data/portfolio";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">What I have built</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                
                 <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                >
                  GitHub
                </a>
                
                  <a href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;