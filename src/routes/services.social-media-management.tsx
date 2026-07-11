import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { socialMediaManagementData } from "@/data/services/social-media-management";

export const Route = createFileRoute("/services/social-media-management")({
  head: () => ({
    meta: [
      { title: socialMediaManagementData.seo.title },
      { name: "description", content: socialMediaManagementData.seo.description },
      { name: "keywords", content: socialMediaManagementData.seo.keywords },
    ],
  }),
  component: () => <ServicePageTemplate data={socialMediaManagementData} />,
});
