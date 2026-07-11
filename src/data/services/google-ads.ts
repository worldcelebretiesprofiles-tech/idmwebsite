import { 
  MousePointerClick, TrendingUp, Target, BarChart3, 
  Search, ShieldCheck, Zap, Crosshair 
} from "lucide-react";
import { ServiceData } from "./types";

export const googleAdsData: ServiceData = {
  slug: "google-ads",
  seo: {
    title: "Expert Google Ads Agency in Hyderabad | IDM Smart Tech",
    description: "Maximize your ROI with data-driven Google Ads campaigns. We are the top PPC agency in Hyderabad, delivering high-quality leads and instant visibility.",
    keywords: "Google Ads agency Hyderabad, PPC company, paid search marketing, lead generation ads, Google AdWords expert",
  },
  hero: {
    h1: "Google Ads & PPC Management",
    headline: "Stop Wasting Ad Spend. Start Generating Real ROI.",
    description: "Get in front of customers exactly when they're searching for your products or services. We build highly targeted, conversion-focused Google Ads campaigns that turn clicks into paying customers.",
    benefits: ["Instant Visibility", "High-Intent Traffic", "Data-Driven ROI", "No Wasted Ad Spend"],
    primaryCta: "Get a Free PPC Audit",
    secondaryCta: "See Our Results",
    heroImage: "/images/services/google_ads_hero.png",
  },
  about: {
    title: "Why You Need Professional Google Ads Management",
    subtitle: "Because clicks are easy, but conversions are hard.",
    description: [
      "Running Google Ads without a proven strategy is the fastest way to burn through your marketing budget. Anyone can generate clicks, but turning those clicks into high-quality leads requires deep expertise, constant optimization, and data analysis.",
      "At IDM Smart Tech, we don't just set up campaigns and walk away. We meticulously craft ad copy, optimize landing pages, and refine bidding strategies daily to ensure every rupee you spend generates maximum return on investment."
    ],
    stats: [
      { label: "Avg. Conversion Rate", value: "9.5%" },
      { label: "Ad Spend Managed", value: "$2M+" },
    ],
    aboutImage: "/images/services/google_ads_about.png",
  },
  features: [
    { title: "Search Network Ads", description: "Capture high-intent prospects who are actively searching for your exact services on Google.", icon: Search },
    { title: "Display & Remarketing", description: "Keep your brand top-of-mind by showing visual ads to users who previously visited your site.", icon: MousePointerClick },
    { title: "Performance Max Campaigns", description: "Leverage Google's AI to place your ads across all Google channels from a single campaign.", icon: Zap },
    { title: "Conversion Tracking", description: "Accurate tracking setup to measure exactly which keywords and ads generate actual revenue.", icon: Target },
    { title: "A/B Split Testing", description: "Continuous testing of ad copy, headlines, and landing pages to improve conversion rates.", icon: Crosshair },
    { title: "Click Fraud Protection", description: "Advanced blocking techniques to prevent competitors and bots from wasting your ad spend.", icon: ShieldCheck },
    { title: "Landing Page Optimization", description: "We don't just drive traffic; we ensure the pages they land on are built to convert.", icon: TrendingUp },
    { title: "Transparent Reporting", description: "Clear, jargon-free dashboards showing exactly how many leads your campaigns generated.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Immediate Results", description: "Unlike SEO which takes months, Google Ads can put you at the top of page one within 24 hours." },
    { title: "Highly Targeted Traffic", description: "Show your ads only to specific demographics, locations, and users searching for exact keywords." },
    { title: "Complete Budget Control", description: "You decide exactly how much you want to spend per day, with the ability to pause or scale instantly." },
    { title: "Measurable ROI", description: "Track every click, call, and form submission to know exactly how much a new customer costs." },
    { title: "Outsmart Competitors", description: "Aggressive bidding strategies allow you to outrank your biggest competitors on their own brand terms." },
  ],
  whyChooseUs: [
    "Certified Google Partners",
    "Conversion-First Approach",
    "Daily Campaign Optimization",
    "No Long-Term Contracts",
    "Custom Landing Page Creation",
    "Transparent ROI Reporting",
    "Dedicated PPC Account Manager",
    "In-House Design & Copywriting"
  ],
  process: [
    { step: "01", title: "Discovery", description: "We analyze your margins, target audience, and current CPA goals." },
    { step: "02", title: "Keyword Research", description: "Identifying high-intent, profitable search terms while excluding negative keywords." },
    { step: "03", title: "Campaign Build", description: "Structuring campaigns, writing compelling ad copy, and setting up conversion tracking." },
    { step: "04", title: "Launch", description: "Your ads go live, and we carefully monitor initial traffic quality and bid costs." },
    { step: "05", title: "Optimization", description: "Daily adjustments to bids, keywords, and ad copy to lower CPA and increase conversions." },
    { step: "06", title: "Scale", description: "Once we hit a profitable ROI, we strategically increase budget to scale your revenue." },
  ],
  results: [
    { value: "400%", label: "Avg. ROI Increase" },
    { value: "65%", label: "Lower Cost Per Lead" },
    { value: "10k+", label: "Leads Generated" },
    { value: "95%", label: "Client Retention" },
  ],
  industries: [
    "Healthcare & Clinics",
    "Real Estate Developers",
    "E-Commerce Brands",
    "B2B SaaS & Software",
    "Legal & Financial Services",
    "Home Services (Plumbing, HVAC)",
    "Educational Institutions",
    "Travel & Tourism"
  ],
  faqs: [
    { question: "How much should I spend on Google Ads?", answer: "Your budget depends on your industry, competition, and goals. We recommend starting with a budget that allows for enough clicks to gather statistically significant data—usually a minimum of ₹30,000 to ₹50,000 per month for local businesses." },
    { question: "How long does it take to see results?", answer: "Google Ads can generate traffic immediately upon launch. However, it typically takes 2 to 4 weeks of data gathering and optimization to dial in a profitable Cost Per Acquisition (CPA)." },
    { question: "Why am I getting clicks but no leads?", answer: "This is usually due to a disconnect between the ad promise and the landing page, poor user experience on mobile, or targeting broad match keywords that attract irrelevant traffic." },
    { question: "Do you create the landing pages too?", answer: "Yes! Driving traffic is only half the battle. Our team designs and builds high-converting landing pages specifically tailored to match your ad campaigns." },
    { question: "What are Negative Keywords?", answer: "Negative keywords are search terms you explicitly tell Google NOT to show your ads for. This is crucial for preventing wasted ad spend on irrelevant searches." },
    { question: "Are you a Google Premier Partner?", answer: "Our team consists of certified Google Ads specialists who adhere to Google's highest standards of campaign management and performance." },
    { question: "How do you track conversions?", answer: "We install Google Tag Manager and conversion tracking codes on your website to track form submissions, phone calls, WhatsApp clicks, and e-commerce purchases." },
    { question: "Can I pause my campaigns anytime?", answer: "Yes, you have complete control. Campaigns can be paused, adjusted, or scaled up instantly based on your business capacity." },
    { question: "Do you run YouTube and Display ads too?", answer: "Absolutely. We manage full-funnel paid media, including Search, Display, YouTube, and Performance Max campaigns." },
    { question: "How is your management fee structured?", answer: "We charge a flat monthly management fee or a percentage of ad spend, depending on the complexity and scale of the campaigns. We prioritize total transparency with no hidden fees." },
  ],
  relatedBlogs: [
    { title: "5 Reasons Your Google Ads Aren't Converting", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "Understanding Performance Max Campaigns", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "The Importance of Negative Keywords in PPC", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "How to Calculate Your Target CPA", link: "/blog", image: "/team_lekha.png" },
    { title: "Google Ads vs. Facebook Ads: Which is Better?", link: "/blog", image: "/team_r_rahul.PNG" },
    { title: "Anatomy of a High-Converting Landing Page", link: "/blog", image: "/team_anand.png" },
    { title: "How to Stop Competitors from Clicking Your Ads", link: "/blog", image: "/raghavendra_goud_founder.jpeg" },
    { title: "Why Quality Score is the Most Important Metric", link: "/blog", image: "/BantaramSanvika_founder.png" },
  ]
};
