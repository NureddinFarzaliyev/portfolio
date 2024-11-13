import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";

export default function Home() {
  return (
    <div className={`text-white ${textFont.className}`}>
      <Hero/>
    </div>
  );
}
