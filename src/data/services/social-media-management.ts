import { 
  Heart, Image as ImageIcon, Send, Clock, 
  MessageCircle, Video, LayoutDashboard, Share2, FileText, Hash, BarChart3 
} from "lucide-react";
import { ServiceData } from "./types";

export const socialMediaManagementData: ServiceData = {
  slug: "social-media-management",
  seo: {
    title: "Expert Social Media Management Services | IDM Smart Tech",
    description: "Grow your online presence with professional social media management. We handle content creation, community engagement, and brand building.",
    keywords: "social media management, social media manager, Instagram growth, Facebook page management, brand building online",
  },
  hero: {
    h1: "Social Media Management",
    headline: "Your Brand, Consistently Brilliant.",
    description: "You don't have time to create posts, write captions, and respond to comments every single day. Let our team of social media experts take over your accounts and build a beautiful, engaged community while you focus on running your business.",
    benefits: ["Consistent Posting", "Professional Design", "Active Community Engagement", "Zero Stress for You"],
    primaryCta: "Get a Free Social Audit",
    secondaryCta: "View Our Work",
    heroImage: "/images/services/sm_management_hero.png",
  },
  about: {
    title: "Why You Need a Dedicated Social Media Manager",
    subtitle: "Inconsistency is killing your brand's trust.",
    description: [
      "When a potential customer looks you up on Instagram or Facebook and sees that you haven't posted in three months, they assume you're out of business. Social media requires daily dedication, creativity, and strategy.",
      "At IDM Smart Tech, we act as your in-house social team. We handle the entire process from ideation to graphic design, caption writing, hashtag research, and community management. We ensure your brand looks active, professional, and trustworthy every single day."
    ],
    stats: [
      { label: "Content Produced", value: "500+" },
      { label: "Hours Saved", value: "40/mo" },
    ],
    aboutImage: "/images/services/sm_management_about.png",
  },
  features: [
    { title: "Custom Content Creation", description: "Eye-catching graphics and carousels designed strictly according to your brand guidelines.", icon: ImageIcon },
    { title: "Caption & Copywriting", description: "Engaging, brand-voice aligned captions designed to encourage saves, shares, and comments.", icon: FileText },
    { title: "Content Scheduling", description: "Strategic publishing at the exact times when your specific audience is most active.", icon: Clock },
    { title: "Community Management", description: "Prompt responses to comments, DMs, and mentions to foster a loyal online community.", icon: MessageCircle },
    { title: "Reels & Short-Form Video", description: "Editing and publishing trending video content to maximize algorithmic reach.", icon: Video },
    { title: "Hashtag Strategy", description: "Researching the optimal mix of broad, niche, and local hashtags to increase organic discoverability.", icon: Hash },
    { title: "Profile Optimization", description: "Ensuring your bios, highlight covers, and links are perfectly optimized for conversions.", icon: LayoutDashboard },
    { title: "Monthly Analytics", description: "Detailed reports on follower growth, profile visits, and top-performing content.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Save Massive Time", description: "Free up dozens of hours every month by handing off content creation and posting to experts." },
    { title: "Build Brand Authority", description: "A beautifully curated feed establishes your business as a premium, trustworthy option in your industry." },
    { title: "Stay Top of Mind", description: "Consistent daily posting ensures your brand is the first one customers think of when they are ready to buy." },
    { title: "Professional Aesthetics", description: "Say goodbye to amateur, pixelated graphics. Your feed will look like it belongs to a Fortune 500 company." },
    { title: "Foster Customer Loyalty", description: "Active community management makes your customers feel heard, valued, and loyal to your brand." },
  ],
  whyChooseUs: [
    "Full-Service In-House Team",
    "Custom Brand Guidelines",
    "No Cookie-Cutter Templates",
    "Proactive Trend Monitoring",
    "Dedicated Account Manager",
    "Responsive DM Management",
    "Monthly Strategy Calls",
    "Transparent Approval Process"
  ],
  process: [
    { step: "01", title: "Onboarding & Audit", description: "We learn your brand voice, visual identity, and audit your current social profiles." },
    { step: "02", title: "Strategy & Planning", description: "Developing content pillars and establishing the monthly posting schedule." },
    { step: "03", title: "Content Creation", description: "Our designers and copywriters create a batch of high-quality posts and graphics." },
    { step: "04", title: "Client Approval", description: "You review the content calendar via our portal and approve or request revisions." },
    { step: "05", title: "Publishing & Engagement", description: "We schedule the approved posts and actively engage with your community daily." },
    { step: "06", title: "Reporting", description: "We provide a comprehensive monthly report detailing growth and engagement metrics." },
  ],
  results: [
    { value: "40 hrs", label: "Saved per Month" },
    { value: "3x", label: "Follower Growth" },
    { value: "500+", label: "Posts Created" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  industries: [
    "Restaurants & Hospitality",
    "Fashion & Lifestyle Brands",
    "Health, Fitness & Wellness",
    "Real Estate Agents",
    "Personal Brands & Influencers",
    "E-Commerce Retailers",
    "B2B Consulting Firms",
    "Salons & Aesthetics Clinics"
  ],
  faqs: [
    { question: "What is the difference between Management and Marketing?", answer: "Social Media Management is the day-to-day operation of your accounts (posting, designing, replying). Marketing implies running paid ad campaigns to generate direct leads." },
    { question: "Do you reply to my DMs?", answer: "Yes, depending on your package, we offer community management which includes replying to standard DMs and comments based on an FAQ document we build with you." },
    { question: "How many platforms will you manage?", answer: "We can manage Instagram, Facebook, LinkedIn, Twitter (X), TikTok, and Pinterest. We recommend focusing on the 2 or 3 platforms where your audience actually hangs out." },
    { question: "Can I still post on my own accounts?", answer: "Absolutely! It's still your account. Many of our clients like to post impromptu 'behind the scenes' stories while we handle the heavy lifting of the permanent feed posts." },
    { question: "Do you use templates?", answer: "We create custom templates specifically for your brand. We do not use generic, recognizable Canva templates that your competitors might also be using." },
    { question: "How do you know what my brand voice sounds like?", answer: "During our intensive onboarding process, we conduct brand voice workshops and review your past communications to perfectly mimic your tone, whether it's corporate, playful, or luxurious." },
    { question: "What if I don't like a post?", answer: "Nothing goes live without your approval. You will receive the content calendar two weeks in advance, giving you plenty of time to request changes or veto a post entirely." },
    { question: "Do you guarantee follower growth?", answer: "While organic management absolutely leads to follower growth, we do not guarantee specific numbers. Buying fake followers ruins accounts. We focus on slow, steady, high-quality organic growth." },
  ],
  relatedBlogs: [
    { title: "How Often Should a Business Post on Instagram?", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "Why Your Brand Aesthetic Matters More Than Ever", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "The Ultimate Guide to Responding to Negative Comments", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "How to Build a Social Media Content Calendar", link: "/blog", image: "/team_lekha.png" },
  ]
};
