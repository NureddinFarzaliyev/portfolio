import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { useContext } from "react";

const TerminalLog = () => {
  const { checkIfCommandAvailable, log, prefix } = useContext(CommandsContext);

  return (
    <div>
      {log.map((item, index) => (
        <div
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
          {item.type === "command" && <span>{prefix}</span>} {item.value}
        </div>
      ))}
    </div>
  );
};

export default TerminalLog;
