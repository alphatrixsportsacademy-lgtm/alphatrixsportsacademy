import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { images } from "@/lib/images";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Reveal, SectionPad, VoltButton } from "@/components/landing/shared";

const PROGRAMS = [
  {
    number: "01",
    title: "Physical Literacy",
    text: "Build strong movement foundations through engaging activities that help children become confident, active and ready to participate in sports.",
    image: "/school.jpeg",
  },
  {
    number: "02",
    title: "Sports Fundamentals",
    text: "Develop essential sporting fundamentals through structured coaching, age-appropriate drills and progressive skill development.",
    image: "/school1.png",
  },
];

const CURRICULUM = [
  
];

const BENEFITS = [
  "Improved fitness and physical abilities",
  "Greater confidence and participation",
  "Discipline and consistency",
  "Teamwork and communication",
  "Stronger sports fundamentals",
  "Positive attitude towards an active lifestyle",
];

export default function SchoolsProgram() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-ink">
          <img
            src={"/school1.png"}
            alt="Children participating in sports activities"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

          <SectionPad className="relative z-10 pb-16 pt-32 lg:pb-24">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" />
                Alphatrix for Schools
              </p>

              <h1 className="mt-5 max-w-5xl font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
                Building
                <br />
                <span className="text-volt">Stronger</span> Students
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Structured sports, fitness and physical literacy programs designed
                to help schools create healthier, more confident and active students.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <VoltButton href="#school-enquiry">Enquire for Your School</VoltButton>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-display text-sm uppercase tracking-[0.12em] text-white transition hover:border-volt hover:text-volt"
                >
                  View Curriculum
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </SectionPad>
        </section>

        {/* OVERVIEW */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  01 / The Program
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
                  More Than
                  <br />
                  <span className="text-outline-volt">Physical Education</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-foreground/85 sm:text-xl">
                  Alphatrix Sports Academy works with schools to bring structured,
                  engaging sports and fitness experiences directly into the school
                  environment.
                </p>
                <p className="mt-5 leading-relaxed text-mist">
                  Our approach combines progressive training, expert coaching and
                  engaging activities to develop physical abilities, confidence,
                  discipline and teamwork while helping students build a positive
                  relationship with sport and an active lifestyle.
                </p>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* PROGRAM AREAS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                02 / What We Deliver
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
                One Program.
                <br />
                <span className="text-volt">Complete Development.</span>
              </h2>
            </Reveal>

            <div className="mt-0 space-y-8">
              {PROGRAMS.map((program, index) => (
                <Reveal key={program.number} delay={index * 0.08}>
                  <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-card lg:grid-cols-2">
                    <div className="relative min-h-[280px] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      <span className="absolute left-6 top-6 font-display text-5xl text-volt">
                        {program.number}
                      </span>
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-12">
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                        School Program
                      </p>
                      <h3 className="mt-3 font-display text-3xl uppercase sm:text-5xl">
                        {program.title}
                      </h3>
                      <p className="mt-5 max-w-xl leading-relaxed text-mist">
                        {program.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </SectionPad>
        </section>

        

        {/* HOW IT WORKS */}
        <section className="bg-ink py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  03 / Implementation
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
                  How We Work
                  <br />
                  <span className="text-volt">With Schools</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="leading-relaxed text-mist">
                  A simple process that allows schools to introduce structured
                  sports and fitness programming with clear planning and delivery.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                ["01", "Understand", "We understand the school's requirements and student needs."],
                ["02", "Plan", "We structure the appropriate activities and training program."],
                ["03", "Train", "Our coaches conduct engaging, structured sessions."],
                ["04", "Track", "Student development can be reviewed and improved over time."],
              ].map(([number, title, text]) => (
                <div key={number} className="bg-card p-7">
                  <span className="font-display text-3xl text-volt">{number}</span>
                  <h3 className="mt-8 font-display text-2xl uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{text}</p>
                </div>
              ))}
            </div>
          </SectionPad>
        </section>

        {/* BENEFITS */}
        <section className="bg-background py-24 lg:py-32">
          <SectionPad>
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  04 / Outcomes
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
                  What Students
                  <br />
                  <span className="text-outline-volt">Build</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {BENEFITS.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="rounded-2xl border border-white/10 bg-card p-5"
                    >
                      <span className="font-display text-xl text-volt">
                        0{index + 1}
                      </span>
                      <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </SectionPad>
        </section>

        {/* ENQUIRY */}
        <section id="school-enquiry" className="bg-volt py-24 text-ink lg:py-32">
          <SectionPad>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em]">
                  06 / School Partnership
                </p>
                <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                  Bring Alphatrix
                  <br />
                  To Your School
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-xl text-lg leading-relaxed text-ink/75">
                  Give your students a structured environment to train, play,
                  develop and grow.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-display text-sm uppercase tracking-[0.12em] text-volt transition hover:bg-white hover:text-ink"
                >
                  Enquire Now
                  <ArrowRight className="size-4" />
                </a>
              </Reveal>
            </div>
          </SectionPad>
        </section>
      </main>

      <Footer />
    </div>
  );
}
