import {
  ArrowRight,
  Award,
  Check,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Medal,
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

const TRAINING_AREAS = [
  {
    icon: GraduationCap,
    title: "Coaching Fundamentals",
    text: "Learn the fundamentals of planning, delivering and managing effective sports and fitness sessions.",
  },
  {
    icon: HeartPulse,
    title: "Child Fitness & Physical Literacy",
    text: "Understand age-appropriate movement, physical literacy and fitness development for children.",
  },
  {
    icon: Medal,
    title: "Sports Coaching",
    text: "Develop practical knowledge of sports skills, drills, games and progressive coaching methods.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    text: "Learn the foundations of strength, endurance, mobility, speed and agility training.",
  },
  {
    icon: Users,
    title: "Managing Groups",
    text: "Build the communication, leadership and group-management skills required for coaching children and teams.",
  },
  {
    icon: Award,
    title: "Professional Development",
    text: "Develop your coaching approach through practical learning, assessment and continuous upskilling.",
  },
];

const WHO_CAN_JOIN = [
  "Aspiring sports coaches",
  "PE teachers and educators",
  "Fitness trainers",
  "Sports graduates and students",
  "Existing coaches looking to upskill",
  "Individuals interested in children's sports and fitness",
];

const COURSE_STAGES = [
  {
    number: "01",
    title: "Learn",
    text: "Build your understanding of sports coaching, child development, fitness and physical literacy.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Apply concepts through practical drills, activities, session planning and coaching scenarios.",
  },
  {
    number: "03",
    title: "Demonstrate",
    text: "Put your coaching skills into practice through guided practical assessments.",
  },
  {
    number: "04",
    title: "Grow",
    text: "Continue developing your coaching skills and build confidence to deliver professional sessions.",
  },
];

const BENEFITS = [
  "Structured coaching education",
  "Practical sports and fitness learning",
  "Understanding of child physical development",
  "Session planning and activity design",
  "Sports safety and responsible coaching",
  "Group management and communication",
  "Practical coaching experience",
  "Assessment-based learning",
];

export default function CoachAcademy() {
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
                  ACA — Alphatrix Coach Academy
                </p>

                <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
                  Build
                  <br />
                  <span className="text-volt">better</span>
                  <br />
                  coaches
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Develop the knowledge, practical skills and confidence to
                  deliver engaging sports and fitness programs for children,
                  athletes and communities.
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
                      src={"/aca1.png"}
                      alt="Sports coach training session"
                      className="h-[24rem] w-full object-cover sm:h-[30rem]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl uppercase tracking-wide text-white">
                        Learn. Coach.{" "}
                        <span className="text-volt">Lead.</span>
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
                  About ACA
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Turn your passion for sport into{" "}
                  <span className="text-outline-volt">
                    professional coaching
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
                  <p>
                    Alphatrix Coach Academy is designed for people who want to
                    build strong foundations in sports, fitness and coaching.
                  </p>

                  <p>
                    The program combines knowledge with practical application,
                    helping coaches understand how to plan activities, work
                    with different age groups and create engaging training
                    environments.
                  </p>

                  <p>
                    The focus is not only on knowing the sport, but also on
                    knowing how to coach it effectively.
                  </p>
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* WHO CAN JOIN */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Who Can Join
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Built for people who want to{" "}
                  <span className="text-volt">coach better</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Whether you are starting your coaching journey or already
                  working with athletes and children, ACA provides a structured
                  path for learning and professional development.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {WHO_CAN_JOIN.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card px-5 py-4 text-sm text-foreground/85"
                    >
                      <Check className="mt-0.5 size-5 shrink-0 text-volt" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* TRAINING AREAS */}
        <section
          id="programs"
          className="relative overflow-hidden bg-background py-24 lg:py-32"
        >
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                Training Areas
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Everything you need to{" "}
                <span className="text-volt">coach with confidence</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TRAINING_AREAS.map((item, i) => (
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

        {/* COACHING FUNDAMENTALS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/asa2.png"}
                    alt="Coach leading a training session"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Coaching Fundamentals
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Learn how to{" "}
                  <span className="text-outline-volt">build better sessions</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Effective coaching starts with good planning. Learn how to
                  structure sessions, explain activities, demonstrate skills
                  and keep participants engaged.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Session planning",
                    "Warm-up and cool-down",
                    "Activity demonstrations",
                    "Progressive drills",
                    "Feedback and correction",
                    "Participant engagement",
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

        {/* CHILD FITNESS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal className="order-2 lg:order-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Child Fitness
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Understand the{" "}
                  <span className="text-outline-volt">
                    developing athlete
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Coaches working with children need to understand how
                  activities and training should change according to age,
                  ability and development.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Physical Literacy",
                    "Coordination",
                    "Balance",
                    "Agility",
                    "Movement Skills",
                    "Age-Appropriate Fitness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-3 text-sm font-semibold"
                    >
                      <Check className="size-4 shrink-0 text-volt" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/coach.png"}
                    alt="Child participating in fitness training"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* COURSE JOURNEY */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                The Learning Journey
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Learn it. Practice it.{" "}
                <span className="text-volt">Coach it.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {COURSE_STAGES.map((stage, i) => (
                <Reveal key={stage.number} delay={i * 0.07}>
                  <article className="rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-volt/40">
                    <span className="font-display text-5xl text-volt/30">
                      {stage.number}
                    </span>

                    <h3 className="mt-7 font-display text-2xl uppercase tracking-wide">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {stage.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </SectionPad>
        </section>

        {/* PRACTICAL ASSESSMENT */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Practical Development
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                  Coaching is learned{" "}
                  <span className="text-outline-volt">by doing</span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                  ACA combines learning with practical application so coaches
                  can develop confidence in delivering activities, managing
                  participants and adapting sessions.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    "Session Planning",
                    "Practical Coaching",
                    "Performance Assessment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-card p-5 font-display text-lg uppercase tracking-wide"
                    >
                      {item}
                    </div>
                  ))}
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
                  Why ACA
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Build your{" "}
                  <span className="text-volt">coaching advantage</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Develop the skills required to create structured, engaging
                  and responsible sports and fitness experiences.
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
                  Start Your Coaching Journey
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
                  Become a more confident and capable coach
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  Connect with Alphatrix to learn more about Coach Academy
                  training and upcoming programs.
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