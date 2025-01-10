import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
      <header>
        <title>Yueqi_Zhang</title>
      </header>
      <Header />
      <section id="hero" className="snap-start" >
        <Hero />

      </section >
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      <Link href="#hero" passHref>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex justify-center items-center">
            <img src="/momo.png" alt="momo" className="w-10 h-10 animate-pulse" />

          </div>

        </footer>
      </Link>
    </div>
  );
}
