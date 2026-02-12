import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase"; // 1. Importe aqui
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Showcase /> {/* 2. Adicione aqui */}
      <Modules />
      <Pricing />
      <Roadmap />
      <Contact />
    </main>
  );
}