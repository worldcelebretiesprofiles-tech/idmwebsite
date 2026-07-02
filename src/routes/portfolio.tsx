import { createFileRoute } from "@tanstack/react-router";
import { Portfolio, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Work · IDM Smart Tech" },
      { name: "description", content: "A selection of websites, ads, SEO, branding, software and apps delivered by IDM Smart Tech." },
    ],
  }),
  component: () => (
    <>
      <section className="bg-hero pb-16 pt-40 text-white lg:pt-48">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Selected work.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Real projects, real results — across web, ads, SEO, branding, software and apps.</p>
        </div>
      </section>
      <Portfolio />
      <FinalCTA />
    </>
  ),
});
