import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left - Name */}
        <div>
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            Manisha Gurbani
          </p>
          <p className="text-xs text-violet-600 dark:text-violet-400">
            Frontend Developer
          </p>
        </div>

        {/* Center - Copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © {currentYear} Manisha Gurbani. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex items-center gap-4">
          
          <a  href="https://github.com/gurbanimanisha4-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
          >
            GitHub
          </a>
          
            <a href="https://linkedin.com/in/manisha-gurbani-827206210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          
           <a href="mailto:gurbanimanisha12@gmail.com"
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;