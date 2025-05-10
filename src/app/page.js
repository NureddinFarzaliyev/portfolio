import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";
import Projects from "./components/projects/Projects";
import { TracingBeam } from "./components/ui/tracing-beam";
import Tracing from "./components/ui/Tracing";
import TimelineComponent from "./components/timeline/TimelineComponent";
import Contact from "./components/contact/Contact";
import Head from "next/head";
import Script from "next/script";
import RealProjects from "./components/realProjects/RealProjects";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
      </Head>
      <Script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
      <TracingBeam className={`text-white ${textFont.className}`}>
        {/* <div className={`text-white ${textFont.className}`}> */}
        {/* <Tracing /> */}
        <Hero />
        <Projects />
        <RealProjects />
        <TimelineComponent />
        <Contact />
        {/* </div> */}
      </TracingBeam>
    </>
  );
}
