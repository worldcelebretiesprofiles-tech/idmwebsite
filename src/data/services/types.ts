import { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    h1: string;
    headline: string;
    description: string;
    benefits: string[];
    primaryCta: string;
    secondaryCta: string;
    heroImage: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    stats: { label: string; value: string }[];
    aboutImage: string;
  };
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  whyChooseUs: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  results: {
    value: string;
    label: string;
  }[];
  industries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedBlogs: {
    title: string;
    link: string;
    image: string;
  }[];
}
