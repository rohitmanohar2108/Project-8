import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <div className="bg-white/80 dark:bg-black backdrop-blur-sm p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Rohit
        </h1>
        <ThemeToggle />
      </div>
    </div>
  );
}