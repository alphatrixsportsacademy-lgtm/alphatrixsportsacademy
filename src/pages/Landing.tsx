import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Essentials } from "@/components/landing/Essentials";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { ForYou } from "@/components/landing/ForYou";
import { Founder } from "@/components/landing/Founder";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { Welcome } from "@/components/landing/Welcome";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Welcome />
        <Essentials />

        <ForYou />

        <Testimonials />
        <Founder />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}