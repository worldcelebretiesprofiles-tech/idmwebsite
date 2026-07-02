import { Link } from "@tanstack/react-router";

export function BrandMark({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="IDM Smart Tech">
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl ${
          isLight ? "bg-navy-deep" : "bg-white"
        } shadow-elegant`}
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
          <path
            d="M4 24 L12 8 L16 16 L20 8 L28 24"
            fill="none"
            stroke={isLight ? "#FFD400" : "#0A235A"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="26" r="2" fill={isLight ? "#FFD400" : "#0A235A"} />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-bold tracking-tight ${
            isLight ? "text-white" : "text-navy-deep"
          }`}
        >
          IDM Smart Tech
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] ${
            isLight ? "text-gold" : "text-muted-foreground"
          }`}
        >
          Digital · Growth
        </span>
      </span>
    </Link>
  );
}
