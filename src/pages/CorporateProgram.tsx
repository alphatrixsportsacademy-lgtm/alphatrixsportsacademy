import {
  ArrowRight,
  BarChart3,
  Check,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
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
    icon: HeartPulse,
    title: "Employee Wellness",
    text: "Structured wellness initiatives that encourage employees to stay active, healthy and engaged.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Programs",
    text: "Professional fitness sessions designed around the needs of your employees and workplace.",
  },
  {
    icon: Users,
    title: "Group Activities",
    text: "Interactive group sessions that encourage participation, teamwork and stronger workplace connections.",
  },
  {
    icon: BarChart3,
    title: "Fitness Challenges",
    text: "Goal-based challenges that encourage employees to build consistency and make physical activity part of their routine.",
  },
  {
    icon: ShieldCheck,
    title: "Workplace Well-being",
    text: "Programs that support healthier habits and contribute to a positive and energetic workplace environment.",
  },
  {
    icon: HeartPulse,
    title: "Custom Programs",
    text: "Flexible wellness programs designed according to your organisation's employees, goals and requirements.",
  },
];

const PROGRAM_FORMATS = [
  {
    number: "01",
    title: "On-Site Sessions",
    text: "Bring guided fitness and wellness sessions directly to your workplace.",
  },
  {
    number: "02",
    title: "Virtual Sessions",
    text: "Give employees access to structured fitness training through convenient online sessions.",
  },
  {
    number: "03",
    title: "Wellness Events",
    text: "Organise engaging fitness activities, challenges and wellness events for your teams.",
  },
  {
    number: "04",
    title: "Custom Plans",
    text: "Build a program around your organisation's workforce, schedule and wellness objectives.",
  },
];

const ACTIVITIES = [
  "Functional Fitness",
  "Strength & Conditioning",
  "Mobility & Stretching",
  "Group Fitness",
  "Fitness Challenges",
  "Sports Activities",
  "Wellness Sessions",
  "Team Activities",
];

const BENEFITS = [
  "Encourages regular physical activity",
  "Supports employee health and well-being",
  "Improves energy and engagement",
  "Promotes teamwork and interaction",
  "Creates a more active workplace culture",
  "Flexible on-site and virtual options",
  "Programs can be customised for your organisation",
  "Engaging activities for different fitness levels",
];

export default function CorporateProgram() {
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
                  Alphatrix for Corporates
                </p>

                <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
                  Build a
                  <br />
                  <span className="text-volt">healthier</span>
                  <br />
                  workplace
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Workplace sports, fitness and wellness programs designed to
                  help employees stay active, connected and engaged.
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
                      src={"/corporate2.png"}
                      alt="Corporate fitness session"
                      className="h-[24rem] w-full object-cover sm:h-[30rem]"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl uppercase tracking-wide text-white">
                        Move. Connect.{" "}
                        <span className="text-volt">Thrive.</span>
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
                  Corporate Wellness
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  A workplace that{" "}
                  <span className="text-outline-volt">moves together</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
                  <p>
                    Alphatrix helps organisations create opportunities for
                    employees to stay physically active through structured
                    fitness, sports and wellness programs.
                  </p>

                  <p>
                    Our programs can be delivered on-site, virtually or
                    through special wellness events depending on the needs of
                    your organisation.
                  </p>

                  <p>
                    The objective is to make physical activity accessible,
                    engaging and consistent for employees across different
                    fitness levels.
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
                Complete workplace{" "}
                <span className="text-volt">wellness solutions</span>
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

        {/* ACTIVITIES */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={"/corporate1.png"}
                    alt="Employees participating in a fitness activity"
                    className="h-[26rem] w-full object-cover sm:h-[32rem]"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Activities
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Make wellness{" "}
                  <span className="text-outline-volt">engaging</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                  Employees can participate in a range of activities designed
                  to encourage movement, fitness, interaction and healthy
                  habits.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {ACTIVITIES.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-3 text-sm font-semibold"
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

        {/* FORMATS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                Flexible Delivery
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Choose the format that{" "}
                <span className="text-volt">works for your team</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {PROGRAM_FORMATS.map((item, i) => (
                <Reveal key={item.number} delay={i * 0.07}>
                  <article className="rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-volt/40">
                    <span className="font-display text-5xl text-volt/30">
                      {item.number}
                    </span>

                    <h3 className="mt-7 font-display text-2xl uppercase tracking-wide">
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

        {/* CUSTOM PROGRAM */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  Built Around Your Organisation
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                  Your team. Your goals.{" "}
                  <span className="text-outline-volt">Your program.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                  Alphatrix can work with organisations to create wellness
                  initiatives based on employee requirements, available
                  facilities, schedules and participation goals.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    "Understand",
                    "Design",
                    "Deliver",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-card p-6"
                    >
                      <span className="font-display text-4xl text-volt/30">
                        0{i + 1}
                      </span>

                      <h3 className="mt-4 font-display text-xl uppercase tracking-wide">
                        {item}
                      </h3>
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
                  Why Alphatrix
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Invest in a{" "}
                  <span className="text-volt">healthier workplace</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  A consistent wellness program can create more opportunities
                  for employees to move, connect and build healthier habits.
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
                  Build Your Corporate Wellness Program
                </p>

                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
                  Create a more active workplace with Alphatrix
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  Connect with the Alphatrix team to discuss a customised
                  sports, fitness and wellness program for your organisation.
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