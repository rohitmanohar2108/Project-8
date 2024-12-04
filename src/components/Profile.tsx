import React from "react";
import { MapPin, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Profile() {
  return (
    <div className="p-4">
      <div className="flex items-start gap-6 font-pt-sans">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-purple-500 dark:ring-purple-400"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Rohit
          </h1>
          <p className="text-gray-900 dark:text-gray-200">
            Full Stack Developer
          </p>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">NITK, Surathkal, KA</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-black dark:text-white">
        I'm a frontend developer focused on creating highly usable and visually
        appealing interfaces. My goal is to simplify complex tasks through
        intuitive, user-centered design.
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="/resume.pdf"
          className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
        >
          Resume
        </a>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com"
            className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
