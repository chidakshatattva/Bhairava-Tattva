"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { JournalModal } from "@/components/JournalModal";

export default function ChamberOne() {
  const [phase, setPhase] = useState(0);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  const advance = () => {
    if (phase < 5) setPhase(phase + 1);
  };

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-x-hidden selection:bg-blood flex flex-col relative">
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash">Return to Archive</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40">
          Chamber I: Identity
        </div>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24" onClick={(e) => {
        // Prevent advancing when interacting with buttons/modals
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a') || isJournalOpen) return;
        advance();
      }}>
        
        {/* Background Ambient Layers */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02]" 
             style={{ backgroundImage: 'url("/assets/Burnt Parchment Paper stock image_ Image of communciation - 14097511.jpg")', backgroundSize: 'cover' }}></div>
        
        <div className="max-w-3xl w-full mx-auto relative z-10 cursor-pointer">
          <AnimatePresence mode="wait">
            
            {/* Phase 0: Beginner Explanation & Hook */}
            {phase === 0 && (
              <motion.div
                key="phase-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 1.5 }}
                className="space-y-12"
              >
                <h1 className="font-serif text-3xl md:text-5xl leading-tight text-center">
                  Listen to the voice <br/> reading these words.
                </h1>
                
                <div className="space-y-6 text-ash/80 font-light font-sans text-lg md:text-xl leading-relaxed text-center">
                  <p>It sounds like &quot;you,&quot; doesn&apos;t it?</p>
                  <p>It complains about traffic. It worries about the future. It replays arguments from five years ago.</p>
                  <p>You have lived your entire life assuming that this voice <span className="italic text-bone">is</span> who you are.</p>
                </div>

                <div className="flex justify-center pt-12 animate-bounce opacity-30">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </motion.div>
            )}

            {/* Phase 1: Psychological & Scientific Perspective */}
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
                  The Default Mode Network
                </h2>
                
                <div className="space-y-8 text-ash/80 font-light font-sans text-lg md:text-xl leading-relaxed text-left border-l border-ash/10 pl-6">
                  <p><span className="text-bone font-medium text-sm tracking-widest uppercase">Psychological Reality:</span> The identity you defend is largely a construct of memory, societal conditioning, and survival instincts running on a loop.</p>
                  <p><span className="text-bone font-medium text-sm tracking-widest uppercase">Scientific Reality:</span> Neuroscience points to the Default Mode Network (DMN)—a group of brain regions that activate when you are not focused on the outside world. It generates the narrative of "self." It is a biological function, not a soul.</p>
                </div>
              </motion.div>
            )}

             {/* Phase 2: Spiritual Perspective */}
            {phase === 2 && (
              <motion.div
                key="phase-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 1.5 }}
                className="space-y-12"
              >
                <div className="p-8 border border-ash/10 bg-black/40 backdrop-blur-sm relative my-12">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blood/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blood/50"></div>
                  <p className="font-serif italic text-bone text-2xl leading-relaxed text-center">
                    &quot;If you can hear the voice...<br/>then who is the one listening?&quot;
                  </p>
                </div>
                <div className="space-y-6 text-ash/80 font-light font-sans text-lg leading-relaxed text-center">
                  <p><span className="text-bone font-medium text-sm tracking-widest uppercase">Spiritual Reality:</span> Contemplative traditions assert that you are the silent observer behind the chatter. The empty space in which the thoughts appear.</p>
                  <p className="text-ash/50 text-sm mt-8 italic">Notice the common misconception: We are not trying to destroy the ego. We are simply recognizing it as a tool, rather than an identity.</p>
                </div>
              </motion.div>
            )}

            {/* Phase 3: The Shift (Visuals) */}
            {phase === 3 && (
              <motion.div
                key="phase-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="text-center space-y-16"
              >
                {/* Symbolic Geometry */}
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                  <motion.div 
                    className="absolute inset-0 border border-ash/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -top-1 left-1/2 w-2 h-2 bg-ash/30 rounded-full" />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-4 border border-ash/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-crimson/50 rounded-full" />
                  </motion.div>
                  <div className="w-2 h-2 bg-blood rounded-full shadow-[0_0_20px_rgba(138,3,3,1)]" />
                </div>

                <div className="space-y-6">
                  <h3 className="font-serif text-3xl text-bone tracking-wide">The software is not the hardware.</h3>
                  <p className="font-sans font-light text-ash/70 text-lg">
                    This silent space is untouched by anxiety. It cannot be insulted. It cannot die.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Phase 4: Awareness Exercise */}
            {phase === 4 && (
              <motion.div
                key="phase-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center space-y-12"
              >
                <h2 className="font-serif text-2xl text-ash opacity-60 uppercase tracking-[0.2em]">
                  Awareness Exercise
                </h2>
                
                <div className="max-w-md mx-auto text-left border-l border-crimson/50 pl-6 py-2 space-y-4">
                  <p className="font-sans font-light text-ash/80">
                    <span className="text-bone font-medium">Task:</span> Close your eyes. Do not try to stop your thoughts. Instead, actively wait for the next thought to arrive. Look for it.
                  </p>
                  <p className="font-sans font-light text-ash/80">
                    Notice what happens when you watch closely. The mind goes quiet under direct observation.
                  </p>
                  <p className="font-sans text-sm text-ash/50 pt-4">
                    Create the gap. Starve the identity.
                  </p>
                </div>
                <div className="flex justify-center pt-12 animate-bounce opacity-30">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </motion.div>
            )}

            {/* Phase 5: Journal Prompt & Exit */}
            {phase === 5 && (
              <motion.div
                key="phase-5"
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
                    "What is one deeply held belief about who you are that you are now willing to question?"
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
                    href="/hub/chamber-2"
                    className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-blood/50 transition-all"
                  >
                    Proceed to Chamber II
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
      
      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${phase >= i ? 'bg-blood shadow-[0_0_5px_rgba(138,3,3,0.5)]' : 'bg-ash/20'}`}
          />
        ))}
      </div>

      <JournalModal
        chamber="Chamber I: The Fractured Self"
        prompt="What is one deeply held belief about who you are that you are now willing to question?"
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />
    </div>
  );
}
