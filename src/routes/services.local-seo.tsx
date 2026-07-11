import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { localSeoData } from "@/data/services/local-seo";

export const Route = createFileRoute("/services/local-seo")({
  head: () => ({
    meta: [
      { title: localSeoData.seo.title },
      { name: "description", content: localSeoData.seo.description },
      { name: "keywords", content: localSeoData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={localSeoData} />,
});
