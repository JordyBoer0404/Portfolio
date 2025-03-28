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
      <Skills />
      <Footer />
    </main>
  );
}
