import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, NAV_LINKS } from "@/lib/site-content";
import { buttonStyles } from "./primitives";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#home" className="font-display text-lg font-bold tracking-[0.32em] text-foreground">
          {BRAND.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-gradient after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className={cn(buttonStyles.gold, "hidden px-6 py-3 sm:inline-flex")}>
            Let's Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-lg text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(buttonStyles.gold, "w-full")}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
