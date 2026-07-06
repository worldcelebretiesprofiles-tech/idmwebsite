import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop, CustomCursor } from "@/components/site/interactions";
import { PageTransition } from "@/components/site/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "IDM Smart Tech — Digital Marketing & Technology Agency";
const SITE_DESC =
  "IDM Smart Tech helps businesses grow with SEO, Google & Meta Ads, premium websites, mobile apps, CRM, ERP, and AI automation. Book a free consultation.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "IDM Smart Tech" },
      { name: "theme-color", content: "#0A235A" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IDM Smart Tech" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11359063-9d23-4447-b831-1ddf652feeb9/id-preview-a4bc69ed--36e5bf70-bff7-42d4-a306-4f5584b8d879.lovable.app-1782975196605.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11359063-9d23-4447-b831-1ddf652feeb9/id-preview-a4bc69ed--36e5bf70-bff7-42d4-a306-4f5584b8d879.lovable.app-1782975196605.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/idmlogo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { Phone, MessageCircle } from "lucide-react";

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function FloatingContact() {
  return (
    <div className="fixed top-1/2 right-6 z-40 -translate-y-1/2 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918519837818"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/30 hover:shadow-xl cursor-pointer overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-full w-full object-cover transition-transform group-hover:rotate-6" />
      </a>
      {/* Phone Button */}
      <a
        href="tel:+918519837818"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep text-gold shadow-lg border border-gold/20 transition-all duration-300 hover:scale-110 hover:shadow-gold-glow hover:shadow-xl cursor-pointer"
        aria-label="Call Us"
      >
        <Phone className="h-7 w-7 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <CustomCursor />
      <SiteNavbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
      <BackToTop />
      <FloatingContact />
    </QueryClientProvider>
  );
}
