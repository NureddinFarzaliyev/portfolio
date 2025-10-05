import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { useContext } from "react";

const TerminalLog = () => {
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
    <div>
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
    </div>
  );
};

export default TerminalLog;
