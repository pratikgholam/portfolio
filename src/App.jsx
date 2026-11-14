import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { profile } from "./data/profile";
import { experience } from "./data/experience";
import { projects } from "./data/projects";

export default function App() {
  return (
    <main>
      <Nav />
      <Hero profile={profile} />
      <Experience experience={experience} />
      <Projects projects={projects} />
    </main>
  );
}
