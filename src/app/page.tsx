"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Advantage from "@/components/Advantage";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <TechMarquee />
      <About />
      <Services />
      <Portfolio />
      <Advantage />
      <Pricing />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
