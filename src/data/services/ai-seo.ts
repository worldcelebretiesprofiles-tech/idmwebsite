import { 
  Bot, Cpu, TrendingUp, Zap, 
  Search, Code2, LineChart, Target 
} from "lucide-react";
import { ServiceData } from "./types";

export const aiSeoData: ServiceData = {
  slug: "ai-seo",
  seo: {
    title: "AI SEO Services in Hyderabad | Future-Proof Your Search Rankings",
    description: "Leverage artificial intelligence to dominate search results. We use cutting-edge AI SEO tools to outrank competitors faster and more efficiently.",
    keywords: "AI SEO services, AI search engine optimization, programmatic SEO, automated SEO, future of SEO",
  },
  hero: {
    h1: "AI-Powered SEO",
    headline: "Rank Faster with Next-Gen Artificial Intelligence.",
    description: "Traditional SEO takes months. By leveraging proprietary AI tools and programmatic strategies, we analyze massive datasets, automate optimizations, and scale your search visibility at unprecedented speeds.",
    benefits: ["Faster Rankings", "Programmatic Scale", "Data-Driven Insights", "Predictive Analytics"],
    primaryCta: "Discover AI SEO",
    secondaryCta: "Read Case Studies",
    heroImage: "/images/services/ai_seo_hero.png",
  },
  about: {
    title: "The Future of Search is Artificial Intelligence",
    subtitle: "Don't bring a knife to a gunfight.",
    description: [
      "Search Engine algorithms are powered by highly advanced AI. If you are still relying entirely on manual, old-school SEO tactics, you are already falling behind competitors who are utilizing machine learning.",
      "At IDM Smart Tech, we combine human strategic oversight with the raw computational power of AI. We use artificial intelligence to analyze search intent, optimize site architecture, and generate topical authority at a scale that human teams simply cannot match."
    ],
    stats: [
      { label: "Implementation Speed", value: "10x" },
      { label: "Data Points Analyzed", value: "1M+" },
    ],
    aboutImage: "/images/services/ai_seo_about.png",
  },
  features: [
    { title: "Programmatic SEO", description: "Automatically generating hundreds of highly optimized landing pages based on search data.", icon: Code2 },
    { title: "AI Content Generation", description: "Producing high-quality, undetectable, and helpful content optimized by natural language processing.", icon: Bot },
    { title: "Predictive Analytics", description: "Using machine learning to predict which keywords will trend before your competitors find them.", icon: LineChart },
    { title: "Semantic Entity Optimization", description: "Structuring your content around 'entities' rather than keywords to perfectly match Google's Knowledge Graph.", icon: Search },
    { title: "Automated Internal Linking", description: "AI tools that automatically map and create the most powerful internal linking structures.", icon: Zap },
    { title: "Log File Analysis", description: "Deep algorithmic analysis of how Googlebot crawls your site to identify and fix crawl budget issues.", icon: Cpu },
    { title: "Intent Matching", description: "Analyzing top-ranking SERPs to mathematically reverse-engineer exactly what Google wants to see.", icon: Target },
    { title: "Continuous A/B Testing", description: "Automated testing of meta tags and schema markup to continuously improve click-through rates.", icon: TrendingUp },
  ],
  benefits: [
    { title: "Unprecedented Speed", description: "Achieve in weeks what traditional SEO campaigns take months to accomplish." },
    { title: "Massive Scale", description: "Target thousands of long-tail keywords simultaneously through programmatic page generation." },
    { title: "Data over Guesswork", description: "Every optimization is backed by mathematical analysis of the SERPs, not human intuition." },
    { title: "Lower Cost Per Acquisition", description: "AI efficiency allows us to do more with less, passing the ROI directly to your bottom line." },
    { title: "Future-Proof Strategy", description: "Align your website with the exact AI algorithms Google uses to evaluate content." },
  ],
  whyChooseUs: [
    "Proprietary AI Tools",
    "Programmatic SEO Experts",
    "Human Editorial Oversight",
    "Deep Technical Knowledge",
    "Focus on 'Helpful Content'",
    "Advanced Entity Mapping",
    "Transparent AI Usage",
    "Continuous Innovation"
  ],
  process: [
    { step: "01", title: "Data Scraping", description: "Extracting massive amounts of data from your competitors and current search results." },
    { step: "02", title: "Machine Learning Analysis", description: "Our AI tools identify content gaps, technical errors, and high-probability keyword opportunities." },
    { step: "03", title: "Programmatic Architecture", description: "Designing a scalable site structure that can handle hundreds of dynamic landing pages." },
    { step: "04", title: "AI Content Generation", description: "Drafting optimized content that is then rigorously reviewed and edited by human experts." },
    { step: "05", title: "Automated Deployment", description: "Pushing optimizations, schema markup, and internal links live across the site." },
    { step: "06", title: "Algorithmic Refinement", description: "Continuous monitoring and micro-adjustments based on real-time ranking data." },
  ],
  results: [
    { value: "10x", label: "Faster Implementation" },
    { value: "100k+", label: "Pages Optimized" },
    { value: "1M+", label: "Data Points Checked" },
    { value: "24/7", label: "Automated Monitoring" },
  ],
  industries: [
    "E-Commerce & Large Catalogs",
    "Real Estate Aggregators",
    "Job Portals & Directories",
    "Travel & Booking Sites",
    "SaaS Companies",
    "News & Media Publishers",
    "Franchise Businesses",
    "Enterprise Corporations"
  ],
  faqs: [
    { question: "Does Google penalize AI-generated content?", answer: "No. Google's official stance is that they reward 'high-quality content, however it is produced'. As long as the AI content is helpful, fact-checked, and edited by humans, it ranks perfectly." },
    { question: "What is Programmatic SEO?", answer: "It is the process of using code and databases to automatically generate hundreds or thousands of landing pages targeting long-tail keywords (e.g., 'Best SEO agency in [City]')." },
    { question: "Is AI SEO replacing traditional SEO?", answer: "Not entirely. Human strategy, creativity, and relationship-building (for backlinks) are still crucial. AI simply automates the heavy lifting and data analysis." },
    { question: "How does AI help with technical SEO?", answer: "AI can instantly parse server logs, identify crawl errors, and automatically generate optimized schema markup code, saving dozens of hours of manual developer work." },
    { question: "Will my content sound like a robot?", answer: "Absolutely not. Every piece of AI-generated content we produce is heavily edited, fact-checked, and stylized by our human editorial team before it ever goes live." },
    { question: "What are semantic entities?", answer: "Entities are distinct concepts (people, places, things) that Google's AI understands. We optimize your content to clearly connect these entities, making it easier for Google to trust your authority." },
    { question: "Can AI build backlinks?", answer: "AI cannot directly 'build' high-quality backlinks. However, we use AI to analyze backlink profiles, identify prospects, and draft highly personalized outreach emails at scale." },
    { question: "Is AI SEO more expensive?", answer: "Actually, it's often more cost-effective because of the speed and scale at which we can operate compared to purely manual teams." },
  ],
  relatedBlogs: [
    { title: "How Google's SGE is Changing Search Forever", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "Programmatic SEO: How to Scale Your Traffic Fast", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "Will AI Content Get You Penalized by Google?", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "The Power of Entity-Based SEO", link: "/blog", image: "/team_lekha.png" },
  ]
};
