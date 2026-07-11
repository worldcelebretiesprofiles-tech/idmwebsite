import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { contentMarketingData } from "@/data/services/content-marketing";

export const Route = createFileRoute("/services/content-marketing")({
  head: () => ({
    meta: [
      { title: contentMarketingData.seo.title },
      { name: "description", content: contentMarketingData.seo.description },
      { name: "keywords", content: contentMarketingData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={contentMarketingData} />,
});
