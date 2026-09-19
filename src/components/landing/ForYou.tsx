import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal, SectionHeading, SectionPad } from "./shared";

const CARDS = [
  {
    num: "01",
    image: "/1.png",
    alt: "Children participating in sports training",
    title: "For Children",
    href: "/programs/children",
    cta: "Explore Children",
  },
  {
    num: "02",
    image: "/school.jpeg",
    alt: "Children in a school session",
    title: "For Schools",
    href: "/programs/schools",
    cta: "Explore Schools",
  },

  {
    num: "04",
    image: "/coach.png",
    alt: "Coach training in a sports facility",
    title: "ACA Campus",
    href: "/programs/coaches",
    cta: "Explore ACA",
  },
  {
    num: "05",
    image: "/virtual.png",
    alt: "Children participating in guided movement training",
    title: "Virtual Training",
    href: "/programs/virtual",
    cta: "Explore Virtual",
  },
  {
    num: "06",
    image: "/corporates.png",
    alt: "Corporate fitness session",
    title: "For Corporates",
    href: "/programs/corporates",
    cta: "Explore Corporates",
  },
];

export function ForYou() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-ink py-24 lg:py-32"
    >
      <div
        className="absolute left-1/2 top-[-10rem] h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-volt/40 to-transparent"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Programs"
            title={
              <>
                Alphatrix <span className="text-volt">for you</span>
              </>
            }
          />

          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-mist lg:pb-2 lg:text-right">
              Sports, fitness and development programs designed for children,
              schools, residential communities, coaches, virtual learners and
              corporate teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.num} delay={i * 0.08} className="h-full">
              <a
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-volt/45 hover:shadow-[0_30px_60px_-24px_rgba(200,245,66,0.22)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1 font-display text-xs uppercase tracking-[0.18em] text-volt backdrop-blur-sm">
                    {card.num}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase tracking-wide transition-colors duration-300 group-hover:text-volt">
                    {card.title}
                  </h3>

                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-volt">
                    {card.cta}

                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </SectionPad>
    </section>
  );
}