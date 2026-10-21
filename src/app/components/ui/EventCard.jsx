import Skills from "@/app/components/ui/Skills";
import Image from "next/image";

const EventCard = ({ data }) => {
  return (
    <div className="flex max-md:flex-col gap-6 relative">
      <div className="rounded-lg overflow-hidden h-fit shrink-0">
        <Image
          height={150}
          width={150}
          src={data.img}
          alt={`${data.title} logo`}
        />
      </div>
      <div>
        <h3 className="text-2xl">{data.title}</h3>
        <p className="opacity-80">{data.description}</p>
        {data.highlights && (
          <ul className="list-disc pl-5 mt-3">
            {data.highlights?.map((highlight, idx) => (
              <li key={idx} className="opacity-80 text-sm max-w-lg">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3">
          <p className="opacity-80 text-sm">
            {data.startYear} - {data.endYear}
          </p>
          <p className="opacity-80 text-sm mb-4">{data.location}</p>
          <div className="max-w-[500px]">
            <Skills skills={data.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
