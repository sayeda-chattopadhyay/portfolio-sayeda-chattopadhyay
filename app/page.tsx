import Introduction from "@/components/introduction";

import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
