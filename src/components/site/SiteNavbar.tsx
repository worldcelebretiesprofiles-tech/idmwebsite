import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  BarChart3,
  Globe,
  Code2,
  Smartphone,
  Palette,
  Sparkles,
  MapPin,
  Compass,
  ArrowRight,
} from "lucide-react";
import { BrandMark } from "./BrandMark";

type MenuItem = { label: string; desc?: string };
type MenuGroup = { title: string; icon: React.ComponentType<{ className?: string }>; items: MenuItem[] };

const MEGA: MenuGroup[] = [
  {
    title: "Digital Marketing",
    icon: BarChart3,
    items: [
      { label: "SEO", desc: "Rank on Google" },
      { label: "Local SEO", desc: "Own your city" },
      { label: "Google Ads", desc: "High-intent traffic" },
      { label: "Meta Ads", desc: "Facebook & Instagram" },
      { label: "Social Media Marketing" },
      { label: "Content Marketing" },
      { label: "Email Marketing" },
      { label: "YouTube Marketing" },
    ],
  },
  {
    title: "Website Development",
    icon: Globe,
    items: [
      { label: "Business Websites" },
      { label: "Corporate Websites" },
      { label: "Landing Pages" },
      { label: "Ecommerce", desc: "Shopify & custom" },
      { label: "WordPress" },
      { label: "Web Applications" },
    ],
  },
  {
    title: "Software & Apps",
    icon: Code2,
    items: [
      { label: "CRM Solutions" },
      { label: "ERP Systems" },
      { label: "Inventory & Billing" },
      { label: "Hospital Management" },
      { label: "School Management" },
      { label: "Custom Software" },
    ],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    items: [
      { label: "Android" },
      { label: "iOS" },
      { label: "Flutter" },
      { label: "React Native" },
      { label: "Progressive Web Apps" },
    ],
  },
  {
    title: "Branding & Creative",
    icon: Palette,
    items: [
      { label: "Logo Design" },
      { label: "Brand Identity" },
      { label: "Social Creatives" },
      { label: "Video Editing" },
      { label: "Motion Graphics" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Sparkles,
    items: [
      { label: "AI Chatbots" },
      { label: "CRM Automation" },
      { label: "Workflow Automation" },
      { label: "WhatsApp Automation" },
      { label: "AI Solutions" },
    ],
  },
  {
    title: "Local Business",
    icon: MapPin,
    items: [
      { label: "Google Business Profile" },
      { label: "Google Maps Ranking" },
      { label: "Citation Building" },
      { label: "Reputation Management" },
    ],
  },
  {
    title: "Consulting",
    icon: Compass,
    items: [
      { label: "Business Consulting" },
      { label: "Digital Strategy" },
      { label: "Technology Consulting" },
      { label: "AI Transformation" },
    ],
  },
];

const NAV: { label: string; href: string; hasMega?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 20,
          paddingBottom: scrolled ? 10 : 20,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between gap-6 rounded-full px-4 pl-5 pr-2 transition-all duration-300 ${
              scrolled
                ? "glass shadow-elegant"
                : "bg-transparent"
            }`}
            style={{ borderColor: scrolled ? undefined : "transparent" }}
          >
            <BrandMark variant={scrolled ? "dark" : "light"} />

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              onMouseLeave={() => setMegaOpen(false)}
            >
              {NAV.map((item) =>
                item.hasMega ? (
                  <button
                    key={item.label}
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      scrolled ? "text-navy-deep hover:bg-navy-deep/5" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onMouseEnter={() => setMegaOpen(false)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      scrolled ? "text-navy-deep hover:bg-navy-deep/5" : "text-white/90 hover:text-white"
                    }`}
                    activeProps={{
                      className: scrolled
                        ? "rounded-full px-4 py-2 text-sm font-semibold text-navy-deep bg-navy-deep/5"
                        : "rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/10",
                    }}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold-glow transition-transform hover:-translate-y-0.5 md:inline-flex"
              >
                Get Free Consultation
              </Link>
              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
                  scrolled ? "bg-navy-deep text-white" : "bg-white/10 text-white backdrop-blur"
                }`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mega menu */}
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="mx-auto mt-3 hidden max-w-6xl overflow-hidden rounded-3xl glass shadow-premium lg:block"
              >
                <div className="grid grid-cols-4 gap-6 p-8">
                  {MEGA.map((group) => (
                    <div key={group.title}>
                      <div className="mb-3 flex items-center gap-2 text-navy-deep">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-deep/5">
                          <group.icon className="h-4 w-4" />
                        </span>
                        <h4 className="text-xs font-bold uppercase tracking-widest">{group.title}</h4>
                      </div>
                      <ul className="space-y-1">
                        {group.items.slice(0, 6).map((it) => (
                          <li key={it.label}>
                            <Link
                              to="/services"
                              onClick={() => setMegaOpen(false)}
                              className="group/link block rounded-lg px-2 py-1.5 text-sm text-ink transition-colors hover:bg-gold-soft/60"
                            >
                              <span className="font-medium">{it.label}</span>
                              {it.desc && (
                                <span className="ml-2 text-xs text-muted-foreground">{it.desc}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-black/5 bg-navy-deep px-8 py-5 text-white">
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-gold" />
                    <p className="text-sm">
                      Not sure where to start? Book a free 30-minute growth audit.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-deep"
                  >
                    Book Free Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-premium"
            >
              <div className="flex items-center justify-between border-b border-black/5 p-5">
                <BrandMark variant="dark" />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep/5 text-navy-deep"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-1">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-navy-deep hover:bg-navy-deep/5"
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-navy-deep p-5 text-white">
                  <p className="text-sm text-white/70">Ready to grow?</p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    Let's build your success.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-navy-deep"
                  >
                    Get Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
