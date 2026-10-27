import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile } from "./data/profile";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

export default function App() {
  return (
    <main>
      <Hero profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
