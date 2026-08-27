import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/site-content";
import { Reveal, buttonStyles } from "./primitives";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gold-pulse absolute top-[-10rem] left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/12 blur-[150px]" />
        <div className="grid-backdrop absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="section-label">Next Step</span>
        <h2 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.6rem]">
          Ready to Grow <span className="text-gold-gradient">Your Brand?</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Let's create a digital marketing strategy that gets attention, builds trust, and drives
          growth.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className={cn(buttonStyles.gold, "w-full sm:w-auto")}>
            Let's Work Together <ArrowRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${BRAND.email}`} className={cn(buttonStyles.outline, "w-full sm:w-auto")}>
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}
