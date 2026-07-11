import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronDown, Check } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/site/motion-primitives";
import { ServiceData } from "@/data/services/types";
import { motion, AnimatePresence } from "framer-motion";
import { TrustedClients, Testimonials, FinalCTA } from "@/components/site/sections";

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <>
      <HeroSection hero={data.hero} />
      <TrustedClients />
      <AboutSection about={data.about} />
      <FeaturesSection features={data.features} />
      <BenefitsSection benefits={data.benefits} />
      <WhyChooseUs reasons={data.whyChooseUs} />
      <ProcessSection process={data.process} />
      <ResultsSection results={data.results} />
      <IndustriesSection industries={data.industries} />
      <Testimonials />
      <FAQSection faqs={data.faqs} />
      <FinalCTA />
    </>
  );
}

function HeroSection({ hero }: { hero: ServiceData["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{hero.h1}</span>
              </div>
              <h1 className="font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                {hero.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-white/80 font-medium">
                {hero.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#25D366]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                  className="group flex h-14 items-center gap-2 rounded-full bg-gold px-8 text-base font-semibold text-navy-deep transition-all hover:scale-105 hover:shadow-gold-glow cursor-pointer"
                >
                  {hero.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="animate-float">
                <img src={hero.heroImage} alt={hero.headline} className="w-full rounded-3xl object-cover shadow-2xl" />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-full bg-gold/20 blur-3xl opacity-50 animate-pulse" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ about }: { about: ServiceData["about"] }) {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-3xl overflow-hidden shadow-elegant"
        >
          <img src={about.aboutImage} alt={about.title} className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105" />
        </motion.div>

        <Reveal delay={0.2}>
          <SectionEyebrow>{about.title}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">{about.subtitle}</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            {about.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-4">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-black/5 bg-surface p-6 text-center shadow-sm">
                <div className="font-display text-3xl font-bold text-navy-deep">{s.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturesSection({ features }: { features: ServiceData["features"] }) {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal>
            <SectionEyebrow>Service Features</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">Everything you need to succeed.</h2>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-black/5 bg-white p-8 shadow-elegant transition-all hover:-translate-y-2 hover:shadow-premium">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-deep/5 text-gold transition-colors group-hover:bg-navy-deep group-hover:text-gold">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-deep">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ benefits }: { benefits: ServiceData["benefits"] }) {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionEyebrow>Why It Matters</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">The impact on your bottom line.</h2>
          <p className="mt-6 text-lg text-white/70">Stop guessing. We implement strategies that produce tangible, measurable growth for your business.</p>
        </Reveal>
        <div className="grid gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <h3 className="font-display text-xl font-bold text-gold">{b.title}</h3>
                <p className="mt-2 text-white/80">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ reasons }: { reasons: string[] }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal>
            <SectionEyebrow>The IDM Smart Tech Edge</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">Why partner with us?</h2>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-surface p-4 shadow-elegant transition-transform hover:-translate-y-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-semibold text-navy-deep">{r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ process }: { process: ServiceData["process"] }) {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal>
            <SectionEyebrow>Our Process</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">How we deliver results.</h2>
          </Reveal>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative rounded-3xl border border-black/5 bg-white p-8 shadow-elegant">
                <div className="absolute -top-4 -right-4 text-7xl font-display font-bold text-surface opacity-50 select-none pointer-events-none">
                  {p.step}
                </div>
                <h3 className="font-display text-xl font-bold text-navy-deep mt-4">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection({ results }: { results: ServiceData["results"] }) {
  return (
    <section className="bg-navy-deep py-20 text-center text-white">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="font-display text-4xl font-bold text-gold sm:text-6xl">{r.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/70">{r.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection({ industries }: { industries: string[] }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page text-center">
        <Reveal>
          <SectionEyebrow>Industries We Serve</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl mb-12">Expertise across sectors.</h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <Reveal key={ind} delay={i * 0.05}>
              <span className="inline-block rounded-full border border-black/10 bg-surface px-6 py-3 text-sm font-semibold text-navy-deep shadow-sm hover:bg-gold hover:border-gold hover:text-navy-deep transition-colors">
                {ind}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faqs }: { faqs: ServiceData["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <SectionEyebrow>FAQs</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep sm:text-5xl">Common Questions</h2>
          </div>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full rounded-2xl border border-black/5 bg-white p-6 text-left shadow-elegant transition-colors hover:border-gold/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-bold text-navy-deep">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


