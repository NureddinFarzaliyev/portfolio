import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";
import Projects from "./components/projects/Projects";
import { TracingBeam } from "./components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam className={`text-white ${textFont.className}`}>
      <Hero/>
      <Projects/>
    </TracingBeam>
  );
}
