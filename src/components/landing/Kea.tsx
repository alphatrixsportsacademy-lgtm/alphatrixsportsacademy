import {
  Activity,
  Brain,
  ClipboardCheck,
  Gamepad2,
  HeartPulse,
  ShieldAlert,
} from "lucide-react";
import { images } from "@/lib/images";
import { Reveal, SectionPad, VoltButton } from "./shared";

const CURRICULUM = [
  {
    icon: Activity,
    title: "Scientific Program Design",
    text: "Structure sessions that are safe, progressive and truly effective for children.",
  },
  {
    icon: ClipboardCheck,
    title: "Learning How to Assess",
    text: "Track progress, identify strengths and guide each child's development.",
  },
  {
    icon: Gamepad2,
    title: "Play-Based Approach",
    text: "Engage and motivate children so fitness sessions are joyful and effective.",
  },
  {
    icon: Brain,
    title: "Situation-Based Problem Solving",
    text: "Navigate real coaching scenarios and challenges with confidence.",
  },
  {
    icon: ShieldAlert,
    title: "Injury Prevention",
    text: "Keep young athletes safe with age-appropriate training principles.",
  },
  {
    icon: HeartPulse,
    title: "Child-Specific Sports Psychology",
    text: "Foster a positive, supportive environment built on child development science.",
  },
];

const CAREERS = [
  "Youth fitness coach with Alphatrix",
  "Physical education instructor",
  "Placement in preschools & school wellness roles",
  "Start your own youth fitness centre",
];

export function Kea() {
  return (
    <section id="kea" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="bg-grid-faint absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-Alphatrix">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                KEA Campus
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                Become an <span className="text-volt">exceptional coach</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                The children&apos;s fitness industry is nascent and unorganized —
                there is a real need for knowledgeable coaches and mentors with
                excellent ability to engage children. KEA, the Alphatrix Educator
                Academy, provides certification courses in youth fitness and
                upskilling workshops that keep coaches connected, empowered and
                ahead of every new development.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={images.keaMain}
                  alt="Coach training facility at KEA Campus"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="flex items-center justify-between gap-4 bg-card px-5 py-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.Alphatrixem] text-mist">
                    Certification · Community · AI-powered learning
                  </span>
                  <span className="font-display text-2xl uppercase text-volt">
                    60<span className="text-sm">min</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26} className="mt-10">
              <VoltButton href="#contact">Become an Instructor</VoltButton>
            </Reveal>
          </div>

          {/* Curriculum */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/70">
                Here&apos;s what our program covers
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {CURRICULUM.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/40">
                    <span className="grid size-11 place-items-center rounded-xl bg-volt/12 text-volt transition-all duration-300 group-hover:bg-volt group-hover:text-ink">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-mist">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-3xl border border-volt/25 bg-volt/[0.06] p-6">
                <p className="font-display text-lg uppercase tracking-wide text-volt">
                  Kickstart a rewarding career
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {CAREERS.map((career) => (
                    <li
                      key={career}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span
                        className="mt-1.5 size-2 shrink-0 rounded-full bg-volt"
                        aria-hidden="true"
                      />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionPad>
    </section>
  );
}