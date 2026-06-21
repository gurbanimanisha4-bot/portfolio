import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900">

      <p className="text-violet-600 dark:text-violet-400 font-medium text-lg mb-2">
         Hey there!
      </p>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        I'm a <span className="text-violet-600 dark:text-violet-400">Frontend Developer</span>
      </h1>

      <p className="max-w-2xl text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
        I build{" "}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">fast, responsive, and user-friendly</span>{" "}
        web applications using{" "}
        <span className="font-semibold text-gray-900 dark:text-white">React.js and TypeScript</span>.
        With{" "}
        <span className="font-semibold text-gray-900 dark:text-white">3 deployed real-world projects</span>{" "}
        including a Crypto Dashboard, E-commerce App, and Weather App — all with live API integration —
        I bring production-level thinking to every line of code.
      </p>

      <div className="flex gap-10 mb-10">
        <div className="text-center">
          <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">3+</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Live Projects</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">5+</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Technologies</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">MCA</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Graduate</p>
        </div>
      </div>

      <div className="flex gap-4">
        
          <a href="#projects"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          View My Projects
        </a>
        
          <a href="mailto:gurbanimanisha12@gmail.com"
          className="px-6 py-3 border border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors duration-200"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default About;