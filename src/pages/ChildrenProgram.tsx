import {
  ArrowRight,
  Check,
  Dumbbell,
  Gamepad2,
  HeartPulse,
  Medal,
  Move,
  Trophy,
} from "lucide-react";

import { images } from "@/lib/images";
import {
  OutlineButton,
  Reveal,
  SectionPad,
  VoltButton,
} from "../components/landing/shared";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

const PROGRAM_AREAS = [
  {
    icon: Move,
    title: "Movement Skills",
    text: "Build coordination, balance, agility and body control through fun and progressive movement activities.",
  },
  {
    icon: Trophy,
    title: "Sports",
    text: "Introduce children to different sports while developing fundamental skills, teamwork and confidence.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    text: "High-energy games that make physical activity enjoyable while developing strategic thinking and social skills.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    text: "Age-appropriate strength, endurance, speed and agility training to create a strong physical foundation.",
  },
  {
    icon: Medal,
    title: "Athletic Development",
    text: "Progressive training for young athletes focusing on performance, physical development and sporting potential.",
  },
  {
    icon: HeartPulse,
    title: "Special Programs",
    text: "Inclusive fitness, sports nutrition and sports psychology support designed around individual needs and goals.",
  },
];

const AGE_GROUPS = [
  {
    number: "01",
    age: "2 – 6 YEARS",
    title: "Active Foundations",
    text: "Fun and engaging activities focused on basic movement, coordination, balance, agility and physical literacy.",
  },
  {
    number: "02",
    age: "6 – 12 YEARS",
    title: "Sports & Skill Development",
    text: "Structured sports, games and fitness sessions that develop fundamental skills, movement quality and confidence.",
  },
  {
    number: "03",
    age: "10 – 16 YEARS",
    title: "Athletic Development",
    text: "Progressive strength, speed, agility, conditioning and sport-specific training for growing athletes.",
  },
  {
    number: "04",
    age: "16+ YEARS",
    title: "Performance & Fitness",
    text: "Goal-based fitness and athletic development designed around individual ability, interests and performance goals.",
  },
];

const BENEFITS = [
  "Improved coordination, balance and agility",
  "Better strength, stamina and physical fitness",
  "Development of fundamental sports skills",
  "Improved confidence and self-esteem",
  "Discipline and consistency through structured training",
  "Teamwork and communication skills",
  "Healthy and active lifestyle habits",
  "Exposure to multiple sports and activities",
  "Progressive athletic development",
  "Inclusive opportunities for different abilities",
];

const SPORTS = [
  "Football",
  "Basketball",
  "Volleyball",
  "Cricket",
  "Athletics",
  "Running",
  "Relay Games",
  "Target Games",
];

