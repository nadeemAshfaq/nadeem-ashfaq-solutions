import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Services } from "./services";
import { Skills } from "./skills";

export function PortfolioPage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
