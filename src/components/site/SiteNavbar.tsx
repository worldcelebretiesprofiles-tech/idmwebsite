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

const SERVICES_CATEGORIES = [
  {
    title: "Digital Marketing",
    hasChevron: true,
    items: [
      { label: "Google Ads", href: "/services" },
      { label: "Lead Generation", href: "/services" },
      { label: "Social Media Marketing", href: "/services" },
      { label: "Search Engine Optimization", href: "/services" },
      { label: "Local SEO", href: "/services" },
      { label: "AI SEO", href: "/services" },
      { label: "Social Media Management", href: "/services" },
      { label: "Content Marketing", href: "/services" },
      { label: "Email Marketing", href: "/services" },
    ],
  },
  {
    title: "Web Solutions",
    hasChevron: true,
    items: [
      { label: "Business Websites", href: "/services" },
      { label: "Corporate Websites", href: "/services" },
      { label: "Landing Pages", href: "/services" },
      { label: "Ecommerce", href: "/services" },
      { label: "WordPress Solutions", href: "/services" },
      { label: "Web Applications", href: "/services" },
    ],
  },
  {
    title: "Branding",
    hasChevron: false,
    items: [
      { label: "Logo Design", href: "/services" },
      { label: "Brand Identity", href: "/services" },
      { label: "Social Creatives", href: "/services" },
      { label: "Video Editing", href: "/services" },
      { label: "Motion Graphics", href: "/services" },
    ],
  },
  {
    title: "Influencer Marketing",
    hasChevron: false,
    items: [
      { label: "Influencer Outreach", href: "/services" },
      { label: "Campaign Strategy", href: "/services" },
      { label: "Content Creation", href: "/services" },
      { label: "Performance Tracking", href: "/services" },
      { label: "Platform Partnerships", href: "/services" },
    ],
  },
];

const NAV: { label: string; href: string; hasMega?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Digital Marketing");

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
                  <div key={item.label} className="relative">
                    <button
                      onMouseEnter={() => setMegaOpen(true)}
                      onClick={() => setMegaOpen((v) => !v)}
                      className={`group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        scrolled ? "text-navy-deep hover:bg-navy-deep/5" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Mega menu */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          onMouseEnter={() => setMegaOpen(true)}
                          onMouseLeave={() => setMegaOpen(false)}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden w-[880px] overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 shadow-premium lg:block z-50"
                        >
                          <div className="grid grid-cols-4 gap-6">
                            {SERVICES_CATEGORIES.map((cat) => (
                              <div key={cat.title} className="space-y-4">
                                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-royal border-b border-black/5 pb-2">
                                  {cat.title}
                                </h4>
                                <div className="flex flex-col gap-2">
                                  {cat.items.map((it) => (
                                    <Link
                                      key={it.label}
                                      to={it.href}
                                      onClick={() => setMegaOpen(false)}
                                      className="text-xs font-medium text-ink hover:text-royal transition-colors"
                                    >
                                      {it.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            
                            <div className="col-span-4 mt-4 border-t border-black/5 pt-4 flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">Looking for custom solutions?</span>
                              <Link
                                to="/contact"
                                onClick={() => setMegaOpen(false)}
                                className="font-bold text-royal hover:underline flex items-center gap-0.5"
                              >
                                Talk to our experts <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
