"use client";

import { useState } from "react";
import { submitContact } from "@/app/(public)/contact/actions";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle } from "lucide-react";

const inputBase =
  "w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 bg-input";

function field(err?: string) {
  return err
    ? `${inputBase} border-red-400 focus:border-red-500`
    : `${inputBase} border-border focus:border-primary/60`;
}

type Errors = { name?: string; email?: string; message?: string; phone?: string };

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = (data.get("name") as string).trim();
  const email = (data.get("email") as string).trim();
  const phone = (data.get("phone") as string).trim();
  const message = (data.get("message") as string).trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";

  if (phone && !/^[\d\s\-+()]{7,15}$/.test(phone)) errors.phone = "Please enter a valid phone number.";

  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setServerError("");
    const result = await submitContact(formData);
    setLoading(false);
    if (result?.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setServerError(result?.error || "Something went wrong. Please try again.");
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold">Message Sent!</h3>
        <p className="text-muted-foreground text-sm">Our team will get back to you within 24 hours.</p>
        <Button variant="outline" size="sm" onClick={() => setSuccess(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Full Name *</label>
          <input
            name="name"
            type="text"
            placeholder="John Smith"
            className={field(errors.name)}
            onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="john@company.com"
            className={field(errors.email)}
            onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Phone Number</label>
        <input
          name="phone"
          type="tel"
          placeholder="08x-xxx-xxxx"
          className={field(errors.phone)}
          onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: undefined }))}
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Message *</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project or requirements..."
          className={`${field(errors.message)} resize-none`}
          onChange={() => errors.message && setErrors((e) => ({ ...e, message: undefined }))}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{serverError}</p>
      )}

      <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 h-11">
        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
