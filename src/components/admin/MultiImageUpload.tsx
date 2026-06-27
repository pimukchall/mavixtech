"use client";

import { useState, useRef } from "react";
import { Plus, X, Loader2, ImageIcon } from "lucide-react";

interface MultiImageUploadProps {
  name: string;
  defaultValue?: string[];
  folder?: string;
  label?: string;
  max?: number;
}

export function MultiImageUpload({
  name,
  defaultValue = [],
  folder = "mavixtech",
  label = "Images",
  max = 10,
}: MultiImageUploadProps) {
  const [urls, setUrls] = useState<string[]>(defaultValue);
  const [loadingCount, setLoadingCount] = useState(0);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File): Promise<string | null> {
    const form = new FormData();
    form.append("file", file);
    form.append("folder", folder);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) return null;
      return data.url ?? null;
    } catch {
      return null;
    }
  }

  async function handleFiles(files: FileList) {
    const remaining = max - urls.length;
    const toUpload = Array.from(files).slice(0, remaining);

    if (files.length > remaining) {
      setError(`Only ${remaining} more image${remaining !== 1 ? "s" : ""} allowed (max ${max})`);
    } else {
      setError("");
    }

    setLoadingCount(toUpload.length);
    const results = await Promise.all(toUpload.map(uploadFile));
    const newUrls = results.filter(Boolean) as string[];
    const failCount = toUpload.length - newUrls.length;
    if (failCount > 0) setError(`${failCount} image${failCount !== 1 ? "s" : ""} failed to upload. Please try again.`);
    setUrls((prev) => [...prev, ...newUrls]);
    setLoadingCount(0);
  }

  function remove(index: number) {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  }

  const isLoading = loadingCount > 0;
  const canAdd = urls.length < max && !isLoading;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        {urls.length > 0 && (
          <span className="text-xs text-muted-foreground">
            {urls.length}/{max} images · First image is the cover
          </span>
        )}
      </div>

      {/* Hidden input — stores JSON array */}
      <input type="hidden" name={name} value={JSON.stringify(urls)} />

      {/* Image grid */}
      {urls.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {urls.map((url, i) => (
            <div
              key={url + i}
              className="relative group aspect-video rounded-lg overflow-hidden border border-border"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt={`upload-${i}`}
                className="w-full h-full object-cover"
              />
              {/* Cover badge */}
              {i === 0 && (
                <span className="absolute bottom-1 left-1 text-xs bg-primary/90 text-white px-1.5 py-0.5 rounded">
                  Cover
                </span>
              )}
              {/* Remove button */}
              <button
                type="button"
                onClick={() => remove(i)}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {/* Loading placeholders */}
          {isLoading &&
            Array.from({ length: loadingCount }).map((_, i) => (
              <div
                key={`loading-${i}`}
                className="aspect-video rounded-lg border border-dashed border-primary/40 bg-primary/5 flex items-center justify-center"
              >
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              </div>
            ))}

          {/* Add more tile */}
          {canAdd && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="aspect-video rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-secondary/40 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs">Add image</span>
            </button>
          )}
        </div>
      )}

      {/* Empty drop zone */}
      {urls.length === 0 && (
        <div
          onClick={() => !isLoading && inputRef.current?.click()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
          }}
          onDragOver={(e) => e.preventDefault()}
          className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 h-52 transition-colors ${
            isLoading
              ? "border-primary/40 bg-primary/5 cursor-default"
              : "border-border hover:border-primary/50 hover:bg-secondary/40 cursor-pointer"
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground">
                Uploading {loadingCount} image{loadingCount !== 1 ? "s" : ""}...
              </p>
            </>
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Click or drag images here (multiple allowed)
              </p>
              <p className="text-xs text-muted-foreground/60">
                JPG, PNG, WEBP · Max 5MB each · Up to {max} images
              </p>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
