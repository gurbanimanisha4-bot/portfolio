import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gurbanimanisha12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const infoCards = [
    {
      icon: <MdEmail size={28} className="text-violet-400" />,
      label: "Email",
      value: "gurbanimanisha12@gmail.com",
      href: "mailto:gurbanimanisha12@gmail.com",
    },
    {
      icon: <MdPhone size={28} className="text-violet-400" />,
      label: "Phone",
      value: "+91-9370141479",
      href: "tel:+919370141479",
    },
    {
      icon: <FaLinkedin size={28} className="text-violet-400" />,
      label: "LinkedIn",
      value: "manisha-gurbani",
      href: "https://linkedin.com/in/manisha-gurbani-827206210",
    },
    {
      icon: <FaGithub size={28} className="text-violet-400" />,
      label: "GitHub",
      value: "gurbanimanisha4-bot",
      href: "https://github.com/gurbanimanisha4-bot",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed">
            I am currently open to frontend developer opportunities.
            Feel free to reach out!
          </p>
        </div>

        {/* CTA Block */}
        <div className="bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 rounded-2xl p-8 text-center mb-8">
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Let's Work Together 🚀
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Open for full-time, part-time and freelance frontend roles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="mailto:gurbanimanisha12@gmail.com"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Send me an Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 border border-violet-400 dark:border-violet-600 text-violet-600 dark:text-violet-400 font-semibold rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900 transition-colors duration-200"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {infoCards.map((card) => (
            <a 
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md transition-all duration-200"
            >
              {card.icon}
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                {card.label}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 w-full text-center truncate">
                {card.value}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;