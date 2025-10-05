import CommandsContextProvider from "@/app/v2/contexts/CommandsContextProvider";

const layout = ({ children }) => {
  return <CommandsContextProvider>{children}</CommandsContextProvider>;
};

export default layout;
