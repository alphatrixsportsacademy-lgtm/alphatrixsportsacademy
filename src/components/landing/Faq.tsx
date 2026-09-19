import { MessageCircleQuestion } from "lucide-react";
import { FAQS } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OutlineButton, Reveal, SectionPad, VoltButton } from "./shared";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div
        className="absolute left-[-10%] top-[-6%] size-[26rem] rounded-full bg-volt/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                  <span className="h-px w-8 bg-volt" aria-hidden="true" />
                  FAQ
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                  Questions? <span className="text-volt">Answered.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-mist">
                  Everything parents and schools usually ask us about the
                  Alphatrix curriculum, school partnerships and the programs we
                  run. Can&apos;t find what you&apos;re looking for? Just reach
                  out — we&apos;re happy to help.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 rounded-3xl border border-volt/25 bg-volt/[0.06] p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-volt text-ink">
                    <MessageCircleQuestion className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-xl uppercase leading-tight tracking-wide">
                    Still have questions?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    Talk to our team about programs for your child, school or
                    organisation.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <VoltButton href="#contact" className="px-6 py-3 text-xs">
                      Enquire Now
                    </VoltButton>
                    <OutlineButton href="#contact" className="px-6 py-3 text-xs">
                      Talk to Us
                    </OutlineButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Accordion */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-white/10 first:border-t"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg uppercase leading-snug tracking-wide text-foreground/90 hover:text-volt hover:no-underline data-[state=open]:text-volt sm:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-mist">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </SectionPad>
    </section>
  );
}