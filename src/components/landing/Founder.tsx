import { Award, GraduationCap, HeartHandshake, Quote } from "lucide-react";
import { Reveal, SectionPad } from "./shared";

type SupportItem = {
  title: string;
  text: string;
  icon: typeof Award;
};

const SUPPORT: SupportItem[] = [];

export function Founder() {
  return (
    <section id="team" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute right-[-8%] bottom-[-10%] size-[32rem] rounded-full bg-volt/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-Alphatrix">
          {/* Quote */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                Message from the Founder
              </p>

              <figure className="mt-8">
                <Quote
                  className="size-10 -scale-x-100 text-volt"
                  aria-hidden="true"
                />
                <blockquote className="mt-5 font-serif text-2xl italic leading-snug text-foreground/95 sm:text-[1.75rem] lg:text-3xl">
                  &ldquo;For me, sports have always been more than physical activity — they are a 
                  powerful way to build character, confidence and resilience. After more than 10 
                  years in the sports and fitness field, I wanted to create something that goes 
                  beyond conventional training. Alphatrix is built on the belief that every individual 
                  deserves the right guidance, structured development and opportunity to reach their 
                  potential. Our mission is to create an environment where people can train with purpose,
                   grow with confidence and carry the values of sport into every part of life.&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4">
                  <div className="size-14 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src="/profilepic.jpeg"
                      alt="Mr. Raesh"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span>
                    <span className="block font-display text-lg uppercase tracking-wide text-foreground">
                      Mr. Raesh
                    </span>
                    <span className="block text-sm text-mist">
                      Founder &amp; CEO, Alphatrix · Sports & Fitness Professional
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            {/* Supporting pillars */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {SUPPORT.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-card p-5 transition-colors duration-300 hover:border-volt/35">
                    <item.icon className="size-5 text-volt" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-mist">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative">
                <div
                  className="absolute -right-6 -top-6 size-24 rounded-3xl border border-volt/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 sm:p-10">
                  <div
                    className="bg-grid-faint absolute inset-0 opacity-50"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="size-24 overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(200,245,66,0.5)]">
                      <img
                       src="/profilepic.jpeg"
                       alt="Mr. Raesh, Founder and CEO of Alphatrix"
                       className="h-full w-full object-cover"
                     />
                    </div>
                    <h3 className="mt-6 font-display text-3xl uppercase tracking-wide">
                      Mr. Raesh
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-volt">
                      Founder / CEO
                    </p>

                    <p className="mt-5 text-sm leading-relaxed text-mist">
                      At Alphatrix, our vision is to make sports and physical 
                      development an essential part of every child’s journey. 
                      With over 10 years of experience in sports, fitness and 
                      child development, I have seen how the right guidance can 
                      build not only stronger athletes, but also more confident, 
                      disciplined and resilient individuals. Our goal is to create 
                      structured, engaging and accessible programs where every child 
                      gets the opportunity to move, learn, play and grow.
                    </p>

                    <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                      {[
                        "10+ years of experience in sports & fitness",
                        "Building structured and engaging sports programs",
                        "Developing confidence, discipline & active lifestyles",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-foreground/85"
                        >
                          <span
                            className="mt-1.5 size-2 shrink-0 rounded-full bg-volt"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionPad>
    </section>
  );
}