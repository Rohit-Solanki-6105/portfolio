import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import BG from "./components/BG";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* <SplashCursor /> */}
      <Nav />
      <BG />
      <div className="w-full h-screen z-50">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
