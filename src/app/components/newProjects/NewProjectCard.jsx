import CompanyBadge from "@/app/components/ui/CompanyBadge";
import Skills from "@/app/components/ui/Skills";
import Image from "next/image";

const NewProjectCard = ({ data }) => {
  return (
    <div
      className="bg-[#0a0a0a] hover:bg-[#111] transition-all
      p-2 rounded-lg border border-white/[0.1] w-[400px] cursor-pointer h-full"
    >
      <Image
        src={data.image}
        width={400}
        height={200}
        alt={data.title}
        className="rounded-lg object-cover border border-white/[0.1] aspect-video"
      />
      <div className="mt-2 px-1 pb-2 flex flex-col gap-1">
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="text-sm opacity-80">{data.date}</p>
        <p className="text-sm opacity-80">{data.brief}</p>
        <div className="mt-2 flex gap-2 items-center">
          <Skills skills={data.skills} disableHover />
          <div className="shrink-0">
            <CompanyBadge company={data.company} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
