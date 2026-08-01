import { 
  Target, Magnet, Users, TrendingUp, 
  MapPin, MousePointerClick, MessageCircle, BarChart3,
  Search, Video, ShoppingBag, Smartphone, Zap, MonitorSmartphone, Key, Settings
} from "lucide-react";
import { ServiceData } from "./types";

export const googleAdsData: ServiceData = {
  slug: "google-ads",
  seo: {
    title: "Best Google Ads Agency in Hyderabad | IDM Smart Tech",
    description: "Reach customers exactly when they are searching. Our Google Ads campaigns generate qualified leads, increase conversions, and maximize your advertising budget.",
    keywords: "Google Ads agency, PPC services, Google Ads management, Search Ads, Performance Max, PPC campaigns, Google Ads Hyderabad",
  },
  hero: {
    h1: "Best Google Ads Agency in Hyderabad",
    headline: "Reach customers exactly when they are searching.",
    description: "At IDM Smart Tech, we build high-performing Google Ads campaigns that generate qualified leads, increase conversions, and maximize your advertising budget. From strategy and keyword research to campaign management and optimization, our team focuses on measurable business growth.",
    benefits: ["Instant Visibility", "Measurable ROI", "Qualified Leads", "Complete Budget Control"],
    primaryCta: "Start Your Campaign",
    secondaryCta: "Get a Free Audit",
    heroImage: "/images/services/google_ads_hero.png",
  },
  about: {
    title: "Why Choose Google Ads?",
    subtitle: "Instant visibility on the world's largest search engine.",
    description: [
      "Google Ads delivers instant visibility on Google Search, YouTube, Gmail, Maps, and the Display Network. Unlike long-term marketing channels, PPC enables businesses to reach ready-to-buy customers exactly when they are actively looking for your solutions.",
      "With Google Ads, you control your budget, measure every click, and scale your campaigns based on real-time performance. It is the most direct path to acquiring high-intent traffic and driving immediate business growth."
    ],
    stats: [
      { label: "Targeting", value: "Precision" },
      { label: "Scalability", value: "Infinite" },
    ],
    aboutImage: "/images/services/google_ads_about.png",
  },
  features: [
    { title: "Search Ads", description: "Capture high-intent searches when potential customers are actively looking for your products or services.", icon: Search },
    { title: "Display & YouTube", description: "Build brand awareness and re-engage visitors with compelling visual ads across the Google Display Network and YouTube.", icon: Video },
    { title: "Shopping Ads", description: "Showcase your e-commerce products directly in search results with high-converting rich media listings.", icon: ShoppingBag },
    { title: "Performance Max", description: "Leverage Google's machine learning to optimize bids and placements across all of Google's channels from a single campaign.", icon: Zap },
    { title: "App Campaigns", description: "Drive app installs and in-app engagement across Search, Google Play, YouTube, and Discover.", icon: Smartphone },
    { title: "Keyword Research", description: "Identify high-intent keywords, eliminate wasteful traffic with negative keywords, and organize ad groups for better Quality Scores.", icon: Key },
    { title: "Advanced Optimization", description: "Continuous bid adjustments, audience refinement, device optimization, and schedule optimization to achieve sustainable growth.", icon: Settings },
    { title: "Conversion Tracking", description: "End-to-end tracking of calls, form submissions, and purchases to ensure transparent ROI reporting.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Immediate Visibility", description: "Skip the SEO wait time. Get your business on the first page of Google the moment your campaign goes live." },
    { title: "Measurable ROI", description: "Track exactly how many leads, calls, and sales your campaigns generate, calculating your precise cost per acquisition." },
    { title: "Complete Budget Control", description: "You decide exactly how much you want to spend per day, with the flexibility to scale up or pause at any time." },
    { title: "Highly Qualified Leads", description: "By targeting specific keywords and demographics, we ensure your budget is only spent on users likely to convert." },
    { title: "Scalable Growth", description: "Once we identify a profitable campaign structure, we can scale your budget to drive exponential revenue growth." },
  ],
  whyChooseUs: [
    "Focus on business outcomes rather than clicks",
    "Data-driven campaign management & analytics",
    "Continuous optimization and A/B testing",
    "Transparent reporting and metrics",
    "Dedicated support and custom strategies",
    "Expertise in advanced PPC strategies (PMax, Smart Bidding)",
    "Conversion-focused landing page optimization",
    "Reduction of wasteful ad spend",
    "Proven results across multiple industries",
    "Google Certified digital marketing experts"
  ],
  process: [
    { step: "01", title: "Strategy & Planning", description: "Every campaign starts with business research, competitor analysis, and audience segmentation." },
    { step: "02", title: "Keyword & Copy", description: "We conduct deep keyword planning and write compelling ad copy designed to maximize click-through rates." },
    { step: "03", title: "Tracking Setup", description: "Implementing robust conversion tracking to measure form fills, calls, and sales accurately." },
    { step: "04", title: "Campaign Launch", description: "Structuring ad groups for optimal Quality Score and launching your targeted ads across Google's networks." },
    { step: "05", title: "Continuous Optimization", description: "Monitoring campaigns continuously through bid adjustments, audience refinement, and search term analysis." },
    { step: "06", title: "Reporting & Scaling", description: "Providing transparent reporting and scaling successful campaigns using advanced smart bidding strategies." },
  ],
  results: [
    { value: "100%", label: "Measurable ROI" },
    { value: "Immediate", label: "Visibility" },
    { value: "Targeted", label: "Traffic" },
    { value: "24/7", label: "Optimization" },
  ],
  industries: [
    "Healthcare & Hospitals",
    "Educational Institutions",
    "Real Estate & Construction",
    "E-Commerce & Retail",
    "Manufacturing",
    "Hospitality & Travel",
    "Finance & Professional Services",
    "Local Service Businesses"
  ],
  faqs: [
    { question: "How much should I spend on Google Ads?", answer: "Budgets depend entirely on your industry's competition and your specific goals. We recommend starting with a budget that allows for enough data collection to properly optimize, and then scaling as we prove ROI." },
    { question: "How quickly will I see results?", answer: "Most campaigns begin generating traffic and data within days. While you will see immediate visibility, ongoing optimization over the first few weeks will drastically improve your ROI and lower your cost per lead." },
    { question: "Do you provide reports on campaign performance?", answer: "Yes, we provide completely transparent reporting with clear performance metrics, insights, and our strategic recommendations for the next month." },
    { question: "What is the difference between SEO and Google Ads?", answer: "SEO focuses on ranking your website organically over time, which requires patience. Google Ads (PPC) allows you to pay for immediate placement at the top of the search results for targeted keywords." },
    { question: "Do you handle landing page optimization?", answer: "Yes. Sending paid traffic to a generic page wastes money. We optimize or build dedicated landing pages to ensure the traffic we generate actually converts into leads." },
    { question: "What are Performance Max campaigns?", answer: "Performance Max is an advanced campaign type that uses Google's AI to serve your ads across all of their channels (Search, Display, YouTube, Maps, Discover) from a single campaign to drive the most conversions." },
  ],
  relatedBlogs: []
};
