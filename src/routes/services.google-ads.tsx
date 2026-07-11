import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { googleAdsData } from "@/data/services/google-ads";

export const Route = createFileRoute("/services/google-ads")({
  head: () => ({
    meta: [
      { title: googleAdsData.seo.title },
      { name: "description", content: googleAdsData.seo.description },
      { name: "keywords", content: googleAdsData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={googleAdsData} />,
});
