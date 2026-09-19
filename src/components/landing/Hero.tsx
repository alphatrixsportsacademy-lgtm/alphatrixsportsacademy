import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Star, Zap } from "lucide-react";
import { images } from "@/lib/images";
import { OutlineButton, SectionPad, VoltButton } from "./shared";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const MARQUEE_WORDS = [
  "Play",
  "Sports",
  "Fitness",
  "Gamification",
  "Storytelling",
  "Physical Literacy",
  "Movement Skills",
];

const STATS = [
  { value: "2–10", label: "Years served" },
  { value: "NEP", label: "Aligned curriculum" },
  { value: "4.5★", label: "Google rating" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* Backdrop */}
      <div
        className="bg-grid-faint absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-volt/[0.13] blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[-8%] size-[26rem] rounded-full bg-volt/[0.07] blur-[100px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="relative grid min-h-screen items-center gap-14 pb-24 pt-32 lg:grid-cols-12 lg:gap-10 lg:pt-36">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 lg:col-span-6"
          >
            <motion.p
              variants={item}
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-volt"
            >
              <span className="h-px w-10 bg-volt" aria-hidden="true" />
              Alphatrix· Physical Literacy for Kids
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[clamp(3.2rem,9vw,6.5rem)] uppercase leading-[0.92] tracking-tight text-foreground"
            >
              Making
              <br />
              Fitness <span className="text-outline-volt">Fun</span>
              <br />
              for Kids
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              Alphatrix Sports Academy helps children build fitness, sports skills
              and confidence through structured training and expert coaching —
              creating an environment where every child can train, play and grow.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <VoltButton href="#contact">Enquire Now</VoltButton>
              <OutlineButton href="#programs">Explore Programs</OutlineButton>
            </motion.div>

            {/* Stat strip */}
            <motion.dl
              variants={item}
              className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-2xl uppercase tracking-wide text-volt sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative lg:col-span-6"
          >
            <div className="relative">
              {/* Rotating dashed ring */}
              <div
                className="absolute -right-6 -top-8 size-28 animate-spin-slow rounded-full border-2 border-dashed border-volt/50 sm:-right-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-6 size-20 rounded-full bg-volt/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
                <video
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[32rem] w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="font-display text-lg uppercase leading-tight tracking-wide text-white sm:text-xl">
                    Work hard.
                    <br />
                    <span className="text-volt">Play harder.</span>
                  </p>
                  <span className="hidden rounded-full border border-white/20 bg-ink/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:block">
                    Start Strong
                  </span>
                </div>
              </div>
              

              
            </div>
          </motion.div>
        </div>
      </SectionPad>

      {/* Marquee strip */}
      <div className="relative border-y border-white/10 bg-ink">
        <div className="flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
              (word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="flex items-center gap-10 whitespace-nowrap font-display text-xl uppercase tracking-[0.14em] text-foreground/70"
                >
                  {word}
                  <Award className="size-4 text-volt" aria-hidden="true" />
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Star decor */}
      <Star
        className="absolute right-[6%] top-24 hidden size-8 animate-pulse-glow text-volt/70 lg:block"
        aria-hidden="true"
      />
    </section>
  );
}