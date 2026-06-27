interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  textarea?: boolean;
}

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  textarea,
}: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">
        {label}
        {required && " *"}
      </label>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          rows={6}
          className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm outline-none focus:border-primary/60 transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm outline-none focus:border-primary/60 transition-colors"
        />
      )}
    </div>
  );
}

interface CheckboxProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
  description?: string;
}

export function FormCheckbox({ label, name, defaultChecked, description }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="mt-0.5 w-4 h-4 rounded border-border accent-primary"
      />
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </label>
  );
}
