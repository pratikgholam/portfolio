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
      <section className="section-divider" />
      <About />
      <section className="section-divider" />
      <Experience experience={experience} />
      <section className="section-divider" />
      <Skills skills={skills} />
      <section className="section-divider" />
      <Projects projects={projects} />
      <section className="section-divider" />
      <Contact />
      <section className="section-divider" />
      <Footer />
    </main>
  );
}
