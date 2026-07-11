import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { socialMediaMarketingData } from "@/data/services/social-media-marketing";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => ({
    meta: [
      { title: socialMediaMarketingData.seo.title },
      { name: "description", content: socialMediaMarketingData.seo.description },
      { name: "keywords", content: socialMediaMarketingData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={socialMediaMarketingData} />,
});
