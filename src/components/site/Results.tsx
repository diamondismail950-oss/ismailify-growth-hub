import { RESULT_STATS } from "@/lib/site-content";
import { Counter, Reveal, SectionHeading } from "./primitives";

export function Results() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-backdrop absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="animate-gold-pulse absolute right-[-6rem] bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Impact"
          title={
            <>
              Results That <span className="text-gold-gradient">Speak.</span>
            </>
          }
          subtitle="Great marketing should create more than attention. It should create measurable business impact."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_STATS.map((stat, i) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={i * 90}
              className="glass-panel rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          These figures are editable placeholders illustrating target outcomes, not verified
          performance claims.
        </p>
      </div>
    </section>
  );
}
