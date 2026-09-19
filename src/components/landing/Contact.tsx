import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry, type EnquiryPayload } from "@/lib/enquiry";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionPad } from "./shared";

/* ------------------------------- Field config ------------------------------ */

const AGE_OPTIONS = [
  "Under 2 years",
  "2 – 4 years",
  "4 – 6 years",
  "6 – 8 years",
  "8 – 12 years",
  "12 – 16 years",
  "16+ years",
];

const INTEREST_OPTIONS = [
  "Programs for Children",
  "School Partnership",
  "Corporate Wellness",
  "KEA Coach Certification",
  "Virtual Training",
  "Residential Complex Program",
  "Other",
];

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  ageOfChild: string;
  city: string;
  school: string;
  interestedIn: string;
  message: string;
  consent: boolean;
}

const INITIAL_VALUES: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  ageOfChild: "",
  city: "",
  school: "",
  interestedIn: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues): Errors {
  const errors: Errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter the parent's full name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Name looks too short — please enter your full name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number (10–15 digits).";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email doesn't look right — please check it.";
  }

  if (!values.interestedIn) {
    errors.interestedIn = "Please select what you're interested in.";
  }

  if (!values.consent) {
    errors.consent = "Please accept before submitting.";
  }

  return errors;
}

/* -------------------------------- Helpers ---------------------------------- */

const fieldClasses =
  "h-12 rounded-xl border-white/12 bg-card px-4 text-[15px] text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-volt/60 focus-visible:ring-volt/20";

const selectClasses = cn(
  fieldClasses,
  "appearance-none pr-10 [&>option]:bg-card [&>option]:text-foreground",
);

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[12px] font-medium text-destructive">
      {message}
    </p>
  );
}

/* --------------------------------- Contact --------------------------------- */

