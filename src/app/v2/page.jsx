"use client";
import TerminalInput from "@/app/v2/components/TerminalInput";
import TerminalLog from "@/app/v2/components/TerminalLog";

const page = () => {
  return (
    <div className="text-white bg-[#0F111A] min-h-dvh p-4 font-mono">
      <TerminalLog />
      <TerminalInput />
    </div>
  );
};

export default page;
