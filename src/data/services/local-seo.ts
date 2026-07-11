import { 
  MapPin, Star, Navigation, Store, 
  Map, PhoneCall, CheckSquare, Search 
} from "lucide-react";
import { ServiceData } from "./types";

export const localSeoData: ServiceData = {
  slug: "local-seo",
  seo: {
    title: "Local SEO Expert in Hyderabad | Top GMB Optimization Agency",
    description: "Dominate the Google Local Map Pack and attract nearby customers with expert Local SEO and Google Business Profile optimization services in Hyderabad.",
    keywords: "local SEO Hyderabad, Google Business Profile optimization, GMB expert, local search ranking, SEO near me",
  },
  hero: {
    h1: "Local SEO & GMB Optimization",
    headline: "Dominate Local Search. Get More Foot Traffic.",
    description: "When people in your city search for your services, do you show up first? We optimize your Google Business Profile and local presence to ensure you dominate the 'Near Me' searches and steal market share from your local competitors.",
    benefits: ["#1 in Google Maps", "More In-Store Traffic", "Higher Call Volume", "5-Star Reputation"],
    primaryCta: "Get a Free Local SEO Audit",
    secondaryCta: "See Our Map Rankings",
    heroImage: "/images/services/local_seo_hero.png",
  },
  about: {
    title: "Why Local SEO is Your Biggest Opportunity",
    subtitle: "80% of local searches convert into a sale within 24 hours.",
    description: [
      "If you run a local business—a clinic, a restaurant, a law firm, or a retail store—your biggest asset isn't just your website. It's your Google Business Profile (GBP) and your visibility in the Google Map Pack.",
      "At IDM Smart Tech, we use advanced local SEO tactics to optimize your digital footprint. We don't just help you rank; we help you build an authoritative local brand that drives consistent foot traffic, phone calls, and revenue."
    ],
    stats: [
      { label: "Local Search Conversions", value: "80%" },
      { label: "Map Pack Visibility", value: "3x" },
    ],
    aboutImage: "/images/services/local_seo_about.png",
  },
  features: [
    { title: "Google Business Profile Setup", description: "Complete, optimized setup of your GBP with correct categories, attributes, and geo-tagged images.", icon: MapPin },
    { title: "Local Citation Building", description: "Consistent NAP (Name, Address, Phone) submissions across top local directories like Yelp and JustDial.", icon: Navigation },
    { title: "Review Management", description: "Automated systems to generate 5-star reviews from happy customers and mitigate negative feedback.", icon: Star },
    { title: "On-Page Local SEO", description: "Optimizing your website's location pages with city-specific keywords and local schema markup.", icon: Search },
    { title: "GMB Post Strategy", description: "Regular, keyword-rich Google Business posts to signal active engagement to Google's algorithm.", icon: CheckSquare },
    { title: "Local Link Building", description: "Acquiring backlinks from local news sites, sponsorships, and community organizations.", icon: Store },
    { title: "Spam Fighting", description: "Actively reporting and removing fake competitor listings that are pushing you down the map pack.", icon: Map },
    { title: "Call & Lead Tracking", description: "Detailed reporting showing exactly how many calls and direction requests came from your listing.", icon: PhoneCall },
  ],
  benefits: [
    { title: "Dominate the 'Map Pack'", description: "Secure one of the coveted top 3 spots on Google Maps where 90% of local clicks happen." },
    { title: "Increase Phone Calls", description: "Make it effortless for customers to tap 'Call Now' directly from the search results page." },
    { title: "Drive Foot Traffic", description: "Capture high-intent buyers who are searching for your exact services while standing just miles away." },
    { title: "Build Local Trust", description: "A highly-rated, verified Google profile instantly establishes credibility over your competitors." },
    { title: "Cost-Effective Leads", description: "Local SEO provides highly qualified, organic leads without paying per click like you do with ads." },
  ],
  whyChooseUs: [
    "Certified GBP Experts",
    "Proven Map Pack Rankings",
    "Geo-Grid Tracking Reports",
    "Automated Review Systems",
    "100% White Hat Tactics",
    "Focus on Local Intent",
    "Competitor Spam Removal",
    "Custom Location Pages"
  ],
  process: [
    { step: "01", title: "Local Audit", description: "Running geo-grid reports to see exactly where you rank in different parts of your city." },
    { step: "02", title: "GBP Optimization", description: "Claiming, verifying, and fully optimizing your Google Business Profile." },
    { step: "03", title: "Citation Cleanup", description: "Fixing incorrect business information across the web to build Google's trust." },
    { step: "04", title: "Review Generation", description: "Implementing a simple system for your staff to ask for and receive more 5-star reviews." },
    { step: "05", title: "On-Page Tweaks", description: "Adding local schema markup and optimizing your website's location pages." },
    { step: "06", title: "Monthly Growth", description: "Adding weekly GMB posts, uploading geo-tagged photos, and building local links." },
  ],
  results: [
    { value: "3x", label: "More Phone Calls" },
    { value: "1st", label: "Page Rankings" },
    { value: "500+", label: "Reviews Generated" },
    { value: "85%", label: "Local Visibility" },
  ],
  industries: [
    "Dental & Medical Clinics",
    "Restaurants & Cafes",
    "Law Firms & Advocates",
    "Plumbers & Electricians",
    "Real Estate Agents",
    "Salons & Spas",
    "Gyms & Fitness Centers",
    "Auto Repair Shops"
  ],
  faqs: [
    { question: "What is the Google Map Pack?", answer: "The Map Pack is the section of Google search results that shows a map and three local business listings. Ranking here is the primary goal of Local SEO." },
    { question: "How long does it take to rank on Google Maps?", answer: "If your profile is new, it can take 3-6 months of consistent optimization. If you already have an established profile, we often see significant improvements in 30-90 days." },
    { question: "Do I need a physical address for Local SEO?", answer: "Yes, you need a physical address to receive a verification postcard from Google. However, if you are a Service Area Business (like a plumber), you can hide your address on the public listing." },
    { question: "How important are Google Reviews?", answer: "Extremely important. Reviews are a top ranking factor for Local SEO. Furthermore, consumers rarely click on listings with less than a 4-star rating." },
    { question: "Can you help remove negative reviews?", answer: "We cannot delete legitimate reviews left by real customers. However, we can report reviews that violate Google's policies and help you generate enough positive reviews to bury the negative ones." },
    { question: "What are local citations?", answer: "Citations are online mentions of your business Name, Address, and Phone number (NAP) on directories like Yelp, JustDial, and YellowPages. Consistent citations build trust with Google." },
    { question: "Do I need a website for Local SEO?", answer: "While a Google Business Profile can exist without a website, having an optimized, fast-loading website significantly boosts your chances of ranking in the top 3 Map Pack spots." },
    { question: "What happens if a competitor is using a fake address?", answer: "As part of our spam-fighting service, we actively monitor the map pack and report competitors who are violating Google's guidelines (like using fake addresses or keyword stuffing their business name)." },
  ],
  relatedBlogs: [
    { title: "How to Rank in the Google Local 3-Pack", link: "/blog", image: "/team_pradeep_goud.PNG" },
    { title: "The Ultimate Guide to Google Business Profile Optimization", link: "/blog", image: "/team_g_sravani.jpeg" },
    { title: "How to Get More 5-Star Reviews for Your Business", link: "/blog", image: "/team_triveni.jpeg" },
    { title: "Why Inconsistent NAP Data is Killing Your Local SEO", link: "/blog", image: "/team_lekha.png" },
  ]
};
