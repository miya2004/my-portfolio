import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/about";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Landing />
      <Projects />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
