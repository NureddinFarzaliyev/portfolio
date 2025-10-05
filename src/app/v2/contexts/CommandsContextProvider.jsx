"use client";

import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { useState } from "react";

const CommandsContextProvider = ({ children }) => {
  const initalLog = [
    {
      type: "response",
      value: ``,
    },
    {
      type: "response",
      value:
        "Welcome to my terminal. \n Type 'help' to see a list of available commands. \n",
    },
  ];
  const [log, setLog] = useState(initalLog);

  const prefix = <span className="text-blue-500">nureddin@farzaliyev ~</span>;

  const commands = [
    { command: "help", description: "List all available commands" },
    { command: "about", description: "Learn more about me" },
    { command: "exp", description: "View my work experience" },
    { command: "experience", description: "View my work experience" },
    { command: "edu", description: "View my educational background" },
    { command: "education", description: "View my educational background" },
    { command: "skills", description: "List my technical skills" },
  ];

  const checkIfCommandAvailable = (command) => {
    return commands.some((c) => c.command === command);
  };

  const execute = (command) => {
    switch (command) {
      case "help":
        return commands
          .map((cmd) => `${cmd.command} - ${cmd.description}`)
          .join("\n");
      case "about":
        return "I am Nureddin Farzaliyev. A software developer specializing in Frontend / MERN-Stack web development using technologies like React, Next.js, Node.js, Express, MongoDB etc.";
      case "exp":
      case "experience":
        return `1. Full-Stack (MERN) Developer at Webluna Software (2025 Feb - Present)
2. Instructor for Frontend & Node.js at Matrix Academy (2025 Mar - Present)
3. Frontend Developer as Freelance Dev at global companies (2025 - Present)`;
      case "edu":
      case "education":
        return `1. Self-Taught Web Development (2018 - Present) 
2. Frontend Web Development Course, Matrix Academy (2024)
3. Bachelor's Degree at Computer Engineering (2024-2028)`;
      case "skills":
        return `- Frontend: HTML, CSS, TailwindCSS, Bootstrap, JavaScript, Typescript, React, Next.js, Redux Toolkit, Zustand, Supabase etc.
- Backend: Node.js, Express.js, MongoDB, RESTful APIS
- Tools: Git, Linux, Figma`;
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <CommandsContext.Provider
      value={{
        execute,
        setLog,
        checkIfCommandAvailable,
        prefix,
        log,
      }}
    >
      {children}
    </CommandsContext.Provider>
  );
};

export default CommandsContextProvider;
