"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show only once per session
    if (!sessionStorage.getItem("intro_played")) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("intro_played", "1");
  };

  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/overay.mp4"
        autoPlay
        playsInline
        muted
        onEnded={close}
        className="w-full h-full object-contain"
      />
      <button
        onClick={close}
        className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-white text-sm font-medium backdrop-blur-sm transition-all"
      >
        <X className="w-4 h-4" />
        Skip
      </button>
    </div>
  );
}
