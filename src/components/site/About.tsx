import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT_STATS } from "@/lib/site-content";
import { Counter, Reveal, SectionHeading, buttonStyles } from "./primitives";
import aboutImage from "@/assets/ismail-about.jpg";

export function About() {
  return (
    <section id="about" className="relative border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/20" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border">
              <img
                src={aboutImage}
                alt="Ismail reviewing digital marketing analytics at his desk"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              label="About Ismailify"
              title={
                <>
                  Marketing Is More Than Posting.{" "}
                  <span className="text-gold-gradient">It's About Creating Growth.</span>
                </>
              }
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                ISMAILIFY is a digital marketing brand focused on helping businesses become more
                visible, memorable, and profitable online.
              </p>
              <p>
                From social media and content strategy to SEO, advertising, branding, and digital
                growth strategy, I combine creativity with strategy to help brands connect with the
                right audience and move toward their business goals.
              </p>
            </div>
            <a href="#ismail" className={cn(buttonStyles.outline, "mt-9")}>
              More About Ismail <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {ABOUT_STATS.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 90} className="bg-background p-7 text-center">
              <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
