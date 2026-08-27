import {
  ArrowRight,
  Gem,
  PenTool,
  Search,
  Share2,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  share: Share2,
  search: Search,
  target: Target,
  pen: PenTool,
  gem: Gem,
  trending: TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="What I Do"
          title={
            <>
              Digital Marketing Built Around <span className="text-gold-gradient">Your Growth.</span>
            </>
          }
          subtitle="Strategic digital marketing solutions designed to help your business get discovered, trusted, and chosen."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Target;
            return (
              <Reveal
                as="article"
                key={service.number}
                delay={i * 70}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-surface lg:p-10"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-widest text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