export default function ChildrenProgram() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div
            className="absolute right-[-10%] top-20 size-[32rem] rounded-full bg-volt/[0.08] blur-[120px]"
            aria-hidden="true"
          />

          <SectionPad>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
              <Reveal>
                <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  <span className="h-px w-8 bg-volt" aria-hidden="true" />
                  Alphatrix for Children
                </p>

                <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
                  Building
                  <br />
                  <span className="text-volt">stronger</span>
                  <br />
                  futures
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Age-appropriate sports, fitness and movement programs that
                  help children become stronger, healthier, more confident and
                  more active.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <VoltButton href="#enquiry">
                    Enquire Now
                    <ArrowRight className="size-4" />
                  </VoltButton>

                  <OutlineButton href="#programs">
                    Explore Programs
                  </OutlineButton>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative">
                  <div
                    className="absolute -left-6 -top-6 size-24 rounded-3xl border border-volt/40"
                    aria-hidden="true"
                  />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                    <img
                      src={"/1.png"}
                      alt="Children participating in sports training"
                      className="h-[24rem] w-full object-cover sm:h-[30rem]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl uppercase tracking-wide text-white">
                        Play. Learn.{" "}
                        <span className="text-volt">Grow.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* INTRO */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  The Children's Program
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Every child deserves{" "}
                  <span className="text-outline-volt">
                    an active beginning
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
                  <p>
                    Alphatrix helps children develop physical literacy,
                    confidence and healthy habits through structured sports,
                    fitness, movement and play.
                  </p>

                  <p>
                    Our programs are designed around different ages and stages
                    of development, allowing children to learn fundamental
                    movement skills before progressing towards sports,
                    fitness and athletic development.
                  </p>

                  <p>
                    The goal is simple — make physical activity enjoyable
                    while helping every child become more capable, confident
                    and physically active.
                  </p>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* PROGRAM AREAS */}
        <section
          id="programs"
          className="relative overflow-hidden bg-ink py-24 lg:py-32"
        >
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                What Children Learn
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                A complete approach to{" "}
                <span className="text-volt">child development</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROGRAM_AREAS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="group h-full rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-volt/40">
                    <span className="grid size-12 place-items-center rounded-2xl bg-volt/10 text-volt transition-all duration-300 group-hover:bg-volt group-hover:text-ink">
                      <item.icon className="size-6" aria-hidden="true" />
                    </span>

                    <h3 className="mt-5 font-display text-xl uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </SectionPad>
        </section>

        {/* AGE GROUPS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                Age & Stage
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Training that grows with{" "}
                <span className="text-outline-volt">your child</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {AGE_GROUPS.map((group, i) => (
                <Reveal key={group.number} delay={i * 0.07}>
                  <article className="rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-volt/40">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-5xl text-white/10">
                        {group.number}
                      </span>

                      <span className="rounded-full border border-volt/30 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-volt">
                        {group.age}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl uppercase tracking-wide">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {group.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </SectionPad>
        </section>

        {/* FITNESS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/3.png"}
                    alt="Child participating in guided fitness training"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Fitness
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Strong bodies,
                  <br />
                  <span className="text-volt">confident kids</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Fitness sessions help children develop the physical
                  foundations needed for everyday movement and sports
                  participation.
                </p>

                <ul className="mt-7 space-y-3">
                  {[
                    "Coordination",
                    "Balance",
                    "Agility",
                    "Strength",
                    "Endurance",
                    "Mobility",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground/85"
                    >
                      <Check className="size-4 text-volt" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        
        {/* MOVEMENT & ATHLETIC DEVELOPMENT */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                Long-Term Development
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                From movement fundamentals{" "}
                <span className="text-volt">to athletic potential</span>
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
                Children can progress from basic movement and play towards
                structured sports, strength and conditioning and long-term
                athletic development as their skills and abilities grow.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Move",
                  text: "Develop fundamental movement patterns, coordination and body awareness.",
                },
                {
                  title: "Play",
                  text: "Apply movement skills through games, sports and enjoyable physical activities.",
                },
                {
                  title: "Perform",
                  text: "Progress towards structured fitness, conditioning and athletic development.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="rounded-3xl border border-white/10 bg-card p-7">
                    <span className="font-display text-5xl text-volt/30">
                      0{i + 1}
                    </span>

                    <h3 className="mt-6 font-display text-2xl uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </SectionPad>
        </section>

        {/* BENEFITS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Why Alphatrix
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Building more than{" "}
                  <span className="text-outline-volt">athletes</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Our programs focus on the whole child — physical abilities,
                  confidence, discipline, teamwork and a positive relationship
                  with movement and sport.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid gap-3">
                  {BENEFITS.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card px-5 py-4 text-sm text-foreground/85"
                    >
                      <Check className="mt-0.5 size-5 shrink-0 text-volt" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* ENQUIRY */}
        <section
          id="enquiry"
          className="relative overflow-hidden bg-volt py-20 text-ink lg:py-28"
        >
          <div
            className="bg-stripes-volt absolute inset-0 opacity-10"
            aria-hidden="true"
          />

          <SectionPad>
            <div className="relative mx-auto max-w-4xl text-center">
              <Reveal>
                <p className="font-display text-xs uppercase tracking-[0.25em]">
                  Start your child's journey
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
                  Help your child build confidence through sport
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  Talk to the Alphatrix team about the right sports and
                  fitness program for your child.
                </p>

                <div className="mt-8">
                  <VoltButton
                    href="#contact"
                    className="bg-ink text-volt hover:bg-ink/90"
                  >
                    Enquire Now
                    <ArrowRight className="size-4" />
                  </VoltButton>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>
      </main>

      <Footer />
    </div>
  );
}