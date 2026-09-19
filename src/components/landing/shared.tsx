import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Reveal --------------------------------- */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={revealVariants}
      custom={delay}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({
  children,
  className,
  tone = "volt",
}: {
  children: ReactNode;
  className?: string;
  tone?: "volt" | "mist";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em]",
        tone === "volt" ? "text-volt" : "text-mist",
        className,
      )}
    >
      <span className="h-px w-8 bg-volt" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ------------------------------ Section heading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow className={cn(align === "center" && "justify-center")}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}

/* --------------------------------- Buttons --------------------------------- */

const primaryButtonClasses =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-volt px-7 py-3.5 font-display text-sm uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_36px_-8px_rgba(200,245,66,0.55)] active:translate-y-0 active:scale-[0.98]";

const outlineButtonClasses =
  "group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 font-display text-sm uppercase tracking-[0.12em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-volt hover:text-volt active:translate-y-0 active:scale-[0.98]";

export function VoltButton({
  children,
  href = "#contact",
  className,
  external = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(primaryButtonClasses, className)}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export function OutlineButton({
  children,
  href = "#contact",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={cn(outlineButtonClasses, className)}>
      {children}
    </a>
  );
}

/* ----------------------------------- Logo ---------------------------------- */

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="relative flex h-Alphatrix w-44 items-center overflow-visible"
      aria-label="Alphatrix Sports Academy home"
    >
      <img
        src="/logo.png"
        alt="Alphatrix Sports Academy"
        className="h-28 w-40 translate-y-2 object-contain"
      />
    </a>
  );
}

/* ------------------------------ Scroll cue dot ----------------------------- */

export function SectionPad({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}