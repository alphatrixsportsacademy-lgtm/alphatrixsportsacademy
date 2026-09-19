import { BookOpenCheck, CalendarCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { images } from "@/lib/images";
import { OutlineButton, Reveal, SectionPad, VoltButton } from "./shared";

const FEATURES = [
  {
    icon: BookOpenCheck,
    title: "NEP-Aligned Learning",
    text: "Curriculum built on the National Education Policy and global best practice.",
  },
  {
    icon: ShieldCheck,
    title: "Gamification Techniques",
    text: "Play-based methods that accelerate motor development and engagement.",
  },
  {
    icon: GraduationCap,
    title: "Progressive Lesson Plans",
    text: "72 grade-wise lesson plans and a 1008+ lesson activity bank with videos & games.",
  },
  {
    icon: CalendarCheck,
    title: "Strength Training Integration",
    text: "Age-appropriate strength and conditioning woven through the sports curriculum.",
  },
];

const BENEFITS = [
  "Digital portfolio assessments to track every child's progress",
  "Teacher training workshops for seamless implementation",
  "Yearly calendar and monthly planner of activities & sports events",
  "Infrastructure provision and technology-enabled monitoring",
  "Healthier, fitter students and improved school ranking",
];

export function Schools() {
  return (
    <section id="schools" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="absolute right-[-8%] top-Alphatrix size-[30rem] rounded-full bg-volt/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                Alphatrix for Schools
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                Elevate your school&apos;s learning with{" "}
                <span className="text-volt">Alphatrix</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                By partnering with Alphatrix, your school positions itself as an
                early adopter of comprehensive physical literacy programs in line
                with the National Education Policy (NEP) and the latest global
                understanding. Our innovative, gamified approach accelerates motor
                development — a unique and engaging learning experience.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3.5">
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-volt"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 flex flex-wrap items-center gap-4">
              <VoltButton href="#contact">Join Now</VoltButton>
              <OutlineButton href="#faq">School FAQs</OutlineButton>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -left-8 -bottom-8 size-28 rounded-3xl border border-volt/40"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
                <img
                  src={images.schoolsMain}
                  alt="Students taking part in a school sports day"
                  loading="lazy"
                  className="h-[24rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-ink/75 p-5 backdrop-blur-md">
                  <p className="font-display text-xl uppercase tracking-wide text-white">
                    Nursery to <span className="text-volt">Grade 12</span>
                  </p>
                  <p className="mt-1 text-xs text-mist">
                    72 grade-wise lesson plans · 1008+ lesson activity bank ·
                    Parent &amp; teacher workshops
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature tiles */}
        <div className="mt-Alphatrix grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt/40">
                <span className="grid size-12 place-items-center rounded-2xl bg-volt/12 text-volt transition-all duration-300 group-hover:bg-volt group-hover:text-ink">
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionPad>
    </section>
  );
}