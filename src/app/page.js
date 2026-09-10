import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";
import Projects from "./components/projects/Projects";
import { TracingBeam } from "./components/ui/tracing-beam";
// import Tracing from "./components/ui/Tracing";
import TimelineComponent from "./components/timeline/TimelineComponent";
import Contact from "./components/contact/Contact";
import Head from "next/head";
import Script from "next/script";
import RealProjects from "./components/realProjects/RealProjects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nureddin Farzaliyev",
    url: "https://farzaliyev.netlify.app",
    sameAs: [
      "https://www.linkedin.com/in/nureddinfarzaliyev",
      "https://www.github.com/nureddinfarzaliyev",
    ],
    knowsAbout: [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Node.js",
      "MongoDB",
      "SQL",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Head>
      <Script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
      <TracingBeam className={`text-white ${textFont.className}`}>
        {/* <div className={`text-white ${textFont.className}`}> */}
        {/* <Tracing /> */}
        <Hero />
        <RealProjects />
        <Projects />
        <TimelineComponent />
        <Contact />
        {/* </div> */}
      </TracingBeam>
    </>
  );
}
