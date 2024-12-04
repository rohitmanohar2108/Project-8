import React from 'react';

const experiences = [
  {
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=100&h=100&fit=crop",
    company: "Google",
    position: "Senior Frontend Developer",
    year: "2022-Present"
  },
  {
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=100&h=100&fit=crop",
    company: "Meta",
    position: "Frontend Developer",
    year: "2020-2022"
  }
];

export function Experience() {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="flex gap-4 items-center">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/20"
              />
              <div>
                <h3 className="font-medium text-base dark:text-white">{exp.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{exp.position}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}