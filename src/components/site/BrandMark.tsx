import { Link } from "@tanstack/react-router";

export function BrandMark({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="IDM Smart Tech">
      <img
        src="/idmlogo.png"
        alt="IDM Smart Tech Logo"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  );
}
