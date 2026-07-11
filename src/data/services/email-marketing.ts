import { 
  Mail, Users, Zap, TrendingUp, 
  Settings, PenTool, BarChart3, Inbox 
} from "lucide-react";
import { ServiceData } from "./types";

export const emailMarketingData: ServiceData = {
  slug: "email-marketing",
  seo: {
    title: "Email Marketing Services & Automation | IDM Smart Tech",
    description: "Generate massive ROI from your existing audience with our email marketing and automation services. We design, write, and manage high-converting campaigns.",
    keywords: "email marketing agency, email automation, newsletter management, Klaviyo expert, Mailchimp marketing",
  },
  hero: {
    h1: "Email Marketing & Automation",
    headline: "The Highest ROI Channel in Digital Marketing.",
    description: "Stop renting your audience from social media platforms. Own your traffic. We build high-converting email marketing campaigns and automated flows that turn your subscribers into repeat customers on autopilot.",
    benefits: ["40x Average ROI", "Automated Revenue", "High Open Rates", "Customer Retention"],
    primaryCta: "Get a Free Email Audit",
    secondaryCta: "View Automation Flows",
    heroImage: "/images/services/email_hero.png",
  },
  about: {
    title: "Why You Need a Professional Email Strategy",
    subtitle: "Your email list is your most valuable digital asset.",
    description: [
      "Social media algorithms change daily, and ad costs continue to rise. But your email list belongs entirely to you. It is the only channel where you have a direct line to your customers without paying a middleman.",
      "At IDM Smart Tech, we don't just send out boring weekly newsletters. We architect advanced behavioral automation flows (like abandoned cart, welcome series, and post-purchase upsells) that generate revenue while you sleep."
    ],
    stats: [
      { label: "Avg. ROI for Email", value: "4,200%" },
      { label: "Revenue from Flows", value: "30%+" },
    ],
    aboutImage: "/images/services/email_about.png",
  },
  features: [
    { title: "Automated Email Flows", description: "Setting up 'set-it-and-forget-it' automations like Welcome Series, Abandoned Cart, and Win-Back campaigns.", icon: Zap },
    { title: "Campaign Management", description: "Designing and sending beautiful, engaging weekly newsletters and promotional broadcasts.", icon: Mail },
    { title: "List Segmentation", description: "Dividing your audience based on their buying behavior to send highly personalized, relevant offers.", icon: Users },
    { title: "Copywriting & Design", description: "Writing punchy subject lines and designing custom email templates that perfectly match your brand.", icon: PenTool },
    { title: "Deliverability Optimization", description: "Ensuring your emails actually land in the Primary Inbox, avoiding the dreaded Spam or Promotions folders.", icon: Inbox },
    { title: "A/B Split Testing", description: "Continuously testing subject lines, send times, and button colors to maximize open and click rates.", icon: TrendingUp },
    { title: "Platform Migration", description: "Seamlessly migrating your list from Mailchimp to advanced platforms like Klaviyo or ActiveCampaign.", icon: Settings },
    { title: "Advanced Analytics", description: "Detailed tracking of open rates, click-through rates, and exact revenue generated per email sent.", icon: BarChart3 },
  ],
  benefits: [
    { title: "Unbeatable ROI", description: "Email marketing consistently delivers the highest ROI of any marketing channel, averaging $42 for every $1 spent." },
    { title: "Automated Revenue", description: "Once we build your core automation flows, they run 24/7, generating sales without any ongoing effort." },
    { title: "Customer Retention", description: "It is 5x cheaper to retain an existing customer than acquire a new one. Email keeps your brand top-of-mind." },
    { title: "First-Party Data", description: "Protect your business from algorithm changes by owning the direct contact information of your audience." },
    { title: "Highly Personalized", description: "Unlike social media, you can send tailored messages to specific individuals based on their past purchase history." },
  ],
  whyChooseUs: [
    "Klaviyo & ActiveCampaign Experts",
    "Focus on E-commerce & B2B",
    "Advanced Behavioral Segmentation",
    "In-House Copywriters",
    "Custom HTML Template Design",
    "Strict Deliverability Monitoring",
    "Data-Driven A/B Testing",
    "Transparent Revenue Attribution"
  ],
  process: [
    { step: "01", title: "List & Tech Audit", description: "Reviewing your current platform, list health, and deliverability status." },
    { step: "02", title: "Strategy & Strategy Mapping", description: "Planning the core automation flows and mapping out a monthly campaign calendar." },
    { step: "03", title: "Flow Development", description: "Writing, designing, and building the automated sequences (Welcome, Cart, Win-back)." },
    { step: "04", title: "List Cleaning", description: "Scrubbing your list of inactive or fake emails to protect your sender reputation." },
    { step: "05", title: "Campaign Execution", description: "Designing and sending out your regular weekly or bi-weekly broadcast emails." },
    { step: "06", title: "Analyze & Optimize", description: "Reviewing open rates and revenue data to refine subject lines and content strategy." },
  ],
  results: [
    { value: "40x", label: "Average ROI" },
    { value: "35%", label: "Average Open Rate" },
    { value: "30%+", label: "Revenue from Flows" },
    { value: "99%", label: "Inbox Delivery Rate" },
  ],
  industries: [
    "E-Commerce Brands",
    "B2B Software & SaaS",
    "Retail & Fashion",
    "Real Estate Developers",
    "Online Education & Coaches",
    "Non-Profits & Charities",
    "Event Organizers",
    "B2B Service Providers"
  ],
  faqs: [
    { question: "How often should I email my list?", answer: "For e-commerce, 2-3 times a week is standard. For B2B, once a week or bi-weekly is often best. The key is providing consistent value so you aren't just spamming them with sales pitches." },
    { question: "What is an automated flow?", answer: "A flow is a sequence of emails triggered by a specific action. For example, if someone leaves items in their cart, an 'Abandoned Cart' flow automatically sends them a reminder email 4 hours later." },
    { question: "Why are my emails going to spam?", answer: "This is a deliverability issue. It can happen if you buy lists, use deceptive subject lines, or have a low open rate (which tells Google your emails aren't wanted). We run technical audits to fix this." },
    { question: "Which email platform do you recommend?", answer: "For E-Commerce, we strictly recommend Klaviyo. For B2B, we recommend HubSpot or ActiveCampaign. We can manage your account on whichever platform you currently use." },
    { question: "What is a good open rate?", answer: "Since Apple's Mail Privacy Protection update, open rates are slightly inflated. However, a healthy list should consistently see open rates between 30% and 45%." },
    { question: "Can you help me grow my email list?", answer: "Yes! We design high-converting pop-ups, lead magnets, and landing pages to aggressively capture new emails from your website visitors." },
    { question: "Do you write the emails for me?", answer: "Yes. We handle everything from the strategic planning and copywriting to the graphic design and technical setup in your platform." },
    { question: "Is email marketing dead?", answer: "Not even close. Email is still the #1 driver of retained revenue for almost every major brand in the world. People check their email daily; you just have to make yours worth reading." },
  ],
  relatedBlogs: [
    { title: "The 3 Email Flows Every E-Commerce Store Needs", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "How to Keep Your Emails Out of the Spam Folder", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "10 Subject Line Formulas That Actually Get Opened", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "Klaviyo vs. Mailchimp: Which is Better for Your Business?", link: "/blog", image: "/team_lekha.png" },
  ]
};
