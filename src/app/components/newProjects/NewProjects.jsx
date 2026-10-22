import NewProjectCardPopup from "@/app/components/newProjects/NewProjectCardPopup";
import { newProjectsData } from "@/app/components/newProjects/newProjectsData";
import SectionHeader from "@/app/components/ui/SectionHeader";

const NewProjects = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-5 lg:px-10 xl:px-20 py-20">
      <SectionHeader text="projects" />
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {newProjectsData.map((data) => (
          <NewProjectCardPopup key={data.title} data={data} />
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
