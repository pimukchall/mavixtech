"use client";

import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(false);
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
    const video = videoRef.current;
    if (!visible || !video) return;

    // Try with sound first; browsers may block unmuted autoplay, so fall back to muted
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {});
    });
  }, [visible]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/overay.mp4"
        playsInline
        onEnded={close}
        className="w-full h-full object-contain"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-white text-sm font-medium backdrop-blur-sm transition-all"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        {muted ? "Tap for sound" : "Mute"}
      </button>
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
