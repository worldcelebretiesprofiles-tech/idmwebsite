import { 
  Users, Target, TrendingUp, Mail, 
  MessageSquare, Zap, Crosshair, BarChart3 
} from "lucide-react";
import { ServiceData } from "./types";

export const leadGenerationData: ServiceData = {
  slug: "lead-generation",
  seo: {
    title: "B2B & B2C Lead Generation Agency in Hyderabad | IDM Smart Tech",
    description: "Fill your sales pipeline with high-quality, exclusive leads. Our data-driven lead generation strategies guarantee predictable revenue for your business.",
    keywords: "lead generation agency, B2B leads, exclusive lead generation, sales pipeline, marketing agency Hyderabad",
  },
  hero: {
    h1: "Lead Generation Services",
    headline: "Fill Your Pipeline with High-Intent Buyers.",
    description: "Stop relying on referrals and cold calls. We build automated, multi-channel lead generation engines that deliver exclusive, qualified leads straight to your sales team.",
    benefits: ["Exclusive Leads", "Automated Pipelines", "Lower Cost Per Lead", "Predictable Revenue"],
    primaryCta: "Get a Custom Strategy",
    secondaryCta: "See Our Results",
    heroImage: "/images/services/lead_gen_hero.png",
  },
  about: {
    title: "Why You Need a Lead Generation Engine",
    subtitle: "Because hoping for referrals isn't a strategy.",
    description: [
      "In today's highly competitive market, businesses that rely solely on word-of-mouth or outdated outbound tactics are losing market share to competitors with robust digital engines.",
      "At IDM Smart Tech, we don't just generate 'clicks' or 'traffic'—we generate real people who are actively looking for your exact product or service. Our proprietary systems capture, nurture, and deliver high-intent leads that actually close."
    ],
    stats: [
      { label: "Pipeline Growth", value: "3x" },
      { label: "Close Rate Avg", value: "24%" },
    ],
    aboutImage: "/images/services/lead_gen_about.png",
  },
  features: [
    { title: "B2B Lead Generation", description: "Target decision-makers on LinkedIn and via email to secure high-ticket meetings.", icon: Users },
    { title: "B2C Lead Campaigns", description: "High-volume, hyper-targeted social and search campaigns to drive consumer sales.", icon: Target },
    { title: "Landing Page Optimization", description: "Building highly persuasive, conversion-focused funnels that turn visitors into inquiries.", icon: Zap },
    { title: "Omnichannel Approach", description: "We utilize Google, Meta, LinkedIn, and Email to surround your ideal prospects.", icon: Crosshair },
    { title: "Lead Nurturing", description: "Automated email and SMS sequences that educate and warm up leads before they talk to sales.", icon: Mail },
    { title: "Conversational Marketing", description: "AI chatbots and WhatsApp automation to capture and qualify leads 24/7.", icon: MessageSquare },
    { title: "CRM Integration", description: "Leads are pushed instantly to your CRM (Salesforce, HubSpot, Zoho) for immediate follow-up.", icon: TrendingUp },
    { title: "ROI Tracking", description: "End-to-end attribution showing exactly which campaigns drove closed-won deals.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Predictable Revenue", description: "Know exactly how many leads you'll get this month, and exactly how much revenue they'll generate." },
    { title: "Higher Quality Deals", description: "We focus on intent-based targeting, meaning the leads you receive are actively looking to buy." },
    { title: "Exclusive to You", description: "Unlike shared lead platforms (like JustDial), our leads are generated exclusively for your business." },
    { title: "Scalable Growth", description: "Once the engine is built and optimized, you can scale your sales simply by turning the dial." },
    { title: "Save Sales Time", description: "Your sales team spends less time prospecting and more time doing what they do best: closing." },
  ],
  whyChooseUs: [
    "Multi-Channel Expertise",
    "Focus on Lead Quality",
    "Transparent CPL Metrics",
    "Seamless CRM Integrations",
    "In-House Funnel Builders",
    "Automated Nurture Sequences",
    "Data-Driven Strategies",
    "Proven Track Record"
  ],
  process: [
    { step: "01", title: "Audience Profiling", description: "Defining your Ideal Customer Profile (ICP) and mapping their buying journey." },
    { step: "02", title: "Offer Creation", description: "Developing compelling lead magnets, offers, or hooks to capture contact information." },
    { step: "03", title: "Funnel Build", description: "Designing landing pages, setting up tracking, and integrating your CRM." },
    { step: "04", title: "Traffic Generation", description: "Launching targeted paid ad campaigns across Google, Meta, and LinkedIn." },
    { step: "05", title: "Lead Nurturing", description: "Engaging leads through automated email and SMS follow-ups to increase qualification." },
    { step: "06", title: "Scale", description: "Analyzing conversion data and scaling budgets on the most profitable campaigns." },
  ],
  results: [
    { value: "300%", label: "Pipeline Increase" },
    { value: "45%", label: "Lower Lead Cost" },
    { value: "50k+", label: "Leads Generated" },
    { value: "24/7", label: "Automated Flow" },
  ],
  industries: [
    "Real Estate Developers",
    "Financial Advisors & Insurance",
    "B2B Software & SaaS",
    "Education & EdTech",
    "Healthcare & Clinics",
    "High-Ticket Services",
    "Legal Firms",
    "Home Improvement & HVAC"
  ],
  faqs: [
    { question: "Are your leads exclusive?", answer: "Yes, 100%. We run campaigns specifically under your brand. Every lead generated belongs entirely to you and is never sold to a competitor." },
    { question: "What platforms do you use for lead generation?", answer: "We use a multi-channel approach depending on your audience. For B2B, we rely heavily on LinkedIn and Google Ads. For B2C, we utilize Meta (Facebook/Instagram), Google, and TikTok." },
    { question: "How do you ensure lead quality?", answer: "We use high-intent targeting, multi-step qualification forms, and exclude broad audiences. We prioritize Cost Per Qualified Lead (CPQL) over just Cost Per Lead (CPL)." },
    { question: "Do you integrate with my CRM?", answer: "Yes. We integrate directly with HubSpot, Salesforce, Zoho, Pipedrive, and virtually any CRM via Zapier or native webhooks." },
    { question: "How quickly can we start seeing leads?", answer: "Once the strategy is approved and the funnels are built (usually 1-2 weeks), leads start flowing within 24-48 hours of campaign launch." },
    { question: "Do you guarantee a certain number of leads?", answer: "While we don't guarantee exact numbers (as algorithms fluctuate), we provide highly accurate projections based on historical data and initial test campaigns." },
    { question: "What is lead nurturing?", answer: "It's the process of automatically sending emails, SMS, or WhatsApp messages to leads immediately after they sign up, educating them and increasing their likelihood of buying." },
    { question: "Is this better than buying email lists?", answer: "Infinitely better. Bought lists are cold, non-compliant (spam), and yield terrible conversion rates. Our leads actually request to speak with you." },
  ],
  relatedBlogs: [
    { title: "B2B vs B2C Lead Generation: What's the Difference?", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "How to Build a High-Converting Landing Page", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "Why Lead Nurturing is the Secret to Closing Deals", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "The Ultimate Guide to LinkedIn Lead Generation", link: "/blog", image: "/team_lekha.png" },
  ]
};
