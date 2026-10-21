import Hero from "./components/hero/Hero";
import { textFont } from "./utils/FontProvider";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Head from "next/head";
import Script from "next/script";
import RealProjects from "./components/realProjects/RealProjects";
import Education from "@/app/components/education/Education";
import Experience from "@/app/components/experience/Experience";

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
      <div className={`text-white ${textFont.className}`}>
        <Hero />
        <RealProjects />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
