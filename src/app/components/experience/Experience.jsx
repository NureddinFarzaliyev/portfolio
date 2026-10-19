import { experienceData } from "@/app/components/experience/experienceData";
import EventCard from "@/app/components/ui/EventCard";
import SectionHeader from "@/app/components/ui/SectionHeader";

const Experience = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-5 lg:px-10 xl:px-20">
      <SectionHeader text="experience" />
      <div className="flex flex-col py-20 gap-10">
        {experienceData.map((education, index) => (
          <EventCard key={index} data={education} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
