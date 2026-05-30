"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";
import { JournalModal } from "@/components/JournalModal";

export default function ChamberFive() {
  const [phase, setPhase] = useState(0);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-x-hidden selection:bg-blood flex flex-col relative">
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash">Return to Archive</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40">
          Chamber V: Field of Awareness
        </div>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24" onClick={(e) => {
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a') || isJournalOpen) return;
        if (phase < 3) setPhase(phase + 1);
      }}>

        <div className="max-w-3xl w-full mx-auto relative z-10 cursor-pointer">
          <AnimatePresence mode="wait">

            {phase === 0 && (
              <motion.div
                key="phase-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 1.5 }}
                className="space-y-12 text-center"
              >
                <Target className="w-12 h-12 text-blood mx-auto opacity-60" />
                <h1 className="font-serif text-3xl md:text-5xl leading-tight">
                  What Remains?
                </h1>

                <div className="space-y-6 text-ash/80 font-light font-sans text-lg md:text-xl leading-relaxed">
                  <p>When thought becomes silent, what is left?</p>
                  <p>Most believe that without thought, there is nothing. A void. Sleep.</p>
                  <p>But when you truly stop the machinery of the mind, you discover a vibrant, pulsing presence.</p>
                </div>
                <p className="font-sans text-xs text-ash/30 uppercase tracking-[0.2em] mt-12 animate-pulse">
                  Click to proceed
                </p>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div
                key="phase-1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 1.5 }}
                className="space-y-12"
              >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-blood/50 to-transparent mx-auto"></div>

                <h2 className="font-serif text-2xl md:text-4xl leading-tight text-center text-crimson">
                  The Underlying Field
                </h2>

                <div className="space-y-8 text-ash/80 font-light font-sans text-lg md:text-xl leading-relaxed text-left border-l border-ash/10 pl-6">
                  <p><span className="text-bone font-medium text-sm tracking-widest uppercase">Psychological Perspective:</span> Grounding techniques in therapy aim to bring you into this state. By focusing on sensory input rather than mental loops, anxiety naturally dissipates.</p>
                  <p><span className="text-bone font-medium text-sm tracking-widest uppercase">Scientific Perspective:</span> This state correlates with increased alpha and theta brainwave activity—states associated with deep relaxation, creativity, and flow.</p>
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="phase-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 1.5 }}
                className="text-center space-y-12"
              >
                <h2 className="font-serif text-2xl text-ash opacity-60 uppercase tracking-[0.2em]">
                  Awareness Exercise
                </h2>

                <div className="max-w-md mx-auto text-left border-l border-crimson/50 pl-6 py-2 space-y-4">
                  <p className="font-sans font-light text-ash/80">
                    <span className="text-bone font-medium">Task:</span> Widen your visual field. Right now, you are focused sharply on these words.
                  </p>
                  <p className="font-sans font-light text-ash/80">
                    Without moving your eyes, become aware of your peripheral vision. The edges of your screen. The room around you.
                  </p>
                  <p className="font-sans text-sm text-ash/50 pt-4 italic">
                    Notice how thought slows down when vision expands. Narrow focus triggers survival mechanics. Wide focus triggers presence.
                  </p>
                </div>
              </motion.div>
            )}

            {phase === 3 && (
              <motion.div
                key="phase-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center space-y-12"
              >
                <h2 className="font-serif text-2xl text-ash opacity-60 uppercase tracking-[0.2em]">
                  Reflection
                </h2>

                <div className="space-y-8">
                  <p className="font-serif text-xl italic text-bone/90 max-w-lg mx-auto">
                    "When was the last time you were fully absorbed in the present moment without a single thought about yourself?"
                  </p>

                  <button
                    onClick={() => setIsJournalOpen(true)}
                    className="inline-flex items-center gap-3 border border-blood/30 bg-blood/5 px-8 py-4 font-serif uppercase tracking-widest text-sm text-bone hover:border-blood hover:bg-blood/20 transition-all"
                  >
                    Open Journal
                  </button>
                </div>

                <div className="pt-16 border-t border-ash/10 mt-16 flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/hub"
                    className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-ash/50 transition-all"
                  >
                    Return to Hub
                  </Link>
                  <Link
                    href="/hub/chamber-6"
                    className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-blood/50 transition-all"
                  >
                    Proceed to Chamber VI
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      <JournalModal
        chamber="Chamber V: Field of Awareness"
        prompt="When was the last time you were fully absorbed in the present moment without a single thought about yourself?"
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />
    </div>
  );
}
