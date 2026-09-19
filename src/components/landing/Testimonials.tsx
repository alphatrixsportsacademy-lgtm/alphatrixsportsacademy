import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionPad } from "./shared";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const count = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink py-24 lg:py-32"
    >
      {/* Background */}
      <div
        className="bg-grid-faint absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-[-12rem] size-[32rem] -translate-x-1/2 rounded-full bg-volt/[0.08] blur-[130px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="relative">

          {/* HEADER */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                From Our Community
              </p>

              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl lg:text-6xl">
                Real People.{" "}
                <span className="text-volt">Real Experiences.</span>
              </h2>
            </Reveal>

            {/* GOOGLE RATING */}
            <Reveal delay={0.1}>
              <a
                href="https://www.google.com/search?q=Alphatrix+mumbai+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card px-5 py-4 transition-colors duration-300 hover:border-volt/40"
              >
                <span className="font-display text-4xl uppercase text-volt">
                  4.5
                </span>

                <span>
                  <span
                    className="flex gap-0.5"
                    aria-label="Rated 4.5 out of 5"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-3.5",
                          i < 4
                            ? "fill-volt text-volt"
                            : "fill-white/25 text-white/25",
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </span>

                  <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-mist transition-colors group-hover:text-foreground">
                    Check our reviews on Google
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* TESTIMONIAL SLIDER */}
          <Reveal delay={0.12}>
            <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-card">

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid lg:grid-cols-2"
                >

                  {/* LEFT SIDE */}
                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-volt">
                      {current.tag}
                    </p>

                    <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
                      {current.name}
                    </h3>

                    <p className="mt-2 text-sm text-mist">
                      {current.role}
                    </p>

                    {/* QUOTE */}
                    <blockquote className="mt-8 border-l-2 border-volt pl-5 font-serif text-lg italic leading-relaxed text-foreground/90 sm:text-xl">
                      “{current.quote}”
                    </blockquote>

                    {/* HIGHLIGHTS */}
                    <div className="mt-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mist">
                        What stood out
                      </p>

                      <ul className="mt-4 space-y-3">
                        {current.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-foreground/80"
                          >
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-volt text-xs font-bold text-ink">
                              ✓
                            </span>

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT SIDE — VIDEO */}
                  <div className="relative min-h-[420px] bg-black lg:min-h-[520px]">

                    <video
                      key={current.video}
                      src={current.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-sm">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        Video Feedback
                      </span>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}
              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-4 sm:px-12 lg:px-14">

                {/* DOTS */}
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial from ${t.name}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index
                          ? "w-6 bg-volt"
                          : "w-1.5 bg-white/25 hover:bg-white/50",
                      )}
                    />
                  ))}
                </div>

                {/* COUNTER */}
                <span className="hidden font-display text-sm uppercase tracking-[0.14em] text-mist sm:block">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </span>

                {/* ARROWS */}
                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid size-10 place-items-center rounded-full border border-white/15 text-foreground transition-colors hover:border-volt hover:text-volt"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid size-10 place-items-center rounded-full border border-white/15 text-foreground transition-colors hover:border-volt hover:text-volt"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>

                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </SectionPad>
    </section>
  );
}