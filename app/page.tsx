import Introduction from "@/components/Introduction";

// import About from "@/components/About";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-4">
      <Introduction />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
