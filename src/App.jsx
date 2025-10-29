import Header from "./assets/js/Header";
import Home from "./assets/js/Home";
import Expertise from "./assets/js/Expertise";
import Projects from "./assets/js/Projects";
import Experience from "./assets/js/Experience";
import Contact from "./assets/js/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="section-divider"></div>
        <Expertise />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Contact />
      </main>
    </>
  );
}
