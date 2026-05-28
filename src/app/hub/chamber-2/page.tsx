"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Focus, Eye } from "lucide-react";

export default function ChamberTwo() {
  const [isObserving, setIsObserving] = useState(false);
  const [focusTime, setFocusTime] = useState(0);
  const [complete, setComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Interaction mechanics
  const startObservation = () => {
    setIsObserving(true);
    setFocusTime(0);
    timerRef.current = setInterval(() => {
      setFocusTime(prev => {
        if (prev >= 100) {
          clearInterval(timerRef.current!);
          setComplete(true);
          return 100;
        }
        return prev + 1; // Approx 10 seconds to fill (100 * 100ms)
      });
    }, 100);
  };

  const stopObservation = () => {
    if (!complete) {
      setIsObserving(false);
      setFocusTime(0);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-x-hidden selection:bg-blood">
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash">Return to Archive</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40">
          Chamber II: Mechanics
        </div>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ash/5 via-obsidian to-obsidian opacity-50"></div>

        {!complete ? (
          <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                Attention is <span className="text-crimson italic">Reality Selection</span>
              </h1>
              <p className="font-sans font-light text-ash/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                What you focus on becomes your world. If you cannot control your attention, you do not control your reality.
              </p>
            </motion.div>

            {/* The Observation Engine */}
            <div className="relative flex flex-col items-center justify-center h-80 w-full">
              
              <AnimatePresence>
                {!isObserving && focusTime === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 text-ash/50 font-sans text-sm tracking-widest uppercase"
                  >
                    Hold the center to anchor awareness
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Anchor Point */}
              <motion.button
                onMouseDown={startObservation}
                onMouseUp={stopObservation}
                onMouseLeave={stopObservation}
                onTouchStart={startObservation}
                onTouchEnd={stopObservation}
                className="relative z-20 w-24 h-24 rounded-full flex items-center justify-center group focus:outline-none"
                animate={isObserving ? { scale: 0.9 } : { scale: 1 }}
              >
                <div className={`absolute inset-0 rounded-full border border-ash/30 transition-all duration-300 ${isObserving ? 'bg-blood/20 border-blood' : 'bg-transparent group-hover:border-ash/60'}`} />
                <Eye className={`w-8 h-8 transition-colors duration-300 ${isObserving ? 'text-blood' : 'text-ash/60'}`} />
                
                {/* Visual noise when NOT focused */}
                <AnimatePresence>
                  {!isObserving && (
                    <motion.div 
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-ash/40 rounded-full"
                          animate={{
                            x: [((i * 17) % 100) - 50, ((i * 31) % 100) * -1 + 50],
                            y: [((i * 23) % 100) - 50, ((i * 47) % 100) * -1 + 50],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 2 + ((i * 11) % 20) / 10, repeat: Infinity, ease: "linear" }}
                          style={{
                            top: '50%', left: '50%'
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Progress Ring */}
              <svg className="absolute w-48 h-48 pointer-events-none transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="rgba(178, 190, 181, 0.1)" // ash/10
                  strokeWidth="1"
                  fill="none"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#8a0303" // blood
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="502"
                  strokeDashoffset={502 - (502 * focusTime) / 100}
                  className="transition-all duration-100 ease-linear"
                />
              </svg>
              
              <div className="absolute bottom-0 text-ash/30 font-serif text-xl">
                {focusTime}%
              </div>
            </div>

            <AnimatePresence>
              {isObserving && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-12 text-center text-ash/60 font-sans font-light italic"
                >
                  Notice how the mind fights the stillness. Let it fight. Hold the center.
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="max-w-2xl w-full mx-auto relative z-10 text-center space-y-12"
          >
            <Focus className="w-12 h-12 text-blood mx-auto mb-8 opacity-80" />
            
            <h2 className="font-serif text-3xl md:text-4xl text-bone">
              Anchorage Established
            </h2>
            
            <div className="space-y-6 text-ash/80 font-light font-sans text-lg md:text-xl leading-relaxed text-left border-l border-blood/40 pl-6 py-2 bg-gradient-to-r from-blood/5 to-transparent">
              <p>You have just collapsed the external noise into a single point.</p>
              <p>This is the fundamental mechanic of reality filtering. The nervous system prioritizes what you sustain attention upon.</p>
              <p className="font-medium text-bone">Mastery of self is not eliminating chaotic thoughts; it is the ability to withdraw attention from them at will.</p>
            </div>

            <div className="pt-12">
              <Link 
                href="/hub"
                className="inline-block border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-sm text-ash hover:text-bone hover:border-blood/50 hover:bg-blood/5 transition-all"
              >
                Return to Hub
              </Link>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
