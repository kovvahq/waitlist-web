import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { joinWaitlist } from "@/lib/waitlist.functions";
import { waitlistSchema, type WaitlistInput } from "@/lib/waitlist.schema";

const emptyForm = { name: "", email: "", phone: "", occupation: "", gender: "" } as WaitlistInput;

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your full name",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@email.com",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "+234 800 000 0000",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "occupation",
    label: "Occupation",
    placeholder: "Stylist, creator, shopper… (optional)",
    type: "text",
    autoComplete: "organization-title",
  },
] as const;

export function WaitlistForm() {
  const submit = useServerFn(joinWaitlist);
  const [form, setForm] = useState<WaitlistInput>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistInput, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = waitlistSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof WaitlistInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof WaitlistInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const result = await submit({ data: parsed.data });
      if (result.ok) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setMessage(
          result.reason === "not_configured"
            ? "We're finishing setup on our sign-up list. Please try again shortly."
            : "Something went wrong saving your spot. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong saving your spot. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-accent/40 bg-surface p-6"
        role="status"
        aria-live="polite"
      >
        <p className="text-title font-bold text-accent">You're on the list.</p>
        <p className="mt-2 text-body text-foreground">
          We'll email you the moment early access opens. Bring your best looks.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-caption font-medium text-muted-foreground underline underline-offset-4 hover:text-strong"
        >
          Add another person
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-lg space-y-3">
      {fields.map((field) => {
        const error = errors[field.name];
        return (
          <div key={field.name} className="min-w-0">
            <label htmlFor={field.name} className="sr-only">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={form[field.name] ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
              aria-invalid={error ? true : undefined}
              className="h-[54px] w-full rounded-lg bg-input px-5 text-body text-input-foreground placeholder:text-input-foreground/70 outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-accent"
            />
            {error ? <p className="mt-1.5 px-1 text-caption text-destructive">{error}</p> : null}
          </div>
        );
      })}

      <div className="min-w-0">
        <label htmlFor="gender" className="sr-only">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={form.gender}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, gender: e.target.value as "male" | "female" }))
          }
          aria-invalid={errors.gender ? true : undefined}
          className="h-[54px] w-full rounded-lg bg-input px-5 text-body text-input-foreground outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-accent [&>option]:bg-input [&>option]:text-input-foreground"
        >
          <option value="" disabled>
            Gender (required)
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender ? (
          <p className="mt-1.5 px-1 text-caption text-destructive">{errors.gender}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 text-body font-bold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Saving your spot…" : "Get early access"}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      {status === "error" ? (
        <p className="text-caption text-destructive" role="alert">
          {message}
        </p>
      ) : (
        <p className="text-caption text-muted-foreground">
          No spam. Just your invite when Kovva opens.
        </p>
      )}
    </form>
  );
}
