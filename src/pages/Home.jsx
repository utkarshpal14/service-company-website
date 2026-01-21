import Hero from "../sections/Hero";
import PageWrapper from "../components/PageWrapper";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import CTA from "../sections/CTA"; 
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Hero />
        {/* <AboutSection />
        <ServicesSection />
        <CTA />
        <ContactSection /> */}
      </PageWrapper>
    </>
  );
}
