import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Growth Stories · IDM Smart Tech" },
      { name: "description", content: "Deep-dive case studies with real metrics — traffic, leads, revenue, ROI." },
    ],
  }),
  component: () => (
    <>
      <section className="bg-hero pb-16 pt-40 text-white lg:pt-48">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Case studies.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Problem → strategy → execution → results. Real numbers, real stories.</p>
        </div>
      </section>
      <CaseStudies />
      <FinalCTA />
    </>
  ),
});
