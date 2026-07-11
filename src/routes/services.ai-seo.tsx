import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { aiSeoData } from "@/data/services/ai-seo";

export const Route = createFileRoute("/services/ai-seo")({
  head: () => ({
    meta: [
      { title: aiSeoData.seo.title },
      { name: "description", content: aiSeoData.seo.description },
      { name: "keywords", content: aiSeoData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={aiSeoData} />,
});
