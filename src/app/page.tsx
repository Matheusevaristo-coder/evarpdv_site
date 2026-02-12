import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <Roadmap />
      <Contact />
    </main>
  );
}
