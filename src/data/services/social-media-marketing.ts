import { 
  ThumbsUp, Share2, MessageCircle, BarChart3, 
  Users, Smartphone, Video, Eye, Target, FileText, Briefcase 
} from "lucide-react";
import { ServiceData } from "./types";

export const socialMediaMarketingData: ServiceData = {
  slug: "social-media-marketing",
  seo: {
    title: "Best Social Media Marketing Agency in Hyderabad | IDM Smart Tech",
    description: "Build a loyal community and drive sales with the top social media marketing agency in Hyderabad. We manage Facebook, Instagram, LinkedIn, and more.",
    keywords: "social media marketing agency, SMM company Hyderabad, Facebook marketing, Instagram ads, social media management",
  },
  hero: {
    h1: "Social Media Marketing",
    headline: "Turn Followers Into Brand Advocates & Customers.",
    description: "Build a magnetic brand presence on Facebook, Instagram, and LinkedIn. We create scroll-stopping content and targeted ad campaigns that drive engagement, trust, and revenue.",
    benefits: ["Explosive Brand Awareness", "High-Converting Ads", "Community Building", "Creative Content Strategy"],
    primaryCta: "Get a Social Media Audit",
    secondaryCta: "View Our Portfolio",
    heroImage: "/images/services/smm_hero.png",
  },
  about: {
    title: "Why Social Media Marketing is Non-Negotiable",
    subtitle: "Your customers are scrolling. Are they seeing you?",
    description: [
      "With billions of active users daily, social media is no longer just a place to share updates—it is the modern storefront for your business. If your brand isn't engaging audiences where they spend their time, your competitors certainly are.",
      "At IDM Smart Tech, we blend data-driven advertising with striking creative design. We don't just post for the sake of posting; we build strategic social funnels designed to increase brand loyalty and generate measurable sales."
    ],
    stats: [
      { label: "Avg. Engagement Lift", value: "340%" },
      { label: "Ad Reach Managed", value: "50M+" },
    ],
    aboutImage: "/images/services/smm_about.png",
  },
  features: [
    { title: "Meta Ads (Facebook & Instagram)", description: "Highly targeted, full-funnel ad campaigns designed to generate leads and e-commerce sales.", icon: Target },
    { title: "Content Strategy & Planning", description: "A comprehensive content calendar balancing educational, promotional, and entertaining posts.", icon: FileText },
    { title: "Video & Reels Production", description: "Short-form video content that leverages the algorithm to maximize organic reach and engagement.", icon: Video },
    { title: "Community Management", description: "Active monitoring, replying to comments, and engaging with your audience to build brand loyalty.", icon: MessageCircle },
    { title: "LinkedIn B2B Marketing", description: "Establishing thought leadership and generating high-ticket B2B leads through targeted networking.", icon: Briefcase },
    { title: "Influencer Collaborations", description: "Partnering with relevant influencers to amplify your brand's reach to established audiences.", icon: Users },
    { title: "Social Listening", description: "Monitoring brand mentions and industry trends to keep your strategy relevant and proactive.", icon: Eye },
    { title: "Performance Analytics", description: "Deep-dive reporting on follower growth, engagement rates, and ROI from social campaigns.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Massive Brand Awareness", description: "Put your brand in front of thousands of potential customers in your exact target demographic every single day." },
    { title: "Direct Customer Feedback", description: "Social media provides an instant feedback loop, allowing you to understand what your customers truly want." },
    { title: "Improved Brand Loyalty", description: "Consistent, authentic communication builds a community of loyal fans who prefer your brand over competitors." },
    { title: "Higher Conversion Rates", description: "Social proof (likes, comments, reviews) heavily influences purchasing decisions and increases overall conversions." },
    { title: "Cost-Effective Advertising", description: "Social media ads offer some of the lowest CPMs (cost per thousand impressions) of any advertising medium." },
  ],
  whyChooseUs: [
    "Data-Driven Creative Strategy",
    "In-House Design & Video Team",
    "Meta & LinkedIn Experts",
    "Focus on ROI, Not Just 'Likes'",
    "Proactive Community Management",
    "Custom Analytics Dashboards",
    "Trend-Responsive Content",
    "Dedicated Social Media Manager"
  ],
  process: [
    { step: "01", title: "Brand Audit", description: "Analyzing your current social presence, competitors, and target audience demographics." },
    { step: "02", title: "Strategy Development", description: "Creating a comprehensive content pillars strategy, visual identity, and advertising plan." },
    { step: "03", title: "Content Creation", description: "Our team designs graphics, shoots videos, and writes compelling captions tailored to each platform." },
    { step: "04", title: "Approval & Scheduling", description: "You review the content calendar, and we schedule everything for optimal posting times." },
    { step: "05", title: "Community Engagement", description: "We actively monitor comments, DMs, and mentions to foster community growth." },
    { step: "06", title: "Analytics & Scaling", description: "Monthly reviews of engagement data and ad performance to refine and scale the strategy." },
  ],
  results: [
    { value: "50M+", label: "Total Ad Reach" },
    { value: "340%", label: "Engagement Increase" },
    { value: "100+", label: "Brands Managed" },
    { value: "12x", label: "Avg. Ad ROAS" },
  ],
  industries: [
    "Fashion & Apparel",
    "Restaurants & Cafes",
    "Health & Fitness",
    "E-Commerce Brands",
    "Real Estate",
    "Entertainment & Events",
    "B2B Services",
    "Beauty & Skincare"
  ],
  faqs: [
    { question: "Which social media platforms should my business be on?", answer: "It depends on your audience. B2B businesses thrive on LinkedIn and Twitter. B2C visual brands do best on Instagram and TikTok. We will audit your business and recommend the platforms with the highest ROI potential." },
    { question: "Do you create the content or do I have to provide it?", answer: "We are a full-service agency. Our in-house team handles everything: graphic design, video editing, copywriting, and strategy. You can provide raw assets, or we can shoot them for you." },
    { question: "What is the difference between Social Media Marketing and Management?", answer: "Management is focused on organic growth—posting content, community building, and brand presence. Marketing (or Advertising) involves paid campaigns to drive immediate leads and sales." },
    { question: "How often will you post on my accounts?", answer: "Posting frequency depends on the selected package and strategy. Typically, we recommend 3-5 high-quality posts per week per platform, supplemented by daily Stories." },
    { question: "Can social media actually generate sales?", answer: "Absolutely. Through targeted Meta (Facebook/Instagram) advertising and shoppable posts, we build direct response funnels that turn scrollers into buyers." },
    { question: "Do I get to approve the posts before they go live?", answer: "Yes. We operate with complete transparency. You will receive a content calendar in advance for review and approval before anything is published." },
    { question: "How long does it take to grow a following?", answer: "Organic growth is a marathon, not a sprint, taking 3-6 months to build a highly engaged community. If you need rapid growth, we supplement organic efforts with paid campaigns." },
    { question: "Who responds to comments and messages?", answer: "As part of our community management services, our team can handle initial responses, FAQ answering, and comment moderation based on guidelines we establish with you." },
  ],
  relatedBlogs: [
    { title: "The 2024 Guide to Instagram Reels Algorithm", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "How to Build a Social Media Strategy from Scratch", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "Organic vs. Paid Social: Finding the Right Balance", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "Why Your Business Needs a LinkedIn Strategy", link: "/blog", image: "/team_lekha.png" },
  ]
};
