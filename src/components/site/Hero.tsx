import { ArrowRight, BarChart3, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./primitives";
import heroPortrait from "@/assets/ismail-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-backdrop absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="animate-gold-pulse absolute top-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-gold/12 blur-[140px]" />
        <div className="absolute bottom-[-14rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gold-deep/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal is-visible">
          <span className="section-label">
            <span className="h-px w-8 bg-gold-gradient" />
            Digital Marketing • Branding • Growth
          </span>

          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-bold sm:text-6xl lg:text-[4.2rem]">
            Turn Your Brand Into a{" "}
            <span className="text-gold-gradient">Digital Growth Machine.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I help businesses build powerful digital brands, reach the right audience, and turn
            online attention into real business growth.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={cn(buttonStyles.gold, "w-full sm:w-auto")}>
              Let's Work Together <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className={cn(buttonStyles.outline, "w-full sm:w-auto")}>
              Explore My Services
            </a>
          </div>

          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            <Sparkles className="h-4 w-4 text-gold" />
            Strategy <span className="text-gold">•</span> Creativity <span className="text-gold">•</span>{" "}
            Growth
          </p>
        </div>

        {/* Portrait visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-0 -m-6 rounded-full bg-gold/10 blur-3xl" />
          <div
            aria-hidden
            className="animate-spin-slow absolute inset-0 -m-4 rounded-full border border-dashed border-gold/25"
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-gold/30 bg-surface shadow-[var(--shadow-elevated)]">
            <img
              src={heroPortrait}
              alt="Ismail, founder of ISMAILIFY, professional portrait"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
            />
          </div>

          {/* Floating analytics card */}
          <div className="animate-float-slow glass-panel absolute -bottom-6 -left-2 w-52 rounded-2xl p-4 sm:-left-8">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Growth Index</span>
              <BarChart3 className="h-4 w-4 text-gold" />
            </div>
            <p className="mt-1 font-display text-2xl font-bold text-foreground">+150%</p>
            <svg
              viewBox="0 0 120 34"
              className="mt-2 h-8 w-full"
              aria-hidden
              preserveAspectRatio="none"
            >
              <polyline
                points="0,30 20,24 40,26 60,16 80,18 100,8 120,3"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="glass-panel absolute -top-4 -right-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-gold uppercase sm:-right-6">
            Ismailify
          </div>
        </div>
      </div>
    </section>
  );
}
