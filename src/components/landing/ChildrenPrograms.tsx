import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal, SectionHeading, SectionPad, VoltButton } from "./shared";

const PROGRAMS = [
  {
    num: "01",
    image: images.childrenFitness,
    alt: "Child doing a guided fitness movement",
    age: "2 – 6 yrs",
    title: "Fitness",
    text: "Junior Kleinetor FitGym — coordination, balance and agility, the ABCs of physical literacy, taught through games.",
  },
  {
    num: "02",
    image: images.childrenSports,
    alt: "Football on a grass pitch",
    age: "2 – 6 yrs",
    title: "Sports",
    text: "Target games, net & wall games, fielding & striking, and invasion sports — real skills through real play.",
  },
  {
    num: "03",
    image: images.childrenMovement,
    alt: "Children stretching and moving in a yoga session",
    age: "6 – 12 yrs",
    title: "Movement Skills",
    text: "Bodyweight movements, resistance and aerobic training, plus speed and agility for fit, resilient kids.",
  },
  {
    num: "04",
    image: images.childrenGames,
    alt: "Children racing in a relay during sports day",
    age: "6 – 12 yrs",
    title: "Games",
    text: "High-energy games that build confidence, strategic thinking and a winning mindset in school sports.",
  },
  {
    num: "05",
    image: images.childrenStrength,
    alt: "Strength training in a gym",
    age: "6 – 12 yrs",
    title: "Strength & Conditioning",
    text: "Sport-specific conditioning and general strength building — the foundation for every future athlete.",
  },
  {
    num: "06",
    image: images.childrenAthletics,
    alt: "Young sprinter on an athletics track",
    age: "10 – Alphatrix+ yrs",
    title: "Athletic Development",
    text: "Long-term athlete development (LTAD), teen fitness, weight management and peak athletic potential.",
  },
  {
    num: "07",
    image: images.childrenSpecial,
    alt: "Guided personal training session",
    age: "All ages",
    title: "Special Programs",
    text: "Goal-based fitness for specially-abled children, sports nutrition and sports psychology — with compassion.",
  },
];

export function ChildrenPrograms() {
  return (
    <section id="children" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute left-[-10%] top-1/3 size-[28rem] rounded-full bg-volt/[0.05] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Programs for Children"
            title={
              <>
                Tailored training for every{" "}
                <span className="text-volt">age &amp; stage</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-mist lg:pb-2 lg:text-right">
              From an active start at 2, to long-term athlete development for
              teens — a customized curriculum for diverse age groups, with
              inclusive options for specially-abled children.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.num} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-volt/45 hover:shadow-[0_30px_60px_-24px_rgba(200,245,66,0.2)]">
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.alt}
                    loading="lazy"
                    className="aspect-[Alphatrix/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1 font-display text-xs uppercase tracking-[0.Alphatrixem] text-volt backdrop-blur-sm">
                    {program.age}
                  </span>
                  <span className="absolute bottom-3 right-4 font-display text-4xl uppercase text-white/20 transition-colors duration-300 group-hover:text-volt/60">
                    {program.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase tracking-wide transition-colors duration-300 group-hover:text-volt">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {program.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-volt transition-colors hover:text-white"
                  >
                    Enquire Now
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={0.4} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-volt p-6 text-ink">
              <div
                className="bg-stripes-volt absolute inset-0 opacity-10"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="font-display text-xs uppercase tracking-[0.2em]">
                  Not sure where to start?
                </span>
                <h3 className="mt-3 font-display text-3xl uppercase leading-tight tracking-wide">
                  Let&apos;s find your child&apos;s perfect program
                </h3>
              </div>
              <div className="relative mt-8">
                <VoltButton
                  href="#contact"
                  className="w-full bg-ink text-volt hover:bg-ink/90 hover:shadow-none hover:text-volt"
                >
                  Talk to Us
                </VoltButton>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionPad>
    </section>
  );
}