import TerminalHighlighted from "@/app/v2/components/TerminalHighlighted";

const SkillTag = ({ skill }) => (
  <span className="text-xs bg-black/40 text-white/80 px-2 py-1">{skill}</span>
);

const TerminalProjectsList = ({ projectData }) => {
  return (
    <>
      {projectData.map((p) => {
        const link = p.live || p.github || p.youtube || null;

        const Card = (
          <div className="border border-gray-700 p-4 mb-3 mt-1 hover:bg-gray-900/30">
            <TerminalHighlighted text={p.title} />{" "}
            <span className="opacity-50">({p.date})</span>
            <div className="my-1 flex gap-2 flex-wrap">
              {p.skillsImage
                ?.replace("https://skillicons.dev/icons?i=", "")
                ?.split(",")
                ?.map((skill, index) => (
                  <SkillTag skill={skill} key={index} />
                ))}
              {p.skills?.map((skill, index) => (
                <SkillTag skill={skill} key={index} />
              ))}
            </div>
            <p className="opacity-80 text-sm mt-1">{p.description}</p>
          </div>
        );

        if (link) {
          return (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.title}
              className="w-full"
            >
              {Card}
            </a>
          );
        } else {
          return (
            <div className="cursor-pointer" key={p.title}>
              {Card}
            </div>
          );
        }
      })}
    </>
  );
};

export default TerminalProjectsList;
