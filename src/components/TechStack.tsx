import React from 'react';
import { ScrollArea } from './ScrollArea';
import {  FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'; // React
import { FaNodeJs } from 'react-icons/fa'; // Node.js
import { SiJavascript, SiTypescript } from 'react-icons/si'; // TypeScript
import { SiNextdotjs } from 'react-icons/si'; // Next.js
import { SiTailwindcss } from 'react-icons/si'; // TailwindCSS
import { SiPostgresql } from 'react-icons/si'; // PostgreSQL
import { FaC } from 'react-icons/fa6';


const technologies = [
  {
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
  },
  {
    name: 'C',
    icon: <FaC />,
  },
  {
    name: 'React',
    icon: <FaC />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
];

export function TechStack() {
  return (
    <div className="mt-8">
      <h2 className="text-sm font-semibold mb-1 px-4 dark:text-white">Tech Stack</h2>
      <ScrollArea className="flex gap-0.5 pb-4"> 
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-2  min-w-[80px]"  
          >
            <span className="text-3xl mb-1">{tech.icon}</span> 
            <span className="text-sm dark:text-white">{tech.name}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
