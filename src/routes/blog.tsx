import { createFileRoute } from "@tanstack/react-router";
import { BlogPreview } from "@/components/site/sections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Growth Playbooks & Ideas · IDM Smart Tech" },
      { name: "description", content: "Playbooks, teardowns and ideas on SEO, paid media, web, apps and AI automation." },
    ],
  }),
  component: () => (
    <>
      <section className="bg-hero pb-16 pt-40 text-white lg:pt-48">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">From the blog.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Ideas, teardowns and playbooks from the IDM team.</p>
        </div>
      </section>
      <BlogPreview />
    </>
  ),
});
