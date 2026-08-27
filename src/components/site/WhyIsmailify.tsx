import { BarChart3, Compass, Rocket, Sparkles, type LucideIcon } from "lucide-react";
import { WHY_FEATURES } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  chart: BarChart3,
  sparkles: Sparkles,
  rocket: Rocket,
};

export function WhyIsmailify() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-24 lg:py-32">
      <div
        aria-hidden
        className="animate-gold-pulse pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="The Difference"
          title={
            <>
              Why Brands Choose <span className="text-gold-gradient">ISMAILIFY</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Compass;
            return (
              <Reveal
                as="article"
                key={feature.title}
                delay={i * 90}
                className="glass-panel group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40"
              >
                <Icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
