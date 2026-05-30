"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // We create the audio element once and persist it.
    // We'll use a placeholder URL for the frequency if the actual file doesn't exist.
    // 432Hz sine wave is a common healing frequency.

    // For now we'll use a placeholder or silent audio if no file is present.
    // In a real scenario you'd place ambient-healing-freq.mp3 in public/assets
    try {
      audioRef.current = new Audio("https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    } catch(e) {
      console.error(e);
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[100] w-10 h-10 rounded-full border border-ash/20 bg-obsidian/80 backdrop-blur-md flex items-center justify-center group hover:border-blood/50 transition-colors"
        title="Toggle Ambient Frequencies"
      >
        <div className="flex items-end justify-center gap-[2px] h-4">
          <motion.div className="w-[2px] bg-ash/50 group-hover:bg-blood transition-colors" animate={{ height: isPlaying ? ["2px", "16px", "2px"] : "2px" }} transition={{ duration: 1, repeat: Infinity }} />
          <motion.div className="w-[2px] bg-ash/50 group-hover:bg-blood transition-colors" animate={{ height: isPlaying ? ["4px", "12px", "4px"] : "8px" }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} />
          <motion.div className="w-[2px] bg-ash/50 group-hover:bg-blood transition-colors" animate={{ height: isPlaying ? ["2px", "16px", "2px"] : "4px" }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
          <motion.div className="w-[2px] bg-ash/50 group-hover:bg-blood transition-colors" animate={{ height: isPlaying ? ["6px", "8px", "6px"] : "2px" }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }} />
        </div>
      </button>
      {children}
    </>
  );
}
