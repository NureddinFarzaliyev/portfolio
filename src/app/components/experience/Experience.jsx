import { experienceData } from "@/app/components/experience/experienceData";
import EventCard from "@/app/components/ui/EventCard";
import SectionHeader from "@/app/components/ui/SectionHeader";

const Experience = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-5 lg:px-10 xl:px-20"
      id="experience"
    >
      <SectionHeader text="experience" />
      <div className="flex flex-col sm:py-20 gap-10 max-sm:w-full">
        {experienceData.map((education, index) => (
          <EventCard key={index} data={education} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
