import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { profile } from "./data/profile";
import { skills } from "./data/skills";
import { projects } from "./data/projects";
import { experience } from "./data/experience";

export default function App() {
  return (
    <main>
      <Nav />
      <Hero profile={profile} />
      <About />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
