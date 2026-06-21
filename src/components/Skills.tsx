import React from "react";
import { FaCode, FaPaintBrush, FaCog, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    category: "Languages",
    icon: <FaCode size={18} className="text-violet-400" />,
    skills: [
      { name: "JavaScript", level: "Proficient" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    icon: <FaPaintBrush size={18} className="text-violet-400" />,
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    category: "State Management",
    icon: <FaCog size={18} className="text-violet-400" />,
    skills: [
      { name: "Redux Toolkit", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Others",
    icon: <FaTools size={18} className="text-violet-400" />,
    skills: [
      { name: "REST APIs", level: "Proficient" },
      { name: "Chart.js", level: "Intermediate" },
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
    ],
  },
];

const levelColor: Record<string, string> = {
  Proficient: "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
  Intermediate: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Beginner: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
};

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">What I work with</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{cat.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[skill.level]}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-500"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Beginner</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;