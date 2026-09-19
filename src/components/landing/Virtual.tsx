import {
  Building2,
  Clock,
  Dumbbell,
  Globe2,
  Home,
  UserCheck,
} from "lucide-react";
import { images } from "@/lib/images";
import { OutlineButton, Reveal, SectionHeading, SectionPad, VoltButton } from "./shared";

const STEPS = [
  {
    icon: Home,
    num: "01",
    title: "Train from home",
    text: "No commutes, no waiting — bring the energy of a Alphatrix session straight into your living room.",
  },
  {
    icon: Dumbbell,
    num: "02",
    title: "Individual trainings",
    text: "Dynamic kickboxing dance workouts and personalised sessions tailored to your goals and pace.",
  },
  {
    icon: UserCheck,
    num: "03",
    title: "Personal coach",
    text: "Certified trainers connect with you one-on-one, delivering the motivation you need to reach your goals.",
  },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Tailored Corporate Wellness",
    text: "Specialized online fitness sessions curated for corporate teams of multinational companies — keeping employees active and engaged, even in remote work settings.",
  },
  {
    icon: Globe2,
    title: "Global Accessibility",
    text: "Our commitment extends globally, bringing health and wellness directly to your team and fostering an active lifestyle irrespective of location.",
  },
];

export function Virtual() {
  return (
    <section id="virtual" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute right-[-10%] bottom-[-10%] size-[30rem] rounded-full bg-volt/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Virtual Training"
            title={
              <>
                Workouts <span className="text-volt">wherever,</span>
                <br className="hidden sm:block" /> whenever
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-mist lg:pb-2 lg:text-right">
              The virtual fitness revolution by Alphatrix — kickboxing dance
              workouts and personalised training, transcending geographical
              barriers for individuals and corporations alike.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Steps */}
          <div className="lg:col-span-6">
            <div className="grid gap-5 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/40">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-volt/12 text-volt transition-all duration-300 group-hover:bg-volt group-hover:text-ink">
                        <step.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-3xl uppercase leading-none text-outline-faint transition-all duration-300 group-hover:text-outline-volt">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-mist">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/85 sm:text-lg">
                At-home or on-the-go, practice wherever and whenever you want.
                Our virtual, holistic lifestyle coaching sessions are designed to{" "}
                <strong className="font-semibold text-volt">
                  activate, stretch, move and strengthen
                </strong>{" "}
                your body — customised to deliver the inspiration you need to
                reach your goals.
              </p>
            </Reveal>

            {/* Feature tiles */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature, i) => (
                <Reveal key={feature.title} delay={0.24 + i * 0.08}>
                  <div className="group h-full rounded-3xl border border-volt/20 bg-volt/[0.05] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/50">
                    <feature.icon className="size-6 text-volt" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-base uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-mist">
                      {feature.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Visual */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <div className="relative">
              <div
                className="absolute -right-6 -top-8 size-28 animate-spin-slow rounded-full border-2 border-dashed border-volt/40"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 -left-6 size-40 rounded-full bg-volt/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
                <img
                  src={images.virtualMain}
                  alt="Child following an online fitness class from home"
                  loading="lazy"
                  className="h-[24rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                  aria-hidden="true"
                />

                {/* 60 min badge */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-ink/70 px-4 py-2 backdrop-blur-md">
                  <Clock className="size-4 text-volt" aria-hidden="true" />
                  <span className="font-display text-lg uppercase text-white">
                    60<span className="text-xs text-volt">min</span>
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-ink/75 p-5 backdrop-blur-md">
                  <p className="font-display text-xl uppercase tracking-wide text-white">
                    Join our online <span className="text-volt">fitness community</span>
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-mist">
                    Exciting, interactive sessions designed to keep you healthy,
                    energized and motivated — wherever you are.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <VoltButton href="#contact">Join Now</VoltButton>
          <OutlineButton href="#programs">Explore Programs</OutlineButton>
        </Reveal>
      </SectionPad>
    </section>
  );
}