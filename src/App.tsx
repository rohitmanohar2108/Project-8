import React from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { TechStack } from "./components/TechStack";
import { Education } from "./components/Education";

import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100">
      <div className="max-w-[36%] mx-auto">
        <Header />
        <Profile />
        <TechStack />
        <Projects />
        <Education />

       
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
