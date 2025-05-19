import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div className="main_container">
        <Element name="/">
          <Navbar />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Main />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </>
  );
}

export default App;
