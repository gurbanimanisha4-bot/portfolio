import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleResumeClick = () => {
    window.open("/Manisha_Gurbani_Resume .pdf", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Left - Name & Title */}
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Manisha Gurbani
          </span>
          <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
            Frontend Developer
          </span>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleResumeClick}
            className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-200"
          >
            Resume
          </button>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;