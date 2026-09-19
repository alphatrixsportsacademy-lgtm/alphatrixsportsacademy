import {
  Crosshair,
  Flame,
  Footprints,
  HeartPulse,
  Lightbulb,
  Target,
} from "lucide-react";
import { Reveal, SectionPad } from "./shared";

const CARDS = [
  {
    icon: Crosshair,
    title: "Focus",
    text: "Play-based sessions that sharpen attention and build concentration through structured activity.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    text: "Storytelling and imaginative games that spark curiosity and creative thinking in every child.",
  },
  {
    icon: Flame,
    title: "Endurance",
    text: "Progressive fitness builds stamina and energy, setting the stage for lifelong healthy habits.",
  },
  {
    icon: Target,
    title: "Sports Fundamentals",
    text: "Fluency and confidence in the fundamentals of a wide variety of sports — one game at a time.",
  },
  {
    icon: Footprints,
    title: "Motor Development",
    text: "Gamified coaching accelerates coordination, balance and agility — the ABCs of physical literacy.",
  },
  {
    icon: HeartPulse,
    title: "Active Lifestyle",
    text: "A structured curriculum that fosters a genuine, lasting love for movement and daily activity.",
  },
];

export function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div
        className="absolute left-[-10%] bottom-10 size-[28rem] rounded-full bg-volt/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-Alphatrix">
          {/* Intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                Welcome to Alphatrix
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                Where we empower young minds through{" "}
                <span className="text-volt">sports &amp; fitness</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                Our holistic approach combines structured training, expert coaching 
                and engaging activities to develop focus, confidence and physical fitness. 
                Through progressive skill development and exposure to a variety of sports, 
                we strengthen coordination, physical abilities and sporting fundamentals —
                 while nurturing discipline, teamwork and a lifelong passion for an active 
                 lifestyle.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-volt/25 bg-volt/[0.06] p-5">
                <span className="font-display text-5xl uppercase leading-none text-volt">
                  <img
                src="/logo.png"
                alt="Alphatrix"
                className="inline-block h-20 w-20 object-contain align-middle" 
                />
                </span>
                <p className="text-sm leading-relaxed text-foreground/85">
                  <strong className="font-semibold text-volt">Physical literacy is now as vital as
                  reading, writing and math.</strong>{" "}
                  That&apos;s the belief at the heart of everything Alphatrix does.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/40 hover:shadow-[0_24px_50px_-20px_rgba(200,245,66,0.18)] sm:p-7">
                  <span
                    className="absolute -right-3 -top-5 font-display text-7xl uppercase text-white/[0.05] transition-colors duration-300 group-hover:text-volt/[0.12]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-volt/12 text-volt transition-all duration-300 group-hover:bg-volt group-hover:text-ink">
                    <card.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionPad>
    </section>
  );
}