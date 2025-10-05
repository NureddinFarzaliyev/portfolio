import TerminalHighlighted from "@/app/v2/components/TerminalHighlighted";
import TerminalLink from "@/app/v2/components/TerminalLink";

export const getResponseText = (command) => {
  switch (command) {
    case "about":
      return (
        <>
          I am Nureddin Farzaliyev. A software developer specializing in
          Frontend / MERN-Stack web development using technologies like React,
          Next.js, Node.js, Express, MongoDB etc.
        </>
      );
    case "exp":
      return (
        <>
          <p>
            1. <TerminalHighlighted text="Full-Stack (MERN) Developer" /> at
            <TerminalLink
              className="mx-[1ch]"
              href="https://webluna.org/"
              text="Webluna Software"
            />
            (2025 Feb - Present)
          </p>
          <p>
            2. <TerminalHighlighted text="Instructor" /> for Frontend & Node.js
            at{" "}
            <TerminalLink
              className="mx-[1ch]"
              href="https://matrixacademy.edu.az/"
              text="Matrix Academy"
            />
            (2025 Mar - Present)
          </p>
          <p>
            3. <TerminalHighlighted text="Frontend Developer" /> as Freelance
            Dev at global companies (2025 - Present)
          </p>
        </>
      );
    case "edu":
      return (
        <>
          <p>1. Self-Taught Web Development (2018 - Present) </p>
          <p>
            2. Frontend Web Development Course,{" "}
            <TerminalLink
              href="https://matrixacademy.edu.az/"
              text="Matrix Academy"
            />{" "}
            (2024)
          </p>
          <p>
            3. Bachelor's Degree at Computer Engineering,{" "}
            <TerminalLink href="https://unec.edu.az/" text="UNEC" /> (2024-2028)
          </p>
        </>
      );
    case "skills":
      return (
        <>
          <p>
            - <TerminalHighlighted text="Frontend:" /> HTML, CSS, TailwindCSS,
            Bootstrap, JavaScript, Typescript, React, Next.js, Redux Toolkit,
            Zustand, Supabase etc.
          </p>
          <p>
            - <TerminalHighlighted text="Backend:" /> Node.js, Express.js,
            MongoDB, RESTful APIS
          </p>
          <p>
            - <TerminalHighlighted text="Tools:" />: Git, Linux, Figma
          </p>
        </>
      );
    default:
      return `Command not found: ${command}`;
  }
};
