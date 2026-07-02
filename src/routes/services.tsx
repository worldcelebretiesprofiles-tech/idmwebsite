import { createFileRoute } from "@tanstack/react-router";
import { Services, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Digital Marketing, Web, Apps, AI · IDM Smart Tech" },
      { name: "description", content: "SEO, Google & Meta Ads, websites, mobile apps, CRM, ERP, and AI automation — everything you need to grow, under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero pb-24 pt-40 text-white lg:pt-48">
        <div className="container-page mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">Services</span>
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold sm:text-6xl">Full-stack digital growth.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Strategy, design, engineering, marketing and AI — the entire growth stack, delivered by one senior team.
          </p>
        </div>
      </section>
      <Services />
      <FinalCTA />
    </>
  );
}
