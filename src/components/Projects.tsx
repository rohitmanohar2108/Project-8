import React from 'react';
import { Github, ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL",
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics using React and D3.js",
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL",
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics using React and D3.js",
    github: "https://github.com",
    live: "https://demo.com",
  }
];

export function Projects() {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-sm font-semibold mb-4 dark:text-white">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden  bg-white dark:bg-zinc-900 border border-gray-300 dark:border dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative p-2"> 
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md" 
              />
             
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-sm px-5 py-2 rounded-md bg-gray-100 dark:bg-zinc-800  hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center  text-sm px-5 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
                >
                  <Globe className="w-4 h-4" />
                  <span className='ml-3'>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
