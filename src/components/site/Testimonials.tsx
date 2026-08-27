import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";

function Card({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="glass-panel h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40">
      <Quote className="h-7 w-7 text-gold" />
      <blockquote className="mt-6 text-base leading-relaxed text-foreground">
        "{item.quote}"
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-sm font-bold text-gold"
        >
          {item.company.slice(0, 2).toUpperCase()}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-foreground">{item.name}</span>
          <span className="block text-muted-foreground">
            {item.role}, {item.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className="border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Testimonials"
          title={
            <>
              What Clients <span className="text-gold-gradient">Say</span>
            </>
          }
          subtitle="Placeholder testimonials shown below — these will be replaced with genuine client feedback."
        />

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="mt-12 md:hidden">
          <Card item={TESTIMONIALS[index]!} />
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-7 bg-gold-gradient" : "w-3 bg-border",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
