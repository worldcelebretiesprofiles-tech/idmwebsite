import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  TrustedClients,
  About,
  Industries,
  Services,
  WhyChooseUs,
  Process,
  Technologies,
  Testimonials,
  ExpertTeam,
  FAQ,
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
      <ExpertTeam />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
