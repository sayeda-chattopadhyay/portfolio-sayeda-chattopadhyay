import Introduction from "@/components/introduction";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills/>
    </main>
  );
}
