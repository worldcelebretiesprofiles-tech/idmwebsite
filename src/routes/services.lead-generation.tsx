import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { leadGenerationData } from "@/data/services/lead-generation";

export const Route = createFileRoute("/services/lead-generation")({
  head: () => ({
    meta: [
      { title: leadGenerationData.seo.title },
      { name: "description", content: leadGenerationData.seo.description },
      { name: "keywords", content: leadGenerationData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={leadGenerationData} />,
});
