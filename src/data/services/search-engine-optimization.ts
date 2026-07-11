import { 
  Search, LineChart, Target, Zap, Globe, FileText, 
  MapPin, BarChart3, Users, Briefcase 
} from "lucide-react";
import { ServiceData } from "./types";

export const seoServiceData: ServiceData = {
  slug: "seo",
  seo: {
    title: "Best SEO Agency in Hyderabad | IDM Smart Tech",
    description: "Drive organic traffic and rank #1 on Google with the best SEO agency in Hyderabad. We specialize in local, technical, and e-commerce SEO to grow your revenue.",
    keywords: "SEO agency in Hyderabad, local SEO services, best SEO company, organic lead generation, Google ranking",
  },
  hero: {
    h1: "Search Engine Optimization",
    headline: "Rank Higher, Drive Traffic, Generate Revenue.",
    description: "Stop losing customers to your competitors. Our data-driven SEO strategies help ambitious brands dominate search results and turn organic traffic into predictable growth.",
    benefits: ["#1 Page Rankings", "High-Quality Leads", "Local SEO Domination", "Technical Optimization"],
    primaryCta: "Book a Free SEO Audit",
    secondaryCta: "View Our SEO Results",
    heroImage: "/images/services/seo_hero.png",
  },
  about: {
    title: "What is SEO & Why You Need It",
    subtitle: "More than just keywords—it's about revenue.",
    description: [
      "In today's digital landscape, simply having a website isn't enough. If your potential customers can't find you on the first page of Google, they are buying from your competitors.",
      "At IDM Smart Tech, we don't just chase rankings; we focus on ROI. Our comprehensive SEO strategies combine technical excellence, high-quality content, and authoritative link-building to ensure your business dominates the search engine results pages (SERPs)."
    ],
    stats: [
      { label: "Search Clicks", value: "68%" },
      { label: "Organic ROI", value: "12.2x" },
    ],
    aboutImage: "/images/services/seo_about.png",
  },
  features: [
    { title: "Comprehensive SEO Audit", description: "In-depth analysis of your current website to identify technical bottlenecks and growth opportunities.", icon: Search },
    { title: "Keyword Research & Strategy", description: "Identifying high-intent search terms that your ideal customers are actively using to find your services.", icon: Target },
    { title: "On-Page Optimization", description: "Optimizing title tags, meta descriptions, headers, and internal linking structures for maximum relevance.", icon: FileText },
    { title: "Technical SEO", description: "Improving site speed, mobile responsiveness, crawlability, and schema markup to appease search engines.", icon: Zap },
    { title: "Local SEO & GBP", description: "Optimizing your Google Business Profile to dominate the local map pack and attract nearby customers.", icon: MapPin },
    { title: "Content Marketing", description: "Creating authoritative, engaging, and SEO-friendly content that ranks well and converts visitors.", icon: Globe },
    { title: "Link Building", description: "Acquiring high-quality backlinks from authoritative domains to boost your website's domain authority.", icon: Briefcase },
    { title: "Performance Reporting", description: "Transparent, real-time reporting on keyword rankings, traffic growth, and ROI metrics.", icon: BarChart3 },
  ],
  benefits: [
    { title: "More Qualified Leads", description: "Attract visitors who are actively searching for exactly what you offer, leading to higher conversion rates." },
    { title: "Better Search Rankings", description: "Secure top positions on Google for the most valuable and competitive keywords in your industry." },
    { title: "Long-Term Traffic", description: "Unlike paid ads that stop when you stop paying, organic SEO builds compounding, long-term traffic." },
    { title: "Brand Authority", description: "Ranking on the first page of Google instantly builds trust and credibility with your potential customers." },
    { title: "Higher ROI", description: "SEO provides one of the highest returns on investment of any digital marketing channel." },
  ],
  whyChooseUs: [
    "ROI Driven Strategies",
    "Transparent Monthly Reporting",
    "100% White Hat SEO Practices",
    "Certified SEO Experts",
    "Customized Growth Strategies",
    "Affordable & Scalable Packages",
    "Dedicated Account Manager",
    "Latest Premium Marketing Tools"
  ],
  process: [
    { step: "01", title: "Consultation", description: "We understand your business goals, target audience, and current digital footprint." },
    { step: "02", title: "Research", description: "Deep dive into competitor analysis, keyword opportunities, and technical audits." },
    { step: "03", title: "Strategy", description: "Developing a customized, multi-channel SEO roadmap designed specifically for your industry." },
    { step: "04", title: "Implementation", description: "Executing technical fixes, on-page optimizations, and content creation." },
    { step: "05", title: "Optimization", description: "Continuously refining strategies based on data, algorithm updates, and user behavior." },
    { step: "06", title: "Reporting", description: "Providing transparent insights into traffic growth, rankings, and lead generation." },
  ],
  results: [
    { value: "7+", label: "Years Experience" },
    { value: "150+", label: "Happy Clients" },
    { value: "10,000+", label: "Projects Completed" },
    { value: "15,000+", label: "Qualified Leads" },
  ],
  industries: [
    "Healthcare & Hospitals",
    "Real Estate & Infrastructure",
    "E-Commerce & Retail",
    "Education & Institutes",
    "Legal & Advocates",
    "Travel & Hospitality",
    "Local Businesses (Salons, Clinics)",
    "B2B Tech & Software"
  ],
  faqs: [
    { question: "How long does SEO take to show results?", answer: "Typically, noticeable SEO results take between 3 to 6 months. However, this depends on your website's current authority, competition, and the aggressiveness of the strategy." },
    { question: "What is the difference between On-Page and Off-Page SEO?", answer: "On-page SEO refers to optimizations made directly on your website (content, keywords, speed). Off-page SEO involves external signals like backlinks and brand mentions that boost your site's authority." },
    { question: "Do you guarantee #1 rankings on Google?", answer: "No reputable agency can guarantee a #1 spot due to Google's constantly changing algorithms. However, we guarantee proven strategies that significantly improve your rankings and traffic." },
    { question: "Is Local SEO different from regular SEO?", answer: "Yes, Local SEO specifically targets geographic searches (like 'near me' or specific cities) and heavily relies on optimizing your Google Business Profile." },
    { question: "How do you measure SEO success?", answer: "We measure success through organic traffic growth, keyword ranking improvements, and most importantly, the number of leads or sales generated from organic search." },
    { question: "Why is Technical SEO important?", answer: "If search engines can't effectively crawl and index your website due to technical errors, your content won't rank, no matter how good it is." },
    { question: "Will I receive monthly reports?", answer: "Absolutely. We provide transparent, detailed monthly reports outlining our activities, your ranking improvements, and traffic statistics." },
    { question: "Do I need SEO if I'm running Google Ads?", answer: "Yes. While Google Ads provide immediate traffic, SEO builds long-term, sustainable traffic. Using both simultaneously maximizes your overall search visibility." },
    { question: "What happens if I stop doing SEO?", answer: "SEO is an ongoing process. If you stop, your competitors who are actively optimizing will eventually outrank you, leading to a gradual decline in your organic traffic." },
    { question: "Do you create content for SEO?", answer: "Yes, our team of skilled copywriters creates SEO-optimized, engaging content designed to rank well and convert visitors into customers." },
  ],
  relatedBlogs: [
    { title: "10 SEO Trends You Can't Ignore in 2024", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "How to Optimize Your Google Business Profile", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "The Ultimate Guide to Technical SEO", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "Why Local SEO is Crucial for Small Businesses", link: "/blog", image: "/team_lekha.png" },
    { title: "On-Page vs. Off-Page SEO: What You Need to Know", link: "/blog", image: "/team_r_rahul.PNG" },
    { title: "How Long Does It Really Take to See SEO Results?", link: "/blog", image: "/team_anand.png" },
    { title: "Top 5 SEO Mistakes Costing You Revenue", link: "/blog", image: "/raghavendra_goud_founder.jpeg" },
    { title: "The Role of High-Quality Backlinks in SEO", link: "/blog", image: "/BantaramSanvika_founder.png" },
  ]
};
