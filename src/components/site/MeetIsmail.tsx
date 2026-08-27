import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, buttonStyles } from "./primitives";
import portrait from "@/assets/ismail-hero.jpg";

export function MeetIsmail() {
  return (
    <section id="ismail" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-gold/8 blur-[150px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 rounded-full border border-gold/20" />
          <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem] border border-gold/25">
            <img
              src={portrait}
              alt="Portrait of Ismail, digital marketer and founder of ISMAILIFY"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="section-label">The Person Behind The Brand</span>
          <h2 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
            Meet <span className="text-gold-gradient">Ismail.</span>
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Behind ISMAILIFY is Ismail, a digital marketer passionate about helping businesses
              build stronger brands and create meaningful growth online.
            </p>
            <p>
              Combining marketing strategy, creativity, content, and digital technology, Ismail
              approaches every project with one goal: helping brands move forward.
            </p>
          </div>
          <a href="#contact" className={cn(buttonStyles.gold, "mt-9")}>
            Work With Ismail <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
