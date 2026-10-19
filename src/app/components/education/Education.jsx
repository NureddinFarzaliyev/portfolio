import { educationData } from "@/app/components/education/educationData";
import EventCard from "@/app/components/ui/EventCard";
import SectionHeader from "@/app/components/ui/SectionHeader";

const Education = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-5 lg:px-10 xl:px-20">
      <SectionHeader text="Education & Certifications" />
      <div className="flex flex-col py-20 gap-10">
        {educationData.map((education, index) => (
          <EventCard key={index} data={education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
