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
  ];

  const checkIfCommandAvailable = (command) => {
    return commands.some((c) => c.command === command);
  };

  const execute = (command) => {
    console.log("Executing command:", command);
    switch (command) {
      case "help":
        return commands
          .map((cmd) => `${cmd.command} - ${cmd.description}`)
          .join("\n");
      case "about":
        return "I am Nureddin Farzaliyev. A software developer specializing in Frontend / MERN-Stack web development using technologies like React, Next.js, Node.js, Express, MongoDB etc.";
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
