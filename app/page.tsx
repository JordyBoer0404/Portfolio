import Educations from "@/components/educations";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="w-full">
      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <Navbar />
        <Hero />
        <Projects />
        <div className="bg-card rounded-2xl px-6 border my-8 lg:my-16">
          <Skills />
          <Experiences />
          <Educations />
        </div>
        <Footer />
      </div>
    </main>
  );
}
