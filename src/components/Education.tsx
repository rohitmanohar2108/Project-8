import React from 'react';

const education = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOOq1SFXasPPmIeMubra9PYvPcM0eygEam6ldJ-23erlgj0d4WjqXwtZ5cOMTlnyPPDI&usqp=CAU",
    school: "NITK, Surathkal",
    degree: "Bachelor's in Computer Science",
    year: "2022-present"
  },
  {
    logo: "https://www.dharampethscience.com/wp-content/uploads/2022/03/dp-logo.png",
    school: "Dharampeth Science Collage",
    degree: "Secondary Education",
    year: "2020-2022"
  }
];

export function Education() {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-sm font-semibold mb-1 dark:text-white">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/50 dark:bg-black backdrop-blur-sm">
            <div className="flex gap-4 items-center">
              <img
                src={edu.logo}
                alt={edu.school}
                className="w-13 h-12 object-cover"
              />
              <div>
                <h3 className="font-medium text-base dark:text-white">{edu.school}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{edu.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}