export function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set =
    (key: keyof FormValues) =>
    (value: string | boolean) => {
      setValues((v) => ({ ...v, [key]: value }));
      setErrors((e) => ({ ...e, [key]: undefined }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setSubmitError(null);
    try {
      const payload: EnquiryPayload = {
        fullName: values.fullName.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        ageOfChild: values.ageOfChild || undefined,
        city: values.city.trim() || undefined,
        school: values.school.trim() || undefined,
        interestedIn: values.interestedIn,
        message: values.message.trim() || undefined,
        consent: values.consent,
      };
      await submitEnquiry(payload);
      setStatus("success");
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      setSubmitError(
        "Something went wrong while sending your enquiry. Please try again.",
      );
      setStatus("error");
    }
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus("idle");
    setSubmitError(null);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        className="absolute left-[-8%] bottom-[-10%] size-[28rem] rounded-full bg-volt/[0.06] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-6%] top-16 size-24 rounded-3xl border border-volt/30 rotate-12"
        aria-hidden="true"
      />

      <SectionPad>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-volt">
                <span className="h-px w-8 bg-volt" aria-hidden="true" />
                Contact Us
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.98] tracking-wide sm:text-5xl">
                Let&apos;s get your child <span className="text-volt">moving</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-mist">
                Drop us a message and our team will get back to you within 24
                hours with program details, schedules and a free trial session.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Visit us",
                    value: (
                      <>
                        {CONTACT.address[0]}
                        <br />
                        {CONTACT.address[1]}
                      </>
                    ),
                  },
                  {
                    icon: Phone,
                    label: "Call us",
                    value: (
                      <a
                        href={CONTACT.phoneHref}
                        className="transition-colors hover:text-volt"
                      >
                        {CONTACT.phone}
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    label: "Email us",
                    value: (
                      <a
                        href={CONTACT.emailHref}
                        className="transition-colors hover:text-volt"
                      >
                        {CONTACT.email}
                      </a>
                    ),
                  },
                  {
                    icon: CalendarClock,
                    label: "Class hours",
                    value: (
                      <>
                        {CONTACT.hours[0].days}: {CONTACT.hours[0].time}
                        <br />
                        {CONTACT.hours[1].days}: {CONTACT.hours[1].time}
                      </>
                    ),
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-4"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-volt/12 text-volt">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-mist">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-relaxed text-foreground/90">
                        {item.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* What happens next */}
            <Reveal delay={0.26}>
              <div className="mt-8 rounded-3xl border border-volt/25 bg-volt/[0.06] p-6">
                <p className="font-display text-lg uppercase tracking-wide text-volt">
                  What happens next?
                </p>
                <ol className="mt-4 space-y-3">
                  {[
                    "We review your enquiry within 24 hours",
                    "A coach calls you to understand your goals",
                    "You book a free trial session for your child",
                  ].map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-volt font-display text-xs text-ink">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-6 sm:p-10">
              <div
                className="bg-grid-faint absolute inset-0 opacity-30"
                aria-hidden="true"
              />

              <div className="relative">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="flex min-h-[32rem] flex-col items-center justify-center py-10 text-center"
                    >
                      <span className="grid size-20 place-items-center rounded-full bg-volt/15">
                        <CheckCircle2 className="size-10 text-volt" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 font-display text-3xl uppercase tracking-wide sm:text-4xl">
                        Thank you, {values.fullName.trim().split(" ")[0]}!
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-mist">
                        Your enquiry has been received. A Alphatrix coach will
                        reach out within 24 hours to help your child get moving.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-sm uppercase tracking-[0.12em] text-foreground transition-colors hover:border-volt hover:text-volt"
                      >
                        Send another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <h3 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
                        Enquiry form
                      </h3>
                      <p className="mt-2 text-sm text-mist">
                        All fields marked * are required.
                      </p>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {/* Full name */}
                        <div>
                          <Label htmlFor="fullName" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            autoComplete="name"
                            placeholder="e.g. Priya Sharma"
                            value={values.fullName}
                            onChange={(e) => set("fullName")(e.target.value)}
                            aria-invalid={!!errors.fullName}
                            className={cn(fieldClasses, errors.fullName && "border-destructive/70 focus-visible:border-destructive")}
                          />
                          <FieldError message={errors.fullName} />
                        </div>

                        {/* Phone */}
                        <div>
                          <Label htmlFor="phone" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="e.g. +91 98XXXXXX00"
                            value={values.phone}
                            onChange={(e) => set("phone")(e.target.value)}
                            aria-invalid={!!errors.phone}
                            className={cn(fieldClasses, errors.phone && "border-destructive/70 focus-visible:border-destructive")}
                          />
                          <FieldError message={errors.phone} />
                        </div>

                        {/* Email */}
                        <div>
                          <Label htmlFor="email" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={values.email}
                            onChange={(e) => set("email")(e.target.value)}
                            aria-invalid={!!errors.email}
                            className={cn(fieldClasses, errors.email && "border-destructive/70 focus-visible:border-destructive")}
                          />
                          <FieldError message={errors.email} />
                        </div>

                        {/* Age of child */}
                        <div>
                          <Label htmlFor="ageOfChild" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Age of Child
                          </Label>
                          <div className="relative">
                            <select
                              id="ageOfChild"
                              name="ageOfChild"
                              value={values.ageOfChild}
                              onChange={(e) => set("ageOfChild")(e.target.value)}
                              className={cn(selectClasses, "w-full", !values.ageOfChild && "text-muted-foreground/70")}
                            >
                              <option value="">Select age group</option>
                              {AGE_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-mist"
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        {/* City */}
                        <div>
                          <Label htmlFor="city" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            City
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="e.g. Mumbai"
                            value={values.city}
                            onChange={(e) => set("city")(e.target.value)}
                            className={fieldClasses}
                          />
                        </div>

                        {/* School / locality */}
                        <div>
                          <Label htmlFor="school" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            School / Locality
                          </Label>
                          <Input
                            id="school"
                            name="school"
                            placeholder="e.g. DY Patil International"
                            value={values.school}
                            onChange={(e) => set("school")(e.target.value)}
                            className={fieldClasses}
                          />
                        </div>

                        {/* Interested in */}
                        <div className="sm:col-span-2">
                          <Label htmlFor="interestedIn" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Interested In *
                          </Label>
                          <div className="relative">
                            <select
                              id="interestedIn"
                              name="interestedIn"
                              value={values.interestedIn}
                              onChange={(e) => set("interestedIn")(e.target.value)}
                              aria-invalid={!!errors.interestedIn}
                              className={cn(
                                selectClasses,
                                "w-full",
                                !values.interestedIn && "text-muted-foreground/70",
                                errors.interestedIn && "border-destructive/70 focus-visible:border-destructive",
                              )}
                            >
                              <option value="">Select an option</option>
                              {INTEREST_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-mist"
                              aria-hidden="true"
                            />
                          </div>
                          <FieldError message={errors.interestedIn} />
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <Label htmlFor="message" className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground/85">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us a little about your child, goals, or any questions you have…"
                            value={values.message}
                            onChange={(e) => set("message")(e.target.value)}
                            className="min-h-28 rounded-xl border-white/12 bg-card px-4 py-3 text-[15px] shadow-none placeholder:text-muted-foreground/70 focus-visible:border-volt/60 focus-visible:ring-volt/20"
                          />
                        </div>

                        {/* Consent */}
                        <div className="sm:col-span-2">
                          <div
                            className={cn(
                              "flex items-start gap-3 rounded-xl border p-4 transition-colors",
                              errors.consent
                                ? "border-destructive/50 bg-destructive/[0.04]"
                                : "border-white/10 bg-background/50",
                            )}
                          >
                            <Checkbox
                              id="consent"
                              name="consent"
                              checked={values.consent}
                              onCheckedChange={(checked) => set("consent")(checked === true)}
                              aria-invalid={!!errors.consent}
                              className="mt-0.5 size-5 rounded-md data-[state=checked]:bg-volt data-[state=checked]:border-volt data-[state=checked]:text-ink"
                            />
                            <Label
                              htmlFor="consent"
                              className="text-sm leading-relaxed font-normal text-mist"
                            >
                              I agree to be contacted by Alphatrix regarding my
                              enquiry. I understand my details will only be used
                              for this purpose. *
                            </Label>
                          </div>
                          <FieldError message={errors.consent} />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs leading-relaxed text-mist">
                          Your details are safe with us — no spam, ever.
                        </p>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-volt px-8 py-4 font-display text-sm uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_36px_-8px_rgba(200,245,66,0.55)] active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Enquiry
                              <Send
                                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </button>
                      </div>

                      {status === "error" && submitError && (
                        <p
                          role="alert"
                          className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
                        >
                          {submitError}
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionPad>
    </section>
  );
}