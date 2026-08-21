import { 
  Search, Code, MapPin, FileText, 
  Target, Link as LinkIcon, BarChart3, Settings
} from "lucide-react";
import { ServiceData } from "./types";

export const searchEngineOptimizationData: ServiceData = {
  slug: "search-engine-optimization",
  seo: {
    title: "Search Engine Optimization (SEO) Services | IDM Smart Tech",
    description: "Get found on Google. Our expert SEO services drive organic traffic, improve rankings, and generate business enquiries through data-driven strategies.",
    keywords: "SEO services, Search Engine Optimization, Local SEO, Technical SEO, SEO Agency, organic traffic, Google ranking",
  },
  hero: {
    h1: "Search Engine Optimization",
    headline: "Get Your Business Found on Google",
    description: "People search Google before they contact a business, compare a service, or make a purchase. If your website isn't visible for those searches, your competitors get the opportunity instead. We improve where and how your business appears in organic search.",
    benefits: ["Targeted Organic Traffic", "Long-Term Visibility", "Increased Enquiries", "Higher Search Rankings"],
    primaryCta: "Improve Your Rankings",
    secondaryCta: "Get an SEO Audit",
    heroImage: "/images/services/seo_hero.png",
  },
  about: {
    title: "Why SEO Matters for Your Business",
    subtitle: "Turn search visibility into business growth.",
    description: [
      "At IDM Smart Tech, we work on your website and search presence to bring the right people to your website and turn search visibility into business enquiries.",
      "We handle the complete SEO process, from keyword research and technical SEO to content optimization, local SEO, competitor research, and link building. The goal is simple: ensure your business is exactly where your customers are looking."
    ],
    stats: [
      { label: "Long-Term", value: "Growth" },
      { label: "Visibility", value: "Organic" },
    ],
    aboutImage: "/images/services/seo_about.png",
  },
  features: [
    { title: "Keyword Research", description: "Finding out what people are actually searching for, analyzing search intent, and mapping keywords to the right pages.", icon: Search },
    { title: "On-Page SEO", description: "Optimizing titles, headings, content, and internal links so pages read naturally for users and make sense to search engines.", icon: FileText },
    { title: "Technical SEO", description: "Fixing crawling issues, page speed, mobile usability, Core Web Vitals, and broken links to ensure a healthy website structure.", icon: Code },
    { title: "Local SEO", description: "Improving visibility for local searches through Google Business Profile optimization, local citations, and reviews.", icon: MapPin },
    { title: "SEO Content", description: "Creating and improving service pages, product descriptions, and blog articles to match what your customers are looking for.", icon: FileText },
    { title: "Competitor Research", description: "Studying businesses already ranking for your keywords to find gaps and opportunities in the market.", icon: Target },
    { title: "Off-Page SEO", description: "Building website authority through relevant backlinks, business listings, local citations, and digital PR.", icon: LinkIcon },
    { title: "SEO Audit", description: "A comprehensive health check of your website's technical performance, content, keywords, and backlink profile.", icon: BarChart3 },
  ],
  benefits: [
    { title: "More Visibility", description: "Improve your presence for searches that are highly relevant to your specific products and services." },
    { title: "Better Traffic", description: "Bring in visitors who are actively searching for what you sell, resulting in higher quality leads." },
    { title: "More Enquiries", description: "Connect search traffic with optimized landing pages that give visitors a clear, compelling next step." },
    { title: "Stronger Local Presence", description: "Dominate your geographic area and improve visibility in local searches and Google Maps." },
    { title: "Long-Term Growth", description: "Unlike paid ads that stop when you stop paying, the SEO work we do today supports visibility over time." },
  ],
  whyChooseUs: [
    "We start with the business, not a generic checklist",
    "We study your competition before deciding what to do",
    "We focus on work that matters and prioritize high-impact tasks",
    "We keep reporting clear and easy to understand",
    "We think beyond rankings and focus on actual business outcomes",
    "Comprehensive technical, on-page, and off-page strategies",
    "Data-driven keyword mapping and intent analysis",
    "Expertise across local, e-commerce, and B2B SEO",
    "Focus on Core Web Vitals and user experience",
    "Continuous improvement as the search landscape changes"
  ],
  process: [
    { step: "01", title: "Understand the Business", description: "We first learn about your business, services, customers, locations, and competition." },
    { step: "02", title: "Find the Opportunities", description: "We research the market, keywords, and competitors to understand where the website can improve." },
    { step: "03", title: "Plan the Work", description: "We decide what needs to be done first and create a practical, prioritized SEO roadmap." },
    { step: "04", title: "Make the Changes", description: "Our team works on the website's technical structure, content, local presence, and authority." },
    { step: "05", title: "Track the Results", description: "We monitor keyword rankings, search visibility, organic traffic, and conversion metrics." },
    { step: "06", title: "Keep Improving", description: "SEO isn't a one-time task. We review the results and adjust the strategy as the search landscape evolves." },
  ],
  results: [
    { value: "Higher", label: "Search Rankings" },
    { value: "Quality", label: "Organic Traffic" },
    { value: "More", label: "Qualified Leads" },
    { value: "Clear", label: "Monthly Reports" },
  ],
  industries: [
    "Local Businesses",
    "Service Providers",
    "E-commerce Brands",
    "B2B Companies",
    "Multi-Location Businesses",
    "Growing Enterprises",
    "Healthcare & Clinics",
    "Real Estate"
  ],
  faqs: [
    { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. While technical fixes can show improvements in weeks, significant changes in organic traffic and rankings for competitive keywords typically take 3 to 6 months of consistent effort." },
    { question: "Is Local SEO different from regular SEO?", answer: "Yes, Local SEO specifically focuses on ranking your business in a specific geographic area, optimizing your Google Business Profile, and getting you into the local 'map pack' for searches like 'services near me'." },
    { question: "Do you guarantee a #1 ranking on Google?", answer: "No reputable agency can guarantee a #1 ranking because Google's algorithm changes constantly. We guarantee that we will implement the best data-driven practices to significantly improve your visibility and traffic." },
    { question: "What is included in your SEO reporting?", answer: "Our reports are clear and focus on business outcomes. We track keyword rankings, organic traffic, search impressions, Search Console data, and most importantly, what these metrics mean for your next steps." },
    { question: "What is Technical SEO?", answer: "Technical SEO ensures your website is built in a way that search engines can easily crawl and index. It covers page speed, mobile usability, fixing broken links, canonical tags, and Core Web Vitals." },
    { question: "Do I need to rewrite my entire website?", answer: "Not always. We start with an SEO Audit to identify what's working and what isn't. Often, we can optimize your existing content by improving headings, metadata, and keyword placement rather than starting from scratch." },
  ],
  relatedBlogs: []
};
