import { Heart, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { CONTACT, FOOTER_QUICK_LINKS, FOOTER_SERVICES } from "@/lib/site";
import { Logo, SectionPad } from "./shared";

const SOCIALS = [
  { label: "Instagram", href: CONTACT.social.instagram, icon: Instagram },
  { label: "YouTube", href: CONTACT.social.youtube, icon: Youtube },
  { label: "LinkedIn", href: CONTACT.social.linkedin, icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div
        className="bg-grid-faint absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-volt/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[-10rem] size-[24rem] -translate-x-1/2 rounded-full bg-volt/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              India&apos;s top system for physical literacy and kids fitness —
              a child-led, gamified program of play, sports and expert coaching
              that keeps children fit, happy and engaged every single day.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Alphatrix on ${social.label}`}
                  className="grid size-11 place-items-center rounded-full border border-white/12 text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-volt hover:text-volt"
                >
                  <social.icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-volt">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-volt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-volt">
              Programs
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition-colors hover:text-volt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-volt">
              Get in Touch
            </p>
            <ul className="mt-5 space-y-4 text-sm text-mist">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-volt" aria-hidden="true" />
                <span>
                  {CONTACT.address[0]}
                </span>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-volt"
                >
                  <Phone className="size-4 shrink-0 text-volt" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-volt"
                >
                  <Mail className="size-4 shrink-0 text-volt" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Alphatrix Sports &amp; Fitness Education.
            All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-mist">
            Built with
            <Heart className="size-3.5 fill-volt text-volt" aria-hidden="true" />
            in Mumbai · Play · Sports · Fitness
          </p>
        </div>
      </SectionPad>
    </footer>
  );
}