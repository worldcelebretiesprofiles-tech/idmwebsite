import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  TrustedClients,
  About,
  Industries,
  Services,
  WhyChooseUs,
  Process,
  Portfolio,
  CaseStudies,
  Technologies,
  Testimonials,
  Pricing,
  FAQ,
  BlogPreview,
  ContactSection,
  FinalCTA,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <About />
      <Industries />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <CaseStudies />
      <Technologies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
