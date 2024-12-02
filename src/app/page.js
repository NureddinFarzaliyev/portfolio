import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className={`text-white ${textFont.className}`}>
      <Hero/>
      <Projects/>
    </div>
  );
}
