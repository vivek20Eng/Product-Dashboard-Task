import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <a
          href="https://github.com/vivek20Eng/Product-Dashboard-Task"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-300 transition-colors duration-300"
        >
          <Github className="mr-2" size={24} />
          <span>View on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;