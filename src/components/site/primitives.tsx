import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fade + slide-in when the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/** Counts up to `value` the first time it becomes visible. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

export const buttonStyles = {
  gold: cn(
    base,
    "bg-gold-gradient px-7 py-3.5 text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  ),
  outline: cn(
    base,
    "border border-border px-7 py-3.5 text-foreground hover:border-gold hover:text-gold hover:-translate-y-0.5",
  ),
  ghost: cn(base, "px-5 py-2.5 text-muted-foreground hover:text-gold"),
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
