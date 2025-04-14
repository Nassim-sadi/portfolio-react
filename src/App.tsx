import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <About />
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
