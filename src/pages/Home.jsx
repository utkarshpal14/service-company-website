import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import CTA from "../sections/CTA"; 
import ContactSection from "../sections/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTA />
      <ContactSection />
    </>
  );
}
