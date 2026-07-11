import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { seoServiceData } from "@/data/services/search-engine-optimization";

export const Route = createFileRoute("/services/search-engine-optimization")({
  head: () => ({
    meta: [
      { title: seoServiceData.seo.title },
      { name: "description", content: seoServiceData.seo.description },
      { name: "keywords", content: seoServiceData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={seoServiceData} />,
});
