import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Vivek Mane</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a
            href="https://github.com/VivekMane57"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-mane-6604a71a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Vivek Mane. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
