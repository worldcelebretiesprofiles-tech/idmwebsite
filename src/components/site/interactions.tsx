import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/* ---------- Magnetic wrapper for CTAs/logos/icons ---------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Mouse-follow spotlight for hero ---------- */
export function Spotlight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 100, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 100, damping: 20, mass: 0.6 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current?.parentElement;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        return;
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const bg = useTransform(
    [sx, sy],
    ([cx, cy]) =>
      `radial-gradient(500px circle at ${cx}px ${cy}px, oklch(0.87 0.17 92 / 0.18), transparent 60%)`,
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ backgroundImage: bg as unknown as string }}
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
    />
  );
}

/* ---------- Custom cursor (desktop, respects reduced motion) ---------- */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(!reduce && fine);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHover(
        !!el?.closest(
          "a, button, [role=button], input, textarea, select, label, [data-cursor='hover']",
        ),
      );
    };
    window.addEventListener("mousemove", onMove);
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold mix-blend-difference"
      />
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ width: hover ? 56 : 32, height: hover ? 56 : 32, marginLeft: hover ? -28 : -16, marginTop: hover ? -28 : -16 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-gold/60 mix-blend-difference"
      />
    </>
  );
}

/* ---------- Back-to-top ---------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20, pointerEvents: show ? "auto" : "none" }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-gold shadow-premium transition-transform hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  );
}
