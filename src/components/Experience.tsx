
import { portfolio } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">My Journey</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>

          {portfolio.experience.map((exp) => (
            <div
              key={exp.company}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-200"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5">▸</span>
                  Identified and developed new business opportunities to support company growth.
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5">▸</span>
                  Managed client communication and maintained long-term professional relationships.
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5">▸</span>
                  Collaborated with technical teams to ensure client requirements were met.
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Experience;