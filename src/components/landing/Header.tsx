import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo, SectionPad } from "./shared";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <SectionPad>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          {/* Desktop nav */}
              <nav aria-label="Primary" className="hidden items-center gap-10 xl:flex">            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-semibold tracking-wide text-foreground/75 transition-colors hover:text-volt after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-volt after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-volt px-6 py-2.5 font-display text-[13px] uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:bg-white sm:inline-flex"
            >
              Enquire Now
              <ArrowRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-foreground transition-colors hover:border-volt hover:text-volt xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </SectionPad>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md xl:hidden"
          >
            <div className="grid max-h-[calc(100dvh-5rem)] gap-1 overflow-y-auto px-5 py-6 sm:px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.035 }}
                  className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-2xl uppercase tracking-wide text-foreground/85 transition-colors hover:bg-white/5 hover:text-volt"
                >
                  {link.label}
                  <ArrowRight className="size-4 text-volt/60" aria-hidden="true" />
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-volt px-6 py-4 font-display text-sm uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white"
              >
                Enquire Now
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}