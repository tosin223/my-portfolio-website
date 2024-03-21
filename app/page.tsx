import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivder from "@/components/SectionDivder";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivder />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
