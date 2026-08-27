import { PROCESS_STEPS } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./primitives";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="My Process"
          title={
            <>
              From Strategy to <span className="text-gold-gradient">Growth.</span>
            </>
          }
          subtitle="A clear, repeatable path from understanding your business to scaling what works."
        />

        <ol className="relative mt-16 space-y-px border-l border-border pl-0">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 70}
              className="group relative grid gap-3 border-b border-border py-8 pl-8 transition-colors duration-300 hover:bg-surface sm:grid-cols-[8rem_1fr_2fr] sm:items-center sm:gap-8 sm:pl-10"
            >
              <span
                aria-hidden
                className="absolute top-1/2 -left-[7px] h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-gold/50 bg-background transition-all duration-300 group-hover:bg-gold-gradient"
              />
              <span className="font-display text-3xl font-bold text-gold-gradient">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
