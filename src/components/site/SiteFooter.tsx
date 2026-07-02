import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-royal/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="container-page relative">
        <div className="grid gap-12 pb-16 pt-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <BrandMark variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              A digital marketing & technology agency helping ambitious businesses generate leads and scale with modern web, apps, and AI automation.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  aria-label="Social link"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Services"
            items={[
              { l: "SEO & Local SEO", to: "/services" },
              { l: "Google & Meta Ads", to: "/services" },
              { l: "Web Development", to: "/services" },
              { l: "Mobile Apps", to: "/services" },
              { l: "CRM & ERP", to: "/services" },
              { l: "AI Automation", to: "/services" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { l: "About", to: "/about" },
              { l: "Portfolio", to: "/portfolio" },
              { l: "Case Studies", to: "/case-studies" },
              { l: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              { l: "Blog", to: "/blog" },
              { l: "Free Consultation", to: "/contact" },
            ]}
          />

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Newsletter</h4>
            <p className="mt-4 text-sm text-white/70">
              Growth tactics, playbooks, and case studies. One email a month.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="grid w-12 place-items-center bg-gold text-navy-deep transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+918519837818" className="hover:text-gold transition-colors">+91 8519837818</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:hello@idmsmarttech.com" className="hover:text-gold transition-colors">hello@idmsmarttech.com</a></p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold mt-1" />
                <span>First Floor, 23-98/A, beside Sri Sai Jyothsna Mess, Madhura Nagar, Shamshabad, Hyderabad, Telangana 501218</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} IDM Smart Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-gold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it.l}>
            <Link
              to={it.to}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {it.l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
