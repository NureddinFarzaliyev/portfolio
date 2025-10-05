import { CommandsContext } from "@/app/v2/contexts/CommandsContext";
import { useContext, useState } from "react";

const TerminalInput = () => {
  const [inputColor, setInputColor] = useState("#C22426");
  const [inputValue, setInputValue] = useState("");

  const { execute, setLog, checkIfCommandAvailable, prefix, log } =
    useContext(CommandsContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const logEntry = {
      type: "command",
      value: inputValue,
    };

    const logResponse = {
      type: "response",
      value: execute(inputValue),
    };

    const newLog = [...log, logEntry, logResponse];
    setLog(newLog);

    setInputValue("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);

    const exists = checkIfCommandAvailable(e.target.value);
    if (exists) {
      setInputColor("#4E9A06");
    } else {
      setInputColor("#C22426");
    }
  };

  const focusOnBlur = (e) => {
    e.target.focus();
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex items-center w-full gap-[1ch]"
    >
      <div className="shrink-0">{prefix}</div>
      <div className="w-full">
        <input
          onChange={(e) => onChange(e)}
          style={{ color: inputColor }}
          onBlur={(e) => focusOnBlur(e)}
          value={inputValue}
          autoFocus
          type="text"
          className="outline-none caret-white/50 w-full bg-transparent"
        />
      </div>
    </form>
  );
};

export default TerminalInput;
