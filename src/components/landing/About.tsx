import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { OutlineButton, Reveal, SectionPad, VoltButton } from "./shared";
const SLIDES = [
  {
    src: "/2.png",
    alt: "Children playing football together",
    caption: "Play that builds real skill",
  },
  {
    src: "/1.png",
    alt: "Young athlete sprinting on a track",
    caption: "Movement for every child",
  },
];

const PILLARS = ["Play", "Sports", "Fitness", "Gamification", "Storytelling", "Expert coaching"];

export function About() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute right-[-12%] top-24 size-[30rem] rounded-full bg-volt/[0.06] blur-[110px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                What is Alphatrix
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                A <span className="text-outline-volt">vitamin-enriched</span> playtime
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-base leading-relaxed text-foreground/85 sm:text-lg">
                Alphatrix Sports Academy is built on a simple belief — every child deserves the
                 opportunity to be active, confident and healthy. Through structured sports training,
                  fitness and engaging activities, we help children develop essential physical skills 
                  while enjoying the process.
              </p>
              <p className="mt-5 text-base leading-relaxed text-mist">
                Our programs go beyond physical fitness. We focus on building discipline, 
                teamwork, confidence and a lifelong love for sports — creating an environment
                 where children can train, play, learn and grow.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {PILLARS.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-foreground/85"
                  >
                    <Check className="size-3.5 text-volt" aria-hidden="true" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 flex flex-wrap items-center gap-4">
              <VoltButton href="#contact">Enquire Now</VoltButton>
              <OutlineButton href="#programs">Explore Programs</OutlineButton>
            </Reveal>
          </div>

          {/* Image slider */}
          <Reveal delay={0.12}>
            <div className="relative">
              <div
                className="absolute -left-8 -top-8 size-24 rounded-3xl border border-volt/40"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -right-6 size-32 rounded-full bg-volt/15 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative h-[24rem] sm:h-[28rem] lg:h-[32rem]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slide.src}
                      src={slide.src}
                      alt={slide.alt}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={slide.caption}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-6 left-6 font-display text-xl uppercase tracking-wide text-white"
                    >
                      {slide.caption}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Slider controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="grid size-10 place-items-center rounded-full border border-white/25 bg-ink/60 text-white backdrop-blur-sm transition-colors hover:border-volt hover:text-volt"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="grid size-10 place-items-center rounded-full border border-white/25 bg-ink/60 text-white backdrop-blur-sm transition-colors hover:border-volt hover:text-volt"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index ? "w-6 bg-volt" : "w-1.5 bg-white/40 hover:bg-white/70",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionPad>
    </section>
  );
}