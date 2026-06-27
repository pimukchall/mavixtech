"use client";

import { useState } from "react";
import { submitContact } from "@/app/(public)/contact/actions";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    setLoading(false);
    if (result?.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result?.error || "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-400/10 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold">ส่งข้อความสำเร็จ!</h3>
        <p className="text-muted-foreground text-sm">ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง</p>
        <Button variant="outline" size="sm" onClick={() => setSuccess(false)}>
          ส่งข้อความใหม่
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">ชื่อ - นามสกุล *</label>
          <input name="name" type="text" required placeholder="สมชาย ใจดี" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">อีเมล *</label>
          <input name="email" type="email" required placeholder="example@company.com" className={inputClass} />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">เบอร์โทรศัพท์</label>
        <input name="phone" type="tel" placeholder="08x-xxx-xxxx" className={inputClass} />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">ข้อความ *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="บอกเราเรื่องโปรเจ็คหรือความต้องการของคุณ..."
          className={`${inputClass} resize-none`}
        />
      </div>
      {error && (
        <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-3 py-2">{error}</p>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 h-11"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        {loading ? "กำลังส่ง..." : "ส่งข้อความ"}
      </Button>
    </form>
  );
}
