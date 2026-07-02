import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Magnetic, Spotlight } from "./interactions";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Award,
  Search,
  BarChart3,
  Globe,
  Code2,
  Smartphone,
  Palette,
  MapPin,
  ShoppingBag,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Factory,
  Heart,
  Briefcase,
  Rocket,
  Check,
  Quote,
  Plus,
  Minus,
  Mail,
  Phone,
  MessageCircle,
  Zap,
  ShieldCheck,
  LineChart,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import { Reveal, Counter, SectionEyebrow } from "./motion-primitives";

/* -------------------- HERO -------------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-hero pb-24 pt-40 text-white lg:pb-40 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <motion.div style={{ y }} className="pointer-events-none absolute -left-32 top-24 h-[500px] w-[500px] rounded-full bg-royal/50 blur-3xl animate-float" aria-hidden />
      <motion.div style={{ y }} className="pointer-events-none absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl animate-float" aria-hidden />

      <motion.div style={{ opacity }} className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/90">
              AI-Powered Digital Growth Agency
            </span>
          </motion.div>

          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-[72px]">
            <WordReveal text="Grow Your Business" />
            <span className="mt-2 block">
              <span className="text-shimmer">with AI-Powered</span>{" "}
              <span className="text-white">Digital Marketing</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-[18px]"
          >
            We help businesses generate more leads, improve visibility, build premium websites, automate operations, and accelerate growth using digital marketing and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-navy-deep shadow-gold-glow transition-transform hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              View Our Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              4.9 · 200+ reviews
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Google Partner</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Meta Business Partner</span>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:grid-cols-4"
        >
          {[
            { n: 500, s: "+", l: "Projects Delivered", icon: Rocket },
            { n: 320, s: "%", l: "Avg. ROI Uplift", icon: TrendingUp },
            { n: 180, s: "+", l: "Happy Clients", icon: Users },
            { n: 12, s: "+", l: "Years of Craft", icon: Award },
          ].map((it) => (
            <div key={it.l} className="rounded-2xl p-4 text-center">
              <it.icon className="mx-auto mb-2 h-5 w-5 text-gold" />
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                <Counter to={it.n} suffix={it.s} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{it.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

/* -------------------- TRUSTED CLIENTS -------------------- */
export function TrustedClients() {
  const logos = ["Aureon", "Nordlys", "Meridian", "Solstice", "Kintaro", "Vantage", "Halcyon", "Zenith", "Larkspur", "Bramble"];
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by ambitious teams worldwide
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {row.map((name, i) => (
              <span
                key={i}
                className="font-display text-2xl font-bold tracking-tight text-navy-deep/40 transition-colors hover:text-navy-deep"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
export function About() {
  return (
    <section id="about" className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionEyebrow>About IDM</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-navy-deep sm:text-5xl">
              A senior team that treats your growth like our own.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              IDM Smart Tech is a full-service digital marketing and technology agency. We combine strategy, design, engineering, and AI to move your business metrics — not vanity ones.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Our Mission", d: "Turn technology and marketing into predictable growth." },
                { t: "Our Vision", d: "Be the growth partner of choice for ambitious brands." },
              ].map((it) => (
                <div key={it.t} className="rounded-2xl border border-black/5 bg-white p-5 shadow-elegant">
                  <div className="flex items-center gap-2 text-navy-deep">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <h3 className="text-sm font-bold uppercase tracking-widest">{it.t}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                Learn about us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep/5">
                See our work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/40 via-transparent to-royal/30 blur-2xl" aria-hidden />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { n: 500, s: "+", l: "Projects" },
                  { n: 98, s: "%", l: "Client Retention" },
                  { n: 320, s: "%", l: "Avg ROI Uplift" },
                  { n: 24, s: "/7", l: "Support" },
                ].map((it, i) => (
                  <div
                    key={i}
                    className={`rounded-3xl p-6 shadow-elegant ${
                      i % 3 === 0 ? "bg-navy-deep text-white" : "bg-white text-navy-deep"
                    } ${i === 1 ? "translate-y-6" : ""} ${i === 2 ? "-translate-y-4" : ""}`}
                  >
                    <div className="font-display text-4xl font-bold sm:text-5xl">
                      <Counter to={it.n} suffix={it.s} />
                    </div>
                    <div className={`mt-2 text-xs font-semibold uppercase tracking-widest ${i % 3 === 0 ? "text-gold" : "text-muted-foreground"}`}>
                      {it.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- INDUSTRIES -------------------- */
export function Industries() {
  const items = [
    { n: "Healthcare", Icon: Heart },
    { n: "Education", Icon: GraduationCap },
    { n: "Real Estate", Icon: Building2 },
    { n: "Retail", Icon: ShoppingBag },
    { n: "Restaurants", Icon: UtensilsCrossed },
    { n: "Manufacturing", Icon: Factory },
    { n: "Hospitality", Icon: MapPin },
    { n: "NGOs", Icon: Users },
    { n: "Corporate", Icon: Briefcase },
    { n: "Startups", Icon: Rocket },
  ];
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Deep expertise across industries.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We speak your customers' language — from clinical care to omnichannel retail.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-elegant transition-all hover:-translate-y-1 hover:shadow-premium">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-navy-deep/5 text-navy-deep transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <it.Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-base font-semibold text-navy-deep">{it.n}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
export function Services() {
  const services = [
    {
      Icon: Search,
      t: "SEO & Local SEO",
      d: "Rank for the queries that drive real revenue. Technical, on-page, and local.",
      tags: ["SEO", "Local SEO", "GBP"],
    },
    {
      Icon: BarChart3,
      t: "Google & Meta Ads",
      d: "Full-funnel paid media that scales spend without wasting a rupee.",
      tags: ["Google Ads", "Meta Ads", "YouTube"],
    },
    {
      Icon: Globe,
      t: "Web Design & Development",
      d: "Fast, beautiful, conversion-focused sites — WordPress, Shopify, or custom.",
      tags: ["Business", "Ecommerce", "Landing"],
    },
    {
      Icon: Smartphone,
      t: "Mobile App Development",
      d: "iOS, Android, Flutter and React Native apps users actually love.",
      tags: ["iOS", "Android", "Flutter"],
    },
    {
      Icon: Code2,
      t: "Software · CRM · ERP",
      d: "Custom software, CRM, ERP, and industry systems built to fit your ops.",
      tags: ["CRM", "ERP", "Custom"],
    },
    {
      Icon: Sparkles,
      t: "AI & Automation",
      d: "Chatbots, WhatsApp flows, workflow and CRM automations powered by AI.",
      tags: ["AI", "Automation", "WhatsApp"],
    },
    {
      Icon: Palette,
      t: "Branding & Creative",
      d: "Logos, brand systems, social creatives, video, and motion graphics.",
      tags: ["Brand", "Video", "Design"],
    },
    {
      Icon: MapPin,
      t: "Google Business Profile",
      d: "Rank on Maps, own the local pack, and turn searches into store visits.",
      tags: ["GBP", "Maps", "Reviews"],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div className="container-page relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Everything you need to grow — under one roof.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-5 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep/5">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-premium">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-navy-deep text-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-deep">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-navy-deep/5 px-2.5 py-1 text-[11px] font-semibold text-navy-deep">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY CHOOSE US -------------------- */
export function WhyChooseUs() {
  const items = [
    { Icon: TrendingUp, t: "ROI Focused", d: "Every deliverable is tied to a revenue metric." },
    { Icon: Users, t: "Senior Team", d: "You work with strategists — never juniors on autopilot." },
    { Icon: LineChart, t: "Transparent Reporting", d: "Live dashboards. No jargon. No black boxes." },
    { Icon: Zap, t: "AI-Powered", d: "AI baked into research, creative and automation." },
    { Icon: Headphones, t: "Fast Support", d: "Slack, WhatsApp, calls — answers in hours." },
    { Icon: ShieldCheck, t: "Trusted Partner", d: "Google & Meta certified, 200+ five-star reviews." },
  ];
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Why choose us</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Built to be your long-term growth partner.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group relative flex h-full items-start gap-4 rounded-3xl border border-black/5 bg-surface p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-premium">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-deep text-gold transition-transform group-hover:rotate-6">
                  <it.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-deep">{it.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */
export function Process() {
  const steps = [
    { t: "Discover", d: "Deep-dive workshops to map goals, market, and constraints." },
    { t: "Research", d: "Competitor teardown, keyword and audience intelligence." },
    { t: "Strategy", d: "Roadmap, channel mix, KPIs, and measurement plan." },
    { t: "Design", d: "Brand-aligned UI/UX prototypes that convert." },
    { t: "Development", d: "Ship fast, ship clean, ship measurable." },
    { t: "Launch", d: "Coordinated launch with QA and analytics baked in." },
    { t: "Optimize", d: "Weekly experiments to compound performance." },
    { t: "Scale", d: "Automate ops and unlock new channels." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-royal/40 blur-3xl" />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Our Process</span>
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold text-balance sm:text-5xl">
              A repeatable playbook that removes guesswork.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full w-full origin-top bg-gold"
            />
          </div>
          <ul className="space-y-6 lg:space-y-14">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.t} className="relative grid gap-4 lg:grid-cols-2 lg:gap-16">
                  <Reveal className={left ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                      <div className="flex items-center gap-3 text-gold lg:justify-start" style={{ justifyContent: left ? "flex-end" : "flex-start" }}>
                        <span className="font-display text-4xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                        <span className="h-px w-8 bg-gold" />
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-bold">{s.t}</h3>
                      <p className="mt-2 text-white/70">{s.d}</p>
                    </div>
                  </Reveal>
                  <span className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-navy-deep bg-gold lg:block" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PORTFOLIO -------------------- */
export function Portfolio() {
  const filters = ["All", "Website", "SEO", "Ads", "Branding", "Software", "Apps"];
  const [active, setActive] = useState("All");
  const projects = [
    { t: "Aureon Health", cat: "Website", tech: "Next.js · CMS", ind: "Healthcare", r: "+240% leads", c: "from-royal to-navy-deep" },
    { t: "Nordlys Retail", cat: "Ads", tech: "Google · Meta", ind: "Retail", r: "5.2x ROAS", c: "from-navy-deep to-royal" },
    { t: "Meridian Realty", cat: "SEO", tech: "Local SEO · GBP", ind: "Real Estate", r: "#1 in 12 areas", c: "from-royal via-navy to-navy-deep" },
    { t: "Solstice ERP", cat: "Software", tech: "React · Node", ind: "Manufacturing", r: "40% ops time saved", c: "from-navy to-royal" },
    { t: "Kintaro Foods", cat: "Branding", tech: "Identity · Video", ind: "Restaurants", r: "3x brand recall", c: "from-navy-deep via-royal to-navy" },
    { t: "Halcyon App", cat: "Apps", tech: "Flutter", ind: "Wellness", r: "120k installs", c: "from-royal to-navy" },
  ];
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionEyebrow>Portfolio</SectionEyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Selected work from the last few months.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active === f
                      ? "bg-navy-deep text-white shadow-elegant"
                      : "border border-navy-deep/10 bg-white text-navy-deep hover:bg-navy-deep/5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <Link to="/portfolio" className="group block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-elegant transition-all hover:-translate-y-2 hover:shadow-premium">
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.c}`}>
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-white/90">{p.t}</span>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-deep">
                    {p.cat}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-xs text-white backdrop-blur">
                    <span>{p.tech}</span>
                    <span className="font-bold text-gold">{p.r}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-deep">{p.t}</h3>
                    <p className="text-xs text-muted-foreground">{p.ind}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep/5 text-navy-deep transition-all group-hover:bg-gold">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CASE STUDIES (horizontal scroll) -------------------- */
export function CaseStudies() {
  const cases = [
    { c: "Aureon Health", tag: "SEO + Content", metrics: [["Traffic", "+412%"], ["Leads", "+240%"], ["ROI", "6.8x"]], story: "Rebuilt the site, launched a 90-day content engine, and captured 1st position for 34 commercial keywords." },
    { c: "Nordlys Retail", tag: "Paid Media", metrics: [["ROAS", "5.2x"], ["CAC", "-38%"], ["Revenue", "+3.1x"]], story: "Rebuilt tracking, restructured Meta and Google, launched creative sprints — scaled from ₹4L/mo to ₹22L/mo profitably." },
    { c: "Solstice ERP", tag: "Software", metrics: [["Ops hours", "-40%"], ["Adoption", "94%"], ["NPS", "+31"]], story: "Custom ERP replaced 5 spreadsheets and 2 tools across 6 factories. Rollout in 90 days, adoption in 6 weeks." },
    { c: "Meridian Realty", tag: "Local SEO", metrics: [["Maps calls", "+287%"], ["Reviews", "+412"], ["Deals", "+3.4x"]], story: "12 area pages, GBP optimizations, and review automation put Meridian in the local 3-pack across 12 neighborhoods." },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionEyebrow>Case studies</SectionEyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Real outcomes for ambitious brands.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-5 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep/5">
              All case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-6 px-6 lg:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
          {cases.map((cs, i) => (
            <Reveal key={cs.c} delay={i * 0.06}>
              <article className="flex h-full w-[86vw] max-w-[560px] flex-col rounded-3xl bg-navy-deep p-8 text-white shadow-premium sm:w-[560px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
                    {cs.tag}
                  </span>
                  <Quote className="h-8 w-8 text-gold/40" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold sm:text-4xl">{cs.c}</h3>
                <p className="mt-3 text-white/70">{cs.story}</p>
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {cs.metrics.map(([l, v]) => (
                    <div key={l}>
                      <div className="font-display text-2xl font-bold text-gold sm:text-3xl">{v}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-white/60">{l}</div>
                    </div>
                  ))}
                </div>
                <Link to="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read the story <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TECHNOLOGIES -------------------- */
export function Technologies() {
  const cats = [
    { c: "Marketing", items: ["Google Ads", "Meta Ads", "GA4", "Search Console", "Ahrefs", "SEMrush", "HubSpot", "Mailchimp"] },
    { c: "Development", items: ["Next.js", "React", "Node", "TypeScript", "Laravel", "WordPress", "Shopify", "Tailwind"] },
    { c: "Cloud", items: ["AWS", "GCP", "Vercel", "Cloudflare", "Supabase", "Firebase"] },
    { c: "Analytics", items: ["GA4", "Mixpanel", "Hotjar", "Looker", "Metabase"] },
    { c: "AI", items: ["OpenAI", "Anthropic", "LangChain", "Zapier", "n8n", "Make"] },
  ];
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Our stack</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Best-in-class tools, thoughtfully composed.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-4">
          {cats.map((cat, i) => (
            <Reveal key={cat.c} delay={i * 0.05}>
              <div className="grid items-center gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-elegant lg:grid-cols-[220px_1fr]">
                <h3 className="font-display text-xl font-bold text-navy-deep">{cat.c}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((t) => (
                    <span key={t} className="rounded-full border border-navy-deep/10 bg-surface px-4 py-2 text-sm font-medium text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
export function Testimonials() {
  const items = [
    { name: "Ananya Rao", role: "CMO, Nordlys Retail", q: "In 90 days IDM 3x'd our revenue. The team behaves like an in-house growth squad — sharp, fast, and always accountable." },
    { name: "Rahul Menon", role: "Founder, Aureon Health", q: "We went from invisible to page one on our commercial terms. Traffic and, more importantly, qualified leads followed." },
    { name: "Sana Kapoor", role: "COO, Solstice", q: "The ERP rollout was surgical. Zero downtime, real training, and dashboards our team actually opens every morning." },
    { name: "Vikram Iyer", role: "CEO, Meridian Realty", q: "Local SEO used to feel mysterious. Now it feels like a predictable pipeline. Best growth partner we've worked with." },
  ];
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <SectionEyebrow>Client love</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Kind words from teams we've helped grow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 lg:justify-end">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-navy-deep">4.9 / 5</span> · 200+ Google reviews
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.05}>
              <figure className="relative h-full rounded-3xl border border-black/5 bg-surface p-8 shadow-elegant transition-all hover:-translate-y-1 hover:bg-white hover:shadow-premium">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 text-lg leading-relaxed text-navy-deep">
                  "{it.q}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-6">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-deep font-display font-bold text-gold">
                    {it.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-deep">{it.name}</p>
                    <p className="text-xs text-muted-foreground">{it.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
export function Pricing() {
  const plans = [
    { name: "Starter", p: "₹29K", d: "For new brands finding first traction.", f: ["1 channel setup", "Weekly reporting", "Landing page", "Basic automation"], cta: "Start growing", featured: false },
    { name: "Growth", p: "₹79K", d: "For teams scaling paid + SEO together.", f: ["3 channels", "Weekly strategy call", "Creative sprints", "CRM & tracking"], cta: "Book a call", featured: true },
    { name: "Professional", p: "₹1.49L", d: "For brands scaling revenue predictably.", f: ["Full-funnel media", "SEO + content engine", "Design & landing sprints", "AI automations"], cta: "Book a call", featured: false },
    { name: "Enterprise", p: "Custom", d: "For teams with complex stacks and goals.", f: ["Dedicated pod", "Custom SLAs", "ERP / CRM builds", "Executive dashboards"], cta: "Talk to sales", featured: false },
  ];
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Transparent plans that grow with you.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Monthly retainers. Cancel anytime. No hidden fees.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {plans.map((pl, i) => (
            <Reveal key={pl.name} delay={i * 0.06}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                  pl.featured
                    ? "border-transparent bg-navy-deep text-white shadow-premium"
                    : "border-black/5 bg-white text-navy-deep shadow-elegant hover:shadow-premium"
                }`}
              >
                {pl.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-deep">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{pl.name}</h3>
                <p className={`mt-2 text-sm ${pl.featured ? "text-white/70" : "text-muted-foreground"}`}>{pl.d}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{pl.p}</span>
                  <span className={`text-sm ${pl.featured ? "text-white/60" : "text-muted-foreground"}`}>/mo</span>
                </div>
                <ul className={`mt-6 space-y-2.5 text-sm ${pl.featured ? "text-white/85" : "text-navy-deep"}`}>
                  {pl.f.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${pl.featured ? "text-gold" : "text-navy-deep"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    pl.featured ? "bg-gold text-navy-deep" : "bg-navy-deep text-white"
                  }`}
                >
                  {pl.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
export function FAQ() {
  const faqs = [
    { q: "How soon can we start seeing results?", a: "Paid media can show signal within 2 weeks. SEO compounds over 3–6 months. We set clear, per-channel milestones from day one." },
    { q: "Do you work with businesses outside India?", a: "Yes. We work with brands across North America, EU, Middle East, and APAC. Time zones and workflows are handled cleanly." },
    { q: "Do you offer contracts or is it month to month?", a: "Both. Most engagements start month-to-month. Enterprise engagements have quarterly or annual terms with clear SLAs." },
    { q: "Do you build websites or just market them?", a: "Both. Design, development, ecommerce, custom software, and mobile apps are all in-house. That's the whole point." },
    { q: "Can you work with our existing team or agency?", a: "Absolutely. We often partner with in-house teams as a specialist pod on SEO, paid, engineering, or AI automation." },
    { q: "What does your reporting look like?", a: "Live dashboards for every KPI plus a weekly summary. You always know what moved and what's next." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Answers to what most teams ask us.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Can't find yours? <Link to="/contact" className="font-semibold text-navy-deep underline decoration-gold decoration-2 underline-offset-4">Get in touch</Link>.
            </p>
          </Reveal>
          <div>
            <ul className="divide-y divide-black/5 rounded-3xl border border-black/5 bg-surface">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-navy-deep sm:text-lg">{f.q}</span>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "rotate-180 bg-gold text-navy-deep" : "bg-white text-navy-deep"}`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- BLOG -------------------- */
export function BlogPreview() {
  const posts = [
    { t: "The 2026 playbook for local SEO in India", tag: "Local SEO", d: "6 min read", c: "from-royal to-navy-deep" },
    { t: "Meta Ads creative sprints that actually scale", tag: "Paid Media", d: "8 min read", c: "from-navy-deep to-royal" },
    { t: "AI automations every 10-person team should ship", tag: "AI", d: "5 min read", c: "from-navy to-royal" },
  ];
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionEyebrow>From the blog</SectionEyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold text-navy-deep sm:text-5xl">
              Ideas, playbooks and teardowns.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-5 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep/5">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <Link to="/blog" className="group block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-elegant transition-all hover:-translate-y-1 hover:shadow-premium">
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.c}`}>
                  <div className="absolute inset-0 grid-lines opacity-40 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-deep">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.d}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-deep">{p.t}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/5 shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="bg-navy-deep p-10 text-white sm:p-14">
              <SectionEyebrow>Contact</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                Let's talk about your growth.
              </h2>
              <p className="mt-4 text-white/70">
                Book a free consultation. We'll review your funnel and share a growth plan — no fluff, no pitch decks.
              </p>

              <form className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormInput label="Full name" placeholder="Priya Sharma" />
                  <FormInput label="Company" placeholder="Acme Inc." />
                </div>
                <FormInput label="Work email" placeholder="you@company.com" type="email" />
                <FormInput label="Phone / WhatsApp" placeholder="+91 00000 00000" />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gold">Tell us about your project</label>
                  <textarea
                    rows={4}
                    placeholder="Goals, timeline, budget…"
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-navy-deep shadow-gold-glow transition-transform hover:-translate-y-0.5"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="relative overflow-hidden bg-surface p-10 sm:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative space-y-6">
                <ContactCard Icon={Phone} title="Call us" v="+91 00000 00000" />
                <ContactCard Icon={MessageCircle} title="WhatsApp" v="Chat with growth expert" href="#" />
                <ContactCard Icon={Mail} title="Email" v="hello@idmsmarttech.com" />
                <ContactCard Icon={MapPin} title="Office" v="India · Remote worldwide" />

                <div className="mt-2 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-navy-deep">
                  <div className="grid-lines h-full w-full opacity-60" />
                </div>

                <p className="text-xs text-muted-foreground">
                  We reply within 4 business hours. Prefer async? Drop us a Loom at hello@idmsmarttech.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gold">{label}</label>
      <input
        {...rest}
        className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function ContactCard({ Icon, title, v, href }: { Icon: React.ComponentType<{ className?: string }>; title: string; v: string; href?: string }) {
  const Cmp: any = href ? "a" : "div";
  return (
    <Cmp
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-premium"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-deep text-gold transition-transform group-hover:rotate-6">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="font-display text-base font-bold text-navy-deep">{v}</p>
      </div>
    </Cmp>
  );
}

/* -------------------- FINAL CTA -------------------- */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-royal/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow>Ready to grow?</SectionEyebrow>
            <h2 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl">
              <span className="text-white">Let's build your</span>{" "}
              <span className="text-shimmer">success story.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              A 30-minute call with a senior strategist. Walk away with a plan — even if we don't work together.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-navy-deep shadow-gold-glow transition-transform hover:-translate-y-0.5"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
