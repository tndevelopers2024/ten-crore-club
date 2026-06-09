"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Field, TextInput, TextArea, ChoiceGroup } from "@/components/ui/FormControls";

const incomeOptions = [
  { value: "below-50k", label: "Below ₹50K" },
  { value: "50k-1l", label: "₹50K–1L" },
  { value: "1l-3l", label: "₹1L–3L" },
  { value: "3l-above", label: "₹3L+" },
];

const goalOptions = [
  { value: "1cr", label: "₹1 Crore" },
  { value: "3cr", label: "₹3 Crore" },
  { value: "5cr", label: "₹5 Crore" },
  { value: "10cr", label: "₹10 Crore" },
  { value: "starting", label: "Just Starting" },
];

const savingsOptions = [
  { value: "none", label: "Nothing Yet" },
  { value: "below-5l", label: "Below ₹5L" },
  { value: "5-20l", label: "₹5–20L" },
  { value: "above-20l", label: "Above ₹20L" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  currentAge: string;
  monthlyIncome: string;
  goal: string;
  currentSavings: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  currentAge: "",
  monthlyIncome: "1l-3l",
  goal: "10cr",
  currentSavings: "below-5l",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      e.phone = "Enter a valid 10-digit Indian mobile number";
    if (form.city.trim().length < 2) e.city = "Please enter your city";
    const age = Number(form.currentAge);
    if (!age || age < 18 || age > 65) e.currentAge = "Enter an age between 18 and 65";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // No backend wired yet — simulate the request. Swap for your form endpoint.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-ink-card p-8 text-center sm:p-10">
        <CheckCircle className="mx-auto size-12 text-gold" />
        <h3 className="mt-4 font-display text-2xl text-cream">
          Your session request is in, {form.name.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-gold-light/70">
          We&apos;ll reach out within 24 hours to confirm a time.
        </p>
        <div className="mx-auto mt-6 max-w-md rounded-lg border border-line bg-ink p-5 text-left">
          <p className="text-sm font-medium text-gold">To prepare, have ready:</p>
          <ul className="mt-3 space-y-2 text-sm text-gold-light/75">
            <li>• Your approximate monthly income and expenses</li>
            <li>• Any existing investments or SIPs (if applicable)</li>
            <li>• The age by which you&apos;d like to hit your goal</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-line bg-ink-card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name} htmlFor="name">
          <TextInput
            id="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            error={!!errors.name}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email Address" required error={errors.email} htmlFor="email">
          <TextInput
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            error={!!errors.email}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Mobile Number" required error={errors.phone} htmlFor="phone">
          <TextInput
            id="phone"
            inputMode="numeric"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value.replace(/\D/g, "").slice(0, 10))}
            error={!!errors.phone}
            placeholder="10-digit mobile"
          />
        </Field>
        <Field label="City" required error={errors.city} htmlFor="city">
          <TextInput
            id="city"
            value={form.city}
            onChange={(e) => set("city")(e.target.value)}
            error={!!errors.city}
            placeholder="e.g. Pune"
          />
        </Field>
      </div>

      <Field label="Current Age" required error={errors.currentAge} htmlFor="age" className="max-w-40">
        <TextInput
          id="age"
          inputMode="numeric"
          value={form.currentAge}
          onChange={(e) => set("currentAge")(e.target.value.replace(/\D/g, "").slice(0, 2))}
          error={!!errors.currentAge}
          placeholder="35"
        />
      </Field>

      <Field label="Monthly Income">
        <ChoiceGroup options={incomeOptions} value={form.monthlyIncome} onChange={set("monthlyIncome")} />
      </Field>

      <Field label="Financial Goal">
        <ChoiceGroup options={goalOptions} value={form.goal} onChange={set("goal")} />
      </Field>

      <Field label="Current Savings">
        <ChoiceGroup options={savingsOptions} value={form.currentSavings} onChange={set("currentSavings")} />
      </Field>

      <Field label="Anything specific you want to discuss?" htmlFor="message">
        <TextArea
          id="message"
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="Optional — tell us what's on your mind."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-md border border-red-vivid/70 bg-red-deep px-6 py-4 text-base font-medium text-on-accent transition-colors hover:bg-red-mid disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting" ? "Booking…" : "Book My Free Strategy Session →"}
      </button>
    </form>
  );
}
