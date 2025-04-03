import Educations from "@/components/educations";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="px-8 md:px-32">
      <Navbar />
      <Profile />
      <Projects />
      <div className="bg-background rounded-2xl px-6 ring-1 ring-c2/50">
        <Skills />
        <Educations />
      </div>
      <Footer />
    </main>
  );
}
