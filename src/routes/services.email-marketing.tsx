import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { emailMarketingData } from "@/data/services/email-marketing";

export const Route = createFileRoute("/services/email-marketing")({
  head: () => ({
    meta: [
      { title: emailMarketingData.seo.title },
      { name: "description", content: emailMarketingData.seo.description },
      { name: "keywords", content: emailMarketingData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={emailMarketingData} />,
});
