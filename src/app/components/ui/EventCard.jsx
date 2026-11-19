import Skills from "@/app/components/ui/Skills";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ data }) => {
  return (
    <div className="flex max-md:flex-col gap-4 sm:gap-6 relative">
      <div className="rounded-lg overflow-hidden h-fit shrink-0 w-fit max-sm:w-[100px]">
        <Image
          height={150}
          width={150}
          src={data.img}
          alt={`${data.title} logo`}
        />
      </div>
      <div>
        <h3 className="text-lg sm:text-2xl">{data.title}</h3>
        {data.descriptionLink ? (
          <Link href={data.descriptionLink} target="_blank">
            <p className="opacity-80 hover:opacity-100 transition-colors duration-200 underline max-sm:text-sm">
              {data.description}
            </p>
          </Link>
        ) : (
          <p className="opacity-80 max-sm:text-sm">{data.description}</p>
        )}
        {data.highlights && (
          <ul className="list-disc pl-5 mt-2 sm:mt-3">
            {data.highlights?.map((highlight, idx) => (
              <li key={idx} className="opacity-80 text-xs sm:text-sm max-w-lg ">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 sm:mt-3">
          <p className="opacity-80 text-xs sm:text-sm">
            {data.startYear} {data.endYear && "-"} {data.endYear}
          </p>
          <p className="opacity-80 text-xs sm:text-sm mb-4">{data.location}</p>
          <div className="max-w-[500px]">
            <Skills skills={data.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
