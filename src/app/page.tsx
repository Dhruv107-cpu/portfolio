import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { StatsSection } from "@/components/StatsSection";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsSection />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
