import { activitiesData } from "@/app/components/activities/activitiesData";
import EventCard from "@/app/components/ui/EventCard";
import SectionHeader from "@/app/components/ui/SectionHeader";

const Activities = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-5 lg:px-10 xl:px-20">
      <SectionHeader text="social activities" />
      <div className="flex flex-col py-20 gap-10">
        {activitiesData.map((act, index) => (
          <EventCard key={index} data={act} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
