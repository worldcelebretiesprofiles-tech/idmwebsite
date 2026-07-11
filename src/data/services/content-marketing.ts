import { 
  PenTool, BookOpen, Share2, Search, 
  BarChart3, Target, Edit3, MessageCircle 
} from "lucide-react";
import { ServiceData } from "./types";

export const contentMarketingData: ServiceData = {
  slug: "content-marketing",
  seo: {
    title: "B2B & B2C Content Marketing Services | IDM Smart Tech",
    description: "Build authority and drive organic traffic with high-quality, SEO-optimized content marketing services. We create blogs, whitepapers, and videos that convert.",
    keywords: "content marketing agency, SEO content writing, blog writing services, B2B content strategy, inbound marketing",
  },
  hero: {
    h1: "Content Marketing Services",
    headline: "Words That Rank. Content That Converts.",
    description: "Great design catches the eye, but compelling content closes the sale. We produce authoritative, SEO-optimized content that positions your brand as an industry leader and drives compounding organic traffic over time.",
    benefits: ["SEO-Optimized Blogs", "Thought Leadership", "Higher Conversion Rates", "Compounding Traffic Growth"],
    primaryCta: "Get a Content Strategy",
    secondaryCta: "Read Our Case Studies",
    heroImage: "/images/services/content_hero.png",
  },
  about: {
    title: "Why Content is Still King",
    subtitle: "Your customers are researching before they buy.",
    description: [
      "Over 70% of B2B buyers fully consume at least three pieces of content before ever speaking to a salesperson. If you aren't providing the answers they are searching for, your competitors are.",
      "At IDM Smart Tech, we don't just write fluff to fill pages. Our content marketing strategy is rooted in deep SEO research and psychological copywriting. We build comprehensive content silos that educate your audience, build massive trust, and gently guide them toward a purchasing decision."
    ],
    stats: [
      { label: "Organic Traffic Lift", value: "215%" },
      { label: "Content Pieces Created", value: "10k+" },
    ],
    aboutImage: "/images/services/content_about.png",
  },
  features: [
    { title: "SEO Blog Writing", description: "Long-form, deeply researched articles designed to rank on the first page of Google for high-intent keywords.", icon: Edit3 },
    { title: "Whitepapers & E-Books", description: "Authoritative lead magnets used to capture high-quality email addresses and B2B leads.", icon: BookOpen },
    { title: "Website Copywriting", description: "Persuasive, conversion-focused copy for your home page, service pages, and landing pages.", icon: PenTool },
    { title: "Video Scripting", description: "Engaging scripts for YouTube, TikTok, or corporate explainer videos that hold viewer retention.", icon: MessageCircle },
    { title: "Infographics & Visuals", description: "Breaking down complex data into highly shareable, visually stunning infographic designs.", icon: Share2 },
    { title: "Content Auditing", description: "Analyzing your existing content to find decay, fix SEO issues, and consolidate competing pages.", icon: Search },
    { title: "Topic Clustering", description: "Organizing your content into strategic pillars to build massive topical authority in Google's eyes.", icon: Target },
    { title: "Performance Tracking", description: "Measuring exactly which pieces of content are driving the most qualified leads and revenue.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Compounding Traffic", description: "A great piece of SEO content will continue driving free, highly-qualified traffic for years after it is published." },
    { title: "Industry Authority", description: "Consistently publishing high-quality insights establishes you as the undeniable expert in your field." },
    { title: "Higher Conversion Rates", description: "Educated buyers close faster. Content answers their objections before they even get on a sales call." },
    { title: "Lower Cost Per Lead", description: "Inbound content marketing generates leads at a significantly lower cost than traditional outbound ads." },
    { title: "Better Customer Retention", description: "Educational post-purchase content ensures your customers get the most out of your product, increasing LTV." },
  ],
  whyChooseUs: [
    "Native English Copywriters",
    "Deep SEO Integration",
    "Subject Matter Experts",
    "Focus on Revenue, Not Just Traffic",
    "Comprehensive Content Audits",
    "Multi-Format Production (Text & Video)",
    "Data-Driven Topic Selection",
    "Zero Plagiarism or AI Fluff"
  ],
  process: [
    { step: "01", title: "Strategy & Keyword Research", description: "Identifying the questions your ideal customers are asking Google." },
    { step: "02", title: "Content Mapping", description: "Designing a topic cluster strategy to build topical authority and internal links." },
    { step: "03", title: "Outlining & Research", description: "Deep diving into the subject matter and interviewing your internal experts." },
    { step: "04", title: "Drafting & SEO Optimization", description: "Writing the content while seamlessly weaving in primary and secondary keywords." },
    { step: "05", title: "Review & Refinement", description: "You review the drafts to ensure absolute factual accuracy and brand alignment." },
    { step: "06", title: "Publishing & Distribution", description: "Pushing the content live and distributing it via email and social channels." },
  ],
  results: [
    { value: "215%", label: "Traffic Increase" },
    { value: "10k+", label: "Articles Written" },
    { value: "1st", label: "Page Rankings" },
    { value: "60%", label: "Lower Lead Cost" },
  ],
  industries: [
    "B2B SaaS & Tech",
    "Financial Services & FinTech",
    "Healthcare & Medical Devices",
    "Legal Firms",
    "E-Commerce Brands",
    "Real Estate & Property Tech",
    "Education & eLearning",
    "Supply Chain & Logistics"
  ],
  faqs: [
    { question: "Do you just use AI to write content?", answer: "No. While we use AI for outlining and data analysis, all our content is written, edited, and fact-checked by human subject matter experts. Google heavily penalizes low-quality AI spam." },
    { question: "How long should a blog post be?", answer: "It depends on the search intent. Some queries require a quick 800-word answer, while ultimate guides might need 3,000+ words. We write exactly as much as needed to thoroughly answer the user's query." },
    { question: "How long does it take for content to rank on Google?", answer: "Typically, it takes 3 to 6 months for a new piece of content to reach its peak ranking potential, though highly authoritative sites can rank within days." },
    { question: "Do you provide images for the blogs?", answer: "Yes, we provide high-quality stock imagery, custom graphics, or charts to make the content visually engaging and break up large walls of text." },
    { question: "Can you write highly technical content?", answer: "Yes. For highly technical industries (like Medical or Enterprise SaaS), we conduct interviews with your internal Subject Matter Experts (SMEs) to ensure 100% technical accuracy." },
    { question: "Who owns the content after it's written?", answer: "You do. Once the content is approved and paid for, you retain 100% full copyright ownership." },
    { question: "What is a Lead Magnet?", answer: "A lead magnet is a high-value piece of gated content (like an eBook or a Case Study) that users receive in exchange for providing their email address." },
    { question: "How do you measure the success of content?", answer: "We look at organic traffic growth, time-on-page, backlink acquisition, and most importantly, how many form fills or sales the content directly attributed to." },
  ],
  relatedBlogs: [
    { title: "Why Your Blog Traffic Isn't Converting (And How to Fix It)", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "The Ultimate Guide to Topic Clusters and Pillar Pages", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "How to Write a B2B Case Study that Closes Deals", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "AI vs. Human Writers: The Future of SEO Content", link: "/blog", image: "/team_lekha.png" },
  ]
};
