"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JournalModal } from "@/components/JournalModal";

export default function ChamberThree() {
  const [phase, setPhase] = useState(0);
  const [breathe, setBreathe] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  useEffect(() => {
    if (phase === 1) {
      const interval = setInterval(() => {
        setBreathe(b => !b);
      }, 4000); // 4 seconds in, 4 seconds out
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-hidden selection:bg-blood/20 flex flex-col relative">
      
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-bone transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash group-hover:text-bone">Exit Void</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/20">
          Chamber III: Silence
        </div>
      </header>

      <main className="relative min-h-screen w-full flex items-center justify-center cursor-crosshair" onClick={(e) => {
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a') || isJournalOpen) return;
        if (phase < 2) setPhase(phase + 1);
      }}>
        
        <AnimatePresence mode="wait">
          {/* Phase 0: The Setup */}
          {phase === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 3 }}
              className="max-w-xl text-center px-6"
            >
              <h1 className="font-serif text-2xl text-ash/60 tracking-widest mb-12 uppercase">
                The Space Between
              </h1>
              <div className="space-y-6 font-sans font-light text-ash/70 text-lg leading-relaxed mb-12">
                <p>
                  You are not the thoughts. <br/>
                  You are the silence in which they echo.
                </p>
                <p className="text-sm">
                  <span className="text-bone uppercase tracking-widest font-medium block mb-1">Common Misconception</span>
                  Meditation is not about forcing the mind to be quiet. It is about discovering the quiet that is already there, underneath the noise.
                </p>
              </div>
              <p className="font-sans text-xs text-ash/30 uppercase tracking-[0.2em] mt-12 animate-pulse">
                Click to dissolve
              </p>
            </motion.div>
          )}

          {/* Phase 1: The Void Experience */}
          {phase === 1 && (
            <motion.div
              key="void"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Deep background gradient for the void */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0b0c10_0%,_#000000_100%)]"></div>
              
              {/* Central Geometric Breathing element */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div 
                  className="absolute border-[0.5px] border-ash/5 rounded-full"
                  animate={{
                    width: breathe ? '80vmin' : '40vmin',
                    height: breathe ? '80vmin' : '40vmin',
                    opacity: breathe ? 0.1 : 0.02
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute border-[0.5px] border-ash/10 rounded-full"
                  animate={{
                    width: breathe ? '60vmin' : '20vmin',
                    height: breathe ? '60vmin' : '20vmin',
                    opacity: breathe ? 0.3 : 0.05
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bg-ash/20 rounded-full blur-[2px]"
                  animate={{
                    width: breathe ? '2vmin' : '1vmin',
                    height: breathe ? '2vmin' : '1vmin',
                    opacity: breathe ? 0.8 : 0.2
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />

                <div className="absolute text-center space-y-32 pointer-events-none">
                  <motion.p 
                    className="font-serif text-sm tracking-[0.5em] text-ash/30 uppercase"
                    animate={{ opacity: breathe ? 0 : 0.3 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  >
                    Inhale
                  </motion.p>
                  <motion.p 
                    className="font-serif text-sm tracking-[0.5em] text-ash/30 uppercase"
                    animate={{ opacity: breathe ? 0.3 : 0 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  >
                    Exhale
                  </motion.p>
                </div>
              </div>
              
              <div className="absolute bottom-12 text-center w-full z-10 pointer-events-none">
                 <p className="font-sans text-[9px] text-ash/20 uppercase tracking-[0.4em]">
                   Click when the silence feels natural.
                 </p>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Integration */}
          {phase === 2 && (
            <motion.div
              key="integration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="max-w-2xl text-center px-6 relative z-10 space-y-12"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-bone/80 mb-8">
                Nothingness is not empty. <br/>
                <span className="italic text-ash/60">It is full of potential.</span>
              </h2>
              <div className="space-y-6 text-ash/60 font-light font-sans text-lg md:text-xl leading-relaxed mb-16 text-left border-l border-ash/10 pl-6">
                <p>
                  <span className="text-bone uppercase tracking-widest text-xs font-medium block mb-1">Psychological Perspective</span>
                  The ego fears the void because in the void, it does not exist. It prefers a miserable narrative over no narrative at all.
                </p>
                <p>
                  When you stop identifying with the endless stream of thoughts, you fall into this underlying architecture. 
                  This is not a loss of self; it is the discovery of the true Observer.
                </p>
              </div>

              <div className="pt-8 border-t border-ash/10 text-center space-y-8">
                <h3 className="font-serif text-xl text-ash uppercase tracking-widest">Reflection</h3>
                <p className="font-serif italic text-bone/90 max-w-lg mx-auto">
                  "What emotion were you avoiding by letting your mind race today? What happens if you just sit with it in the silence?"
                </p>

                <button
                  onClick={() => setIsJournalOpen(true)}
                  className="inline-flex items-center gap-3 border border-ash/20 px-8 py-4 font-serif uppercase tracking-widest text-sm text-ash hover:text-bone hover:border-bone transition-all"
                >
                  Open Journal
                </button>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/hub"
                  className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-ash/50 transition-all"
                >
                  Return to Hub
                </Link>
                <Link
                  href="/hub/chamber-4"
                  className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-ash/50 transition-all"
                >
                  Proceed to Chamber IV
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <JournalModal
        chamber="Chamber III: Architecture of Perception"
        prompt="What emotion were you avoiding by letting your mind race today? What happens if you just sit with it in the silence?"
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />
    </div>
  );
}
