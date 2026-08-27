import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";
import imgSocial from "@/assets/work-social.jpg";
import imgBranding from "@/assets/work-branding.jpg";
import imgSeo from "@/assets/work-seo.jpg";
import imgAds from "@/assets/work-ads.jpg";
import imgContent from "@/assets/work-content.jpg";
import imgGrowth from "@/assets/work-growth.jpg";

const IMAGES: Record<string, string> = {
  social: imgSocial,
  branding: imgBranding,
  seo: imgSeo,
  ads: imgAds,
  content: imgContent,
  growth: imgGrowth,
};

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const items = useMemo(
    () => (active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Selected Work"
          title={
            <>
              Ideas Into <span className="text-gold-gradient">Impact.</span>
            </>
          }
          subtitle="Explore selected projects, campaigns, and digital marketing work. The projects below are illustrative samples, not real client engagements."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300",
                active === category
                  ? "border-transparent bg-gold-gradient text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              as="article"
              key={item.id}
              delay={i * 70}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <div className="relative aspect-16/11 overflow-hidden">
                <img
                  src={IMAGES[item.image]}
                  alt={`${item.name} — sample ${item.category.toLowerCase()} project visual`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {item.industry}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <dl className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                  <div>
                    <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      Services
                    </dt>
                    <dd className="mt-1 text-foreground">{item.services}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      Results
                    </dt>
                    <dd className="mt-1 text-gold">{item.results}</dd>
                  </div>
                </dl>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:text-gold"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
