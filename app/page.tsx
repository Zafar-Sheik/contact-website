"use client";

import CloudBackupSection from "./components/CloudBackUpSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Introduction from "./components/Intro";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#002552] via-[#001a3a] to-[#006bf0]">
        <Hero />
        <WhatWeDo />
        <SolutionSection />
        <ServicesSection />
        <CloudBackupSection />
      </div>
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
