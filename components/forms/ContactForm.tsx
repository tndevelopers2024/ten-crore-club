"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Field, TextInput, TextArea, ChoiceGroup } from "@/components/ui/FormControls";

const goalOptions = [
  { value: "1cr", label: "₹1 Cr" },
  { value: "3cr", label: "₹3 Cr" },
  { value: "5cr", label: "₹5 Cr" },
  { value: "10cr", label: "₹10 Cr" },
  { value: "starting", label: "Just starting" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  goal: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  goal: "10cr",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile";
    if (form.city.trim().length < 2) e.city = "Please enter your city";
    if (form.message.trim().length < 10) e.message = "Tell us a little more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-ink-card p-8 text-center">
        <CheckCircle className="mx-auto size-12 text-gold" />
        <h3 className="mt-4 font-display text-2xl text-cream">Message received.</h3>
        <p className="mt-2 text-gold-light/70">
          A human will read it and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-line bg-ink-card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name} htmlFor="c-name">
          <TextInput
            id="c-name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            error={!!errors.name}
          />
        </Field>
        <Field label="Email" required error={errors.email} htmlFor="c-email">
          <TextInput
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            error={!!errors.email}
          />
        </Field>
        <Field label="Phone" required error={errors.phone} htmlFor="c-phone">
          <TextInput
            id="c-phone"
            inputMode="numeric"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value.replace(/\D/g, "").slice(0, 10))}
            error={!!errors.phone}
          />
        </Field>
        <Field label="City" required error={errors.city} htmlFor="c-city">
          <TextInput
            id="c-city"
            value={form.city}
            onChange={(e) => set("city")(e.target.value)}
            error={!!errors.city}
          />
        </Field>
      </div>

      <Field label="Goal">
        <ChoiceGroup options={goalOptions} value={form.goal} onChange={set("goal")} />
      </Field>

      <Field label="Message" required error={errors.message} htmlFor="c-message">
        <TextArea
          id="c-message"
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          error={!!errors.message}
          placeholder="How can we help?"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-md border border-red-vivid/70 bg-red-deep px-6 py-3.5 font-medium text-on-accent transition-colors hover:bg-red-mid disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
