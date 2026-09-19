import { images } from "@/lib/images";
import { Reveal, SectionPad, VoltButton } from "./shared";

const SERVICES = [
  "Corporate fitness",
  "Wellness sessions",
  "Boot camps",
  "Fitness tests",
  "Sports events",
  "Nutrition seminars",
  "Wellness talks",
  "Team-building activities",
];

export function Corporate() {
  return (
    <section id="corporates" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute left-[-8%] top-24 size-[26rem] rounded-full bg-volt/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy + services */}
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                For Corporates
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                Corporate wellness,
                <br />
                <span className="text-volt">engineered for teams</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                Alphatrix is your trusted partner in fostering comprehensive
                corporate wellness and fitness programs dedicated to enhancing the
                well-being of your employees — through a blend of digital and
                on-ground solutions that keep teams healthy, engaged and
                productive.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {SERVICES.map((service, i) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 border-b border-white/8 pb-3.5 text-sm font-semibold text-foreground/85"
                  >
                    <span className="font-display text-sm uppercase text-volt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-10">
              <VoltButton href="#contact">Enquire Now</VoltButton>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.12}>
            <div className="relative pb-16">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src={images.corporateMain}
                  alt="Employee taking part in a corporate fitness session"
                  loading="lazy"
                  className="h-[24rem] w-full object-cover sm:h-[28rem]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -bottom-2 left-6 w-44 overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:left-10 sm:w-52">
                <img
                  src={images.corporateWellness}
                  alt="Wellness session with colleagues"
                  loading="lazy"
                  className="h-32 w-full object-cover sm:h-36"
                />
              </div>

              {/* Mission quote card */}
              <div className="absolute -right-2 bottom-0 left-40 rounded-2xl border border-white/10 bg-ink/90 p-5 shadow-2xl backdrop-blur-md sm:left-56 sm:p-6">
                <p className="font-display text-lg uppercase leading-tight tracking-wide text-volt">
                  Our mission
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">
                  Cultivate a positive work environment, elevate morale and
                  empower employees to lead healthier, more productive lives.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionPad>
    </section>
  );
}