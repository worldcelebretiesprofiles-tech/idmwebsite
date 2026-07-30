import { 
  Target, Magnet, Users, TrendingUp, 
  MapPin, MousePointerClick, MessageCircle, BarChart3 
} from "lucide-react";
import { ServiceData } from "./types";

export const leadGenerationData: ServiceData = {
  slug: "lead-generation",
  seo: {
    title: "Lead Generation Services | IDM Smart Tech",
    description: "Generate high-quality leads that drive business growth. Our targeted digital marketing solutions connect you with high-intent customers ready to convert.",
    keywords: "lead generation services, B2B lead generation, B2C lead generation, digital marketing agency, Google Ads leads, SEO leads",
  },
  hero: {
    h1: "Generate Qualified Leads That Drive Business Growth",
    headline: "Stop Chasing, Start Attracting.",
    description: "At IDM Smart Tech, we help businesses generate high-quality leads through strategic digital marketing solutions. Connect with potential customers who are actively searching for your products or services.",
    benefits: ["High-Intent Customers", "Measurable ROI", "Targeted Campaigns", "Conversion-Focused"],
    primaryCta: "Start Getting Leads",
    secondaryCta: "View Our Process",
    heroImage: "/images/services/lead_gen_hero.png",
  },
  about: {
    title: "Why You Need a Strategic Lead Generation Partner",
    subtitle: "Success comes from attracting the right audience.",
    description: [
      "Growing a business requires more than simply increasing website traffic. It requires connecting with people who are genuinely interested in your products or services. Finding potential customers has become more competitive than ever, and many businesses waste budget on campaigns that generate clicks but fail to produce meaningful enquiries.",
      "At IDM Smart Tech, we bridge this gap. We develop customised lead generation strategies combining market research, audience analysis, paid advertising, SEO, and conversion-focused marketing to generate qualified leads that contribute to measurable business growth."
    ],
    stats: [
      { label: "High-Intent Leads", value: "3x" },
      { label: "Conversion Rate", value: "+45%" },
    ],
    aboutImage: "/images/services/lead_gen_about.png",
  },
  features: [
    { title: "Google Ads Campaigns", description: "Reach customers exactly when they are searching. Strategically planned to generate high-intent leads and maximise ad budget.", icon: MousePointerClick },
    { title: "SEO Lead Generation", description: "Build long-term online visibility and attract organic search customers to generate consistent business enquiries.", icon: TrendingUp },
    { title: "Social Media Leads", description: "Connect with your ideal audience through targeted Facebook and Instagram advertising and creative ad design.", icon: Users },
    { title: "Local SEO & Maps", description: "Increase visibility in Google Search and Google Maps. Improve local rankings and drive direction requests.", icon: MapPin },
    { title: "Landing Page Design", description: "Fast loading, mobile responsive, and user-friendly pages specifically designed to convert visitors into customers.", icon: Target },
    { title: "Marketing Automation", description: "Improve customer communication with instant WhatsApp responses, automated follow-ups, and CRM integration.", icon: MessageCircle },
    { title: "Lead Nurturing", description: "Workflows designed to guide prospects down the funnel and improve your overall lead conversion process.", icon: Magnet },
    { title: "Performance Tracking", description: "Transparent reporting and continuous optimisation based on data-driven campaign analytics.", icon: BarChart3 },
  ],
  benefits: [
    { title: "High-Intent Prospects", description: "We bridge the gap by connecting your business with customers who are actively searching for your exact solutions." },
    { title: "Maximised Marketing Budget", description: "Stop spending on empty clicks. We optimise your investment to ensure you are paying for meaningful enquiries." },
    { title: "Long-Term Digital Authority", description: "Through sustained SEO and targeted campaigns, we build a predictable and scalable pipeline for your business." },
    { title: "Data-Driven Decisions", description: "Every campaign is continuously monitored and optimised to improve lead quality and increase conversion rates." },
    { title: "Local & National Reach", description: "Whether you want to reach local customers in Hyderabad or expand across India, our campaigns are tailored to scale." },
  ],
  whyChooseUs: [
    "Customised lead generation strategies",
    "Google Certified digital marketing experts",
    "ROI-focused campaigns",
    "Transparent reporting",
    "Multi-channel marketing approach",
    "Conversion-focused landing pages",
    "Continuous campaign optimisation",
    "Affordable pricing for all business sizes",
    "Dedicated account management",
    "Proven results across multiple industries"
  ],
  process: [
    { step: "01", title: "Market & Audience Analysis", description: "We research your target market, competitors, and audience behavior to build a precise strategy." },
    { step: "02", title: "Multi-Channel Strategy", description: "Deploying the right mix of Google Ads, SEO, and Social Media tailored to your unique objectives." },
    { step: "03", title: "Conversion Optimisation", description: "Designing high-converting landing pages and lead capture forms that turn traffic into enquiries." },
    { step: "04", title: "Campaign Launch", description: "Executing targeted advertising and local search strategies to immediately start generating leads." },
    { step: "05", title: "Automation & Nurturing", description: "Setting up WhatsApp and email automations to ensure no lead goes cold before your sales team reaches them." },
    { step: "06", title: "Continuous Optimisation", description: "Refining targeting, ad copy, and landing pages based on real-time data to maximize your ROI." },
  ],
  results: [
    { value: "3x", label: "Increase in Enquiries" },
    { value: "45%", label: "Higher Conversion Rate" },
    { value: "60%", label: "Lower Cost Per Lead" },
    { value: "100%", label: "Transparent Reporting" },
  ],
  industries: [
    "Real Estate Developers",
    "Healthcare & Hospitals",
    "Educational Institutions",
    "B2B Service Providers",
    "E-Commerce & Retail",
    "Startups & Tech",
    "Local Service Businesses",
    "Financial Services"
  ],
  faqs: [
    { question: "How is lead generation different from general digital marketing?", answer: "While general marketing focuses on brand awareness and traffic, lead generation is hyper-focused on acquiring contact information from qualified prospects who have expressed direct interest in your service, giving your sales team immediate opportunities." },
    { question: "Which platform is best for generating leads?", answer: "It depends entirely on your business. Google Ads is excellent for capturing high-intent searches (people looking to buy right now). Facebook/Instagram Ads are great for B2C visual products, while LinkedIn is perfect for B2B. We recommend a multi-channel approach." },
    { question: "How do you ensure the leads are high quality?", answer: "We use strict targeting parameters, negative keywords, highly specific ad copy, and multi-step conversion forms. This pre-qualifies users before they submit their details, ensuring you don't waste time on junk leads." },
    { question: "Do you build the landing pages for the campaigns?", answer: "Yes! Sending traffic to a generic homepage is the biggest mistake businesses make. We design and host dedicated, conversion-optimized landing pages tailored specifically to the ad campaign." },
    { question: "What is your WhatsApp & Marketing Automation service?", answer: "Speed to lead is critical. We integrate automations so that the moment a lead submits a form, they receive an instant customized WhatsApp or email response, and your sales team is instantly notified." },
    { question: "Do you work with local businesses in Hyderabad?", answer: "Absolutely. We specialize in Local SEO and Google Business Profile optimization to help local businesses dominate the Maps section and generate calls and direction requests." },
    { question: "How long does it take to start seeing leads?", answer: "With paid campaigns like Google Ads and Meta Ads, you can start receiving leads within 24-48 hours of launch. Organic leads through SEO typically take 3-6 months to build momentum." },
    { question: "Are your campaigns ROI-focused?", answer: "100%. We provide transparent reporting that tracks exactly how much you spent, how many leads were generated, and your exact Cost Per Lead (CPL)." },
  ],
  relatedBlogs: [] // Hidden completely in template
};
