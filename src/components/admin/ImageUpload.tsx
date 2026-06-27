"use client";

import { useState, useRef } from "react";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";

interface ImageUploadProps {
  name: string;
  defaultValue?: string;
  folder?: string;
  label?: string;
}

export function ImageUpload({
  name,
  defaultValue = "",
  folder = "mavixtech",
  label = "รูปภาพ",
}: ImageUploadProps) {
  const [url, setUrl] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setLoading(true);
    setError("");

    const form = new FormData();
    form.append("file", file);
    form.append("folder", folder);

    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    setLoading(false);

    if (data.url) {
      setUrl(data.url);
    } else {
      setError(data.error || "อัปโหลดไม่สำเร็จ");
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="relative rounded-lg overflow-hidden border border-border group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt="preview"
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm backdrop-blur transition-colors"
            >
              <Upload className="w-4 h-4" />
              เปลี่ยนรูป
            </button>
            <button
              type="button"
              onClick={() => setUrl("")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/70 hover:bg-red-500/90 rounded-lg text-white text-sm backdrop-blur transition-colors"
            >
              <X className="w-4 h-4" />
              ลบ
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => !loading && inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 h-52 cursor-pointer transition-colors ${
            loading
              ? "border-primary/40 bg-primary/5 cursor-default"
              : "border-border hover:border-primary/50 hover:bg-secondary/40"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground">กำลังอัปโหลด...</p>
            </>
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                คลิกหรือลากไฟล์มาวางที่นี่
              </p>
              <p className="text-xs text-muted-foreground/60">
                JPG, PNG, WEBP · สูงสุด 5MB
              </p>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
