"use client";
import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { getResponseText } from "@/app/v2/utils/getResponseText";
import { useState } from "react";

const CommandsContextProvider = ({ children }) => {
  const initalLog = [
    {
      type: "response",
      value: (
        <div className="mt-2 mb-4">
          <p>Welcome to my terminal.</p>
          <p>Type 'help' to see a list of available commands.</p>
        </div>
      ),
    },
  ];
  const [log, setLog] = useState(initalLog);
  const prefix = <span className="text-blue-500">nureddin@farzaliyev ~</span>;

  const commands = [
    { command: "help", description: "List all available commands" },
    { command: "about", description: "Learn more about me" },
    { command: "clear", description: "Clear the terminal screen" },
    { command: "exp", description: "View my work experience" },
    { command: "edu", description: "View my educational background" },
    { command: "skills", description: "List my technical skills" },
    { command: "projects", description: "See all my projects" },
    { command: "projects -r", description: "See my real-world projects" },
    { command: "projects -p", description: "See my personal projects" },
  ];

  const checkIfCommandAvailable = (command) => {
    return commands.some((c) => c.command === command);
  };

  const getResponse = (command) => {
    switch (command) {
      case "help":
        return commands.map((cmd) => (
          <p key={cmd.command}>
            {cmd.command} - {cmd.description}
          </p>
        ));
      case "clear":
        setLog(initalLog);
        return;
      default:
        return getResponseText(command);
    }
  };

  const execute = (command) => {
    const response = getResponse(command);
    if (!response) return;

    const logEntry = {
      type: "command",
      value: command,
    };
    const logResponse = {
      type: "response",
      value: getResponse(command),
    };

    const newLog = [...log, logEntry, logResponse];
    setLog(newLog);
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
