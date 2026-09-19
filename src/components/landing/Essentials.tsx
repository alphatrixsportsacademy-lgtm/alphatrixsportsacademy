import { Accessibility, Brain, Palette, Smile, Users } from "lucide-react";
import { Reveal, SectionHeading, SectionPad } from "./shared";

const ESSENTIALS = [
  {
    icon: Accessibility,
    num: "01",
    title: "Movement Skills",
    text: "Fundamental movement skill milestones and essential sports literacy.",
  },
  {
    icon: Users,
    num: "02",
    title: "Social & Emotional",
    text: "Teamwork, decision-making, communication and discipline.",
  },
  {
    icon: Brain,
    num: "03",
    title: "Cognitive Development",
    text: "Enhanced problem-solving, decision-making and focus.",
  },
  {
    icon: Palette,
    num: "04",
    title: "Creativity",
    text: "Creativity and imaginative play, encouraged every session.",
  },
  {
    icon: Smile,
    num: "05",
    title: "Mental Wellbeing",
    text: "Confidence, joy and a healthy mind through movement.",
  },
];

export function Essentials() {
  return (
    <section id="essentials" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="bg-grid-faint absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-volt/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[-14rem] size-[30rem] -translate-x-1/2 rounded-full bg-volt/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <SectionHeading
          align="center"
          eyebrow="The Five Essentials"
          title={
            <>
              Alphatrix helps children achieve{" "}
              <span className="text-volt">five essentials</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ESSENTIALS.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-volt/50 hover:shadow-[0_26px_60px_-24px_rgba(200,245,66,0.3)]">
                <span className="font-display text-5xl uppercase leading-none text-outline-faint transition-all duration-300 group-hover:text-outline-volt">
                  {item.num}
                </span>
                <span className="mt-5 grid size-12 place-items-center rounded-2xl bg-volt/12 text-volt transition-all duration-300 group-hover:rotate-6 group-hover:bg-volt group-hover:text-ink">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl uppercase leading-tight tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{item.text}</p>

                <span
                  className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-volt transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </SectionPad>
    </section>
  );
}