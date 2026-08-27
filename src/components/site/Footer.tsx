import { BRAND, NAV_LINKS, SOCIALS } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg font-bold tracking-[0.32em]">{BRAND.name}</span>
          <p className="mt-3 text-xs tracking-[0.2em] text-gold uppercase">{BRAND.tagline}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Helping businesses build stronger digital brands, reach the right audience, and turn
            attention into growth.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-border px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:border-gold hover:text-gold"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${BRAND.email}`} className="break-all transition-colors hover:text-gold">
                {BRAND.email}
              </a>
            </li>
            <li>
              <a href={`tel:${BRAND.phone}`} className="transition-colors hover:text-gold">
                {BRAND.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
          © 2026 {BRAND.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
