import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, error, required, children, className }: FieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={htmlFor} className="block text-sm text-gold-light/80">
        {label}
        {required && <span className="ml-0.5 text-red-vivid">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-vivid">{error}</p>}
    </div>
  );
}

const inputBase =
  "w-full rounded-md border bg-ink px-4 py-2.5 text-cream placeholder:text-gold-light/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/40";

export function TextInput({
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      className={cn(inputBase, error ? "border-red-vivid/70" : "border-line", className)}
      {...props}
    />
  );
}

export function TextArea({
  error,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return (
    <textarea
      className={cn(inputBase, "min-h-28 resize-y", error ? "border-red-vivid/70" : "border-line", className)}
      {...props}
    />
  );
}

interface ChoiceGroupProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}

/** Segmented choice chips for enum fields. */
export function ChoiceGroup({ options, value, onChange }: ChoiceGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-md border px-3.5 py-2 text-sm transition-colors",
              active
                ? "border-gold bg-gold/10 text-gold"
                : "border-line bg-ink text-gold-light/70 hover:border-gold/40",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
