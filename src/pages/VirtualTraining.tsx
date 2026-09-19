import {
  ArrowRight,
  Check,
  Dumbbell,
  Laptop,
  PlayCircle,
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
    title: "Live Fitness Training",
    text: "Structured online fitness sessions designed to keep children and participants active from home.",
  },
  {
    icon: Trophy,
    title: "Sports Skills",
    text: "Learn and practise fundamental sports movements, coordination, agility and fitness skills through guided sessions.",
  },
  {
    icon: PlayCircle,
    title: "Interactive Activities",
    text: "Fun games and movement-based activities that keep online training engaging and enjoyable.",
  },
  {
    icon: Users,
    title: "Expert Coaching",
    text: "Get guided instruction and feedback from Alphatrix coaches through live virtual sessions.",
  },
  {
    icon: Laptop,
    title: "Flexible Learning",
    text: "Access structured training without needing to travel to a physical training location.",
  },
  {
    icon: Trophy,
    title: "Progressive Development",
    text: "Follow a structured approach that helps participants gradually improve their movement and fitness abilities.",
  },
];

const AGE_GROUPS = [
  {
    number: "01",
    age: "3 – 6 YEARS",
    title: "Active Start",
    text: "Fun movement, coordination, balance and physical literacy activities designed for young children.",
  },
  {
    number: "02",
    age: "6 – 12 YEARS",
    title: "Sports & Fitness",
    text: "Interactive sports skills, fitness activities, games and movement training for growing children.",
  },
  {
    number: "03",
    age: "13 – 16 YEARS",
    title: "Teen Fitness",
    text: "Progressive fitness, strength, mobility, speed and agility training for teenagers.",
  },
  {
    number: "04",
    age: "16+ YEARS",
    title: "Fitness & Performance",
    text: "Goal-oriented online fitness and conditioning sessions for participants looking to improve their performance.",
  },
];

const BENEFITS = [
  "Train from the comfort of your home",
  "Live guidance from trained coaches",
  "Age-appropriate activities and exercises",
  "Improved coordination, mobility and fitness",
  "Regular physical activity and healthy habits",
  "Interactive games and movement activities",
  "Flexible access to structured training",
  "Progressive skill and fitness development",
];

const FEATURES = [
  "Live instructor-led sessions",
  "Sports and fitness activities",
  "Movement and coordination training",
  "Interactive games",
  "Age-based programming",
  "Home-friendly exercises",
];

export default function VirtualTraining() {
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
                  Alphatrix Virtual Training
                </p>

                <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
                  Train
                  <br />
                  <span className="text-volt">anywhere.</span>
                  <br />
                  Stay active.
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Bring structured sports, fitness and movement training to
                  your home with interactive virtual sessions led by Alphatrix
                  coaches.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <VoltButton href="#enquiry">
                    Enquire Now
                    <ArrowRight className="size-4" />
                  </VoltButton>

                  <OutlineButton href="#programs">
                    Explore Training
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
                      src={"/virtual1.png"}
                      alt="Children participating in guided movement training"
                      className="h-[24rem] w-full object-cover sm:h-[30rem]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl uppercase tracking-wide text-white">
                        Move. Train.{" "}
                        <span className="text-volt">Grow.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* ABOUT */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  About Virtual Training
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Professional training,
                  <br />
                  <span className="text-outline-volt">
                    wherever you are
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
                  <p>
                    Alphatrix Virtual Training makes structured sports and
                    fitness training accessible without requiring participants
                    to travel to a physical facility.
                  </p>

                  <p>
                    Sessions combine movement, fitness, sports skills and
                    interactive activities to create an engaging training
                    experience at home.
                  </p>

                  <p>
                    Programs can be adapted according to age, ability and
                    training goals.
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

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Complete training{" "}
                <span className="text-volt">from anywhere</span>
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

        {/* HOW IT WORKS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/virtual2"}
                    alt="Child participating in guided fitness training"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Training Experience
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Simple, engaging and{" "}
                  <span className="text-outline-volt">
                    easy to follow
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Participants join live sessions and follow their coach
                  through guided activities, exercises and sports-based
                  movements.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {FEATURES.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-3 text-sm font-semibold"
                    >
                      <Check className="size-4 shrink-0 text-volt" />
                      {feature}
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
                Age & Stage
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Training designed for{" "}
                <span className="text-volt">every stage</span>
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

        {/* HOME TRAINING */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal className="order-2 lg:order-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Train From Home
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Turn your space into a{" "}
                  <span className="text-outline-volt">
                    training zone
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Virtual sessions can use simple home-friendly movements and
                  activities so participants can stay active without needing
                  specialised equipment.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Bodyweight exercises",
                    "Mobility and stretching",
                    "Coordination activities",
                    "Speed and agility drills",
                    "Fitness games",
                    "Sports skill activities",
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

              <Reveal delay={0.1} className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/virtual3.png"}
                    alt="Children taking part in an interactive activity"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* BENEFITS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Why Virtual Training
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Stay active{" "}
                  <span className="text-volt">without limits</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Virtual training provides a convenient way to maintain
                  regular physical activity while receiving structured
                  guidance from Alphatrix coaches.
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
                  Start Training
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
                  Bring Alphatrix training to your home
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  Connect with the Alphatrix team to learn more about virtual
                  sports and fitness training.
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