import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionEyebrow } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IDM Smart Tech — Senior Digital Growth Team" },
      { name: "description", content: "Meet the senior team behind IDM Smart Tech — strategists, designers, and engineers who treat your growth like our own." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero pb-24 pt-40 text-white lg:pt-48">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">About</span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold sm:text-6xl">A growth partner, not a vendor.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              IDM Smart Tech is a full-service digital marketing and technology agency helping ambitious brands turn strategy, design, engineering and AI into predictable growth.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 lg:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionEyebrow>Our story</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">Built by senior operators.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We started IDM Smart Tech because too many businesses were paying for activity instead of outcomes. We combine seasoned strategists with in-house design, engineering and AI to ship work that moves the needle.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Mission", d: "Make growth predictable for ambitious brands." },
                { t: "Vision", d: "The most trusted growth partner for modern businesses." },
                { t: "Values", d: "Ownership, craft, transparency, momentum." },
                { t: "Approach", d: "Strategy first. Ship fast. Measure everything." },
              ].map((it) => (
                <div key={it.t} className="rounded-2xl border border-black/5 bg-surface p-6 shadow-elegant">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">{it.t}</p>
                  <p className="mt-3 text-navy-deep">{it.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
