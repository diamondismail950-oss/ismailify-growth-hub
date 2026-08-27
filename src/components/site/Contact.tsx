import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { BRAND, BUDGET_OPTIONS, SERVICE_OPTIONS, SOCIALS } from "@/lib/site-content";
import { Reveal, SectionHeading, buttonStyles } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1, "Select a service"),
  budget: z.string().trim().min(1, "Select a budget range"),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-ring";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Contact"
          title={
            <>
              Let's Build Something That <span className="text-gold-gradient">Grows.</span>
            </>
          }
          subtitle="Have a project, business, or idea you'd like to grow? Let's talk."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-2xl border border-border bg-surface p-7 sm:p-10">
            {sent ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-gold" />
                <h3 className="mt-6 text-2xl font-semibold">Message received. Thank you.</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out to ISMAILIFY. Your enquiry has been noted and Ismail will
                  respond personally, usually within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className={cn(buttonStyles.outline, "mt-8")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors["name"]}>
                  <input name="name" className={fieldClass} placeholder="Your name" maxLength={100} />
                </Field>
                <Field label="Email" name="email" error={errors["email"]}>
                  <input
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@company.com"
                    maxLength={255}
                  />
                </Field>
                <Field label="Phone Number" name="phone" error={errors["phone"]}>
                  <input
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="08100000000"
                    maxLength={30}
                  />
                </Field>
                <Field label="Company / Business" name="company" error={errors["company"]}>
                  <input
                    name="company"
                    className={fieldClass}
                    placeholder="Optional"
                    maxLength={120}
                  />
                </Field>
                <Field label="Service Needed" name="service" error={errors["service"]}>
                  <select name="service" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range" name="budget" error={errors["budget"]}>
                  <select name="budget" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a budget
                    </option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" name="message" error={errors["message"]} full>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className={cn(fieldClass, "resize-none")}
                    placeholder="Tell me about your business and what you'd like to grow."
                  />
                </Field>
                <div className="sm:col-span-2">
                  <button type="submit" className={cn(buttonStyles.gold, "w-full sm:w-auto")}>
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Email
                </span>
                <span className="block truncate text-sm text-foreground group-hover:text-gold">
                  {BRAND.email}
                </span>
              </span>
            </a>

            <a
              href={`tel:${BRAND.phone}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Phone
                </span>
                <span className="block text-sm text-foreground group-hover:text-gold">
                  {BRAND.phone}
                </span>
              </span>
            </a>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Let's Connect
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:border-gold hover:text-gold"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
  full,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
  full?: boolean | undefined;
}) {
  return (
    <label className={cn("block text-sm", full && "sm:col-span-2")} htmlFor={name}>
      <span className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
