import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book Your Free Consultation · IDM Smart Tech" },
      { name: "description", content: "Book a free 30-minute growth consultation with a senior strategist at IDM Smart Tech." },
    ],
  }),
  component: () => (
    <>
      <section className="bg-hero pb-16 pt-40 text-white lg:pt-48">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Let's talk growth.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Book a free consultation. Get a plan — even if we don't work together.</p>
        </div>
      </section>
      <ContactSection />
    </>
  ),
});
