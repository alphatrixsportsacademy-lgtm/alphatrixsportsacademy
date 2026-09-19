import {
  ArrowRight,
  Check,
  Dumbbell,
  HeartPulse,
  Trophy,
  Users,
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
    icon: Dumbbell,
    title: "Fitness & Conditioning",
    text: "Structured fitness sessions designed to improve strength, endurance, mobility, coordination and overall physical performance.",
  },
  {
    icon: Trophy,
    title: "Sports Training",
    text: "Sport-specific training that develops fundamental skills, movement patterns, game awareness and athletic confidence.",
  },
  {
    icon: HeartPulse,
    title: "Weight Management",
    text: "Age-appropriate physical activity and fitness routines that support healthy habits and an active lifestyle.",
  },
  {
    icon: Users,
    title: "Inclusive Programs",
    text: "Adapted activities and guided training for specially-abled children and participants with different fitness needs.",
  },
];

const AGE_GROUPS = [
  {
    number: "01",
    age: "6 – 8 YEARS",
    title: "Active Foundations",
    text: "Fun movement activities focused on coordination, balance, agility and fundamental sports skills.",
  },
  {
    number: "02",
    age: "9 – 12 YEARS",
    title: "Skill Development",
    text: "Progressive sports and fitness training designed to improve movement quality, strength and sporting fundamentals.",
  },
  {
    number: "03",
    age: "13 – Alphatrix YEARS",
    title: "Athletic Development",
    text: "More structured conditioning, strength, speed, agility and sport-specific development for young athletes.",
  },
  {
    number: "04",
    age: "Alphatrix+ YEARS",
    title: "Performance & Fitness",
    text: "Goal-oriented fitness and athletic conditioning designed around individual ability, goals and performance.",
  },
];

const BENEFITS = [
  "Improved strength, stamina and overall fitness",
  "Better coordination, balance, agility and mobility",
  "Structured exposure to multiple sports",
  "Development of discipline and consistency",
  "Improved confidence and teamwork",
  "Healthy and active lifestyle habits",
  "Goal-based fitness and athletic development",
  "Inclusive training options for different abilities",
];

const ACTIVITIES = [
  "Football",
  "Volleyball",
  "Basketball",
  "Athletics",
  "Strength & Conditioning",
  "Speed & Agility",
  "Functional Fitness",
  "Movement Skills",
];

export default function ResidentialProgram() {
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
                  <span className="h-px w-8 bg-volt" />
                  Alphatrix for Residential Complexes
                </p>

                <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
                  Build a{" "}
                  <span className="text-volt">fitter</span>
                  <br />
                  community
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Alphatrix brings structured sports, fitness and athletic
                  development programs directly to residential communities —
                  creating an active environment where children and residents
                  can train, play and grow.
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
                  <div className="absolute -left-6 -top-6 size-24 rounded-3xl border border-volt/40" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                    <img
                      src={images.childrenSports}
                      alt="Children participating in sports training"
                      className="h-[24rem] w-full object-cover sm:h-[30rem]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl uppercase tracking-wide text-white">
                        Sports. Fitness.{" "}
                        <span className="text-volt">Community.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* OVERVIEW */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  The Program
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  An active lifestyle{" "}
                  <span className="text-outline-volt">starts at home</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
                  <p>
                    Residential complexes can become more than just places to
                    live. With the right sports and fitness environment, they
                    can become active communities where children and families
                    have regular opportunities to exercise and participate in
                    sports.
                  </p>

                  <p>
                    Alphatrix provides structured sessions delivered by
                    trained coaches, combining sports, fitness, movement and
                    athletic development into engaging programs for different
                    age groups and abilities.
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
                What We Offer
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Complete fitness &{" "}
                <span className="text-volt">sports programs</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROGRAM_AREAS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <article className="group h-full rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-volt/40">
                    <span className="grid size-12 place-items-center rounded-2xl bg-volt/10 text-volt transition-all group-hover:bg-volt group-hover:text-ink">
                      <item.icon className="size-6" />
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

        {/* SPORTS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={images.childrenSports}
                    alt="Young athletes participating in sports"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Sports Activities
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Give children{" "}
                  <span className="text-outline-volt">more ways to play</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Participants get exposure to a variety of sports and
                  movement activities, helping them discover their interests
                  while developing transferable physical skills.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {ACTIVITIES.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold"
                    >
                      <Check className="size-4 shrink-0 text-volt" />
                      {activity}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* AGE GROUPS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                Age-Based Development
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Training that grows with{" "}
                <span className="text-volt">every child</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {AGE_GROUPS.map((group, i) => (
                <Reveal key={group.number} delay={i * 0.07}>
                  <article className="rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-volt/40">
                    <div className="flex items-start justify-between">
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

        {/* BENEFITS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Why Alphatrix
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  More than just{" "}
                  <span className="text-outline-volt">sports</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Our residential programs are designed to build physical
                  abilities while encouraging confidence, consistency,
                  discipline and teamwork.
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
                  Bring Alphatrix to your community
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
                  Build a healthier, fitter and more active community
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  Talk to the Alphatrix team about creating a sports and
                  fitness program for your residential complex.
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