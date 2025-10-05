"use client";

import TerminalInput from "@/app/v2/components/TerminalInput";
import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { useContext } from "react";

const page = () => {
  const { checkIfCommandAvailable, log, prefix } = useContext(CommandsContext);

  const parseTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="text-white bg-[#0F111A] min-h-dvh p-4 font-mono">
      {log.map((item, index) => (
        <p
          key={index}
          style={{
            color:
              item.type === "command" && checkIfCommandAvailable(item.value)
                ? "#4E9A06"
                : item.type === "command"
                  ? "#C22426"
                  : "white",
          }}
        >
          {item.type === "command" && <span>{prefix}</span>}{" "}
          {parseTextWithLineBreaks(item.value)}
        </p>
      ))}
      <TerminalInput />
    </div>
  );
};

export default page;
