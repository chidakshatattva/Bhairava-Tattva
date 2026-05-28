"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChamberThree() {
  const [phase, setPhase] = useState(0);
  const [breathe, setBreathe] = useState(false);

  useEffect(() => {
    if (phase === 1) {
      const interval = setInterval(() => {
        setBreathe(b => !b);
      }, 4000); // 4 seconds in, 4 seconds out
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-hidden selection:bg-blood/20">
      
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/hub" className="group flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-bone transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash group-hover:text-bone">Exit Void</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/20">
          Chamber III: Silence
        </div>
      </header>

      <main className="relative min-h-screen w-full flex items-center justify-center cursor-crosshair" onClick={() => phase < 2 && setPhase(phase + 1)}>
        
        <AnimatePresence mode="wait">
          {/* Phase 0: The Setup */}
          {phase === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 3 }}
              className="max-w-md text-center px-6"
            >
              <h1 className="font-serif text-2xl text-ash/60 tracking-widest mb-12 uppercase">
                The Space Between
              </h1>
              <p className="font-sans font-light text-ash/50 leading-loose">
                You are not the thoughts. <br/>
                You are the silence in which they echo.
              </p>
              <p className="font-sans text-xs text-ash/30 uppercase tracking-[0.2em] mt-24 animate-pulse">
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
              className="max-w-2xl text-center px-6 relative z-10"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-bone/80 mb-8">
                Nothingness is not empty. <br/>
                <span className="italic text-ash/60">It is full of potential.</span>
              </h2>
              <div className="space-y-6 text-ash/60 font-light font-sans text-lg md:text-xl leading-relaxed mb-16">
                <p>
                  The ego fears the void because in the void, it does not exist.
                </p>
                <p>
                  When you stop identifying with the endless stream of thoughts, you fall into this underlying architecture. 
                  This is not a loss of self; it is the discovery of the true Observer.
                </p>
              </div>

              <Link 
                href="/hub"
                className="inline-block border-b border-ash/20 pb-1 font-serif uppercase tracking-widest text-xs text-ash/60 hover:text-bone hover:border-bone transition-all"
              >
                Accept & Return
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
