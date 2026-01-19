import Landing from "./components/Landing";
import FilmStrip from "./components/FilmStrip";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/about";
import Contact from "./components/Contact";
import FeaturedWork from "./components/Featuredwork";


export default function Home() {
  return (
    <main>
      <Landing />
      <FilmStrip />
      <Projects />
      <Services />
      <FeaturedWork />
      <About />
      <Contact />
    </main>
  );
}
