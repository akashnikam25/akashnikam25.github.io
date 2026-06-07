import About from "@/components/About";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import RevealObserver from "@/components/RevealObserver";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
