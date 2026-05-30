"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Orbit } from "lucide-react";
import { JournalModal } from "@/components/JournalModal";

export default function ChamberFour() {
  const [scrollDepth, setScrollDepth] = useState(0);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const depth = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollDepth(depth);
  };

  return (
    <div className="h-screen bg-obsidian text-bone overflow-hidden selection:bg-blood/20 flex flex-col relative">
      
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash">Return to Archive</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40">
          Chamber IV: The Shadow
        </div>
      </header>

      {/* Background visual representing Reality Architecture (Shiva/Shakti polarity) */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] border-[0.5px] border-blood/10 rounded-full"
          style={{ rotate: scrollDepth * 3 }}
        >
           {/* Inner geometric markings mimicking a yantra */}
           <div className="absolute inset-10 border border-ash/5 rotate-45"></div>
           <div className="absolute inset-20 border border-ash/5 rounded-full"></div>
           <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-blood/10 to-transparent -translate-x-1/2"></div>
           <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blood/10 to-transparent -translate-y-1/2"></div>
        </motion.div>
        
        {/* The center point */}
        <motion.div 
          className="absolute w-4 h-4 bg-bone rounded-full blur-[2px]"
          style={{ 
            scale: 1 + (scrollDepth / 100) * 2,
            opacity: 0.2 + (scrollDepth / 100) * 0.8
          }}
        />
      </div>

      <main 
        className="relative z-10 h-full overflow-y-auto ritual-scroll pt-32 pb-64 px-6 scroll-smooth"
        onScroll={handleScroll}
      >
        <div className="max-w-2xl mx-auto space-y-[40vh]">
          
          <section className="text-center">
            <Orbit className="w-12 h-12 text-blood mx-auto mb-8 opacity-60 animate-[spin_20s_linear_infinite]" />
            <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              The Subterranean <br/> Mechanisms
            </h1>
            <p className="font-sans font-light text-ash/70 text-lg leading-relaxed max-w-lg mx-auto">
              What controls you without your awareness? <br/>
              The shadow is not evil. It is simply unobserved.
            </p>
            <div className="mt-24 text-[10px] uppercase tracking-[0.3em] text-ash/30 animate-pulse">
              Scroll downward to descend
            </div>
          </section>

          <section className="relative">
            <div className="absolute -left-8 top-0 w-[1px] h-full bg-gradient-to-b from-blood/50 to-transparent"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-crimson mb-6">1. The Unseen Driver</h2>
            <div className="space-y-6 text-ash/80 font-light font-sans text-lg">
              <p><span className="text-bone uppercase tracking-widest text-xs font-medium block mb-1">Psychological Perspective</span> Carl Jung said, "Until you make the unconscious conscious, it will direct your life and you will call it fate."</p>
              <p>Your seemingly irrational reactions—sudden anger, intense need for validation, fear of failure—are highly rational mechanisms protecting a wounded part of your psyche.</p>
            </div>
          </section>

          <section className="relative">
             <div className="absolute -right-8 top-0 w-[1px] h-full bg-gradient-to-b from-ash/50 to-transparent"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-ash mb-6 text-right">2. Integration, Not Destruction</h2>
            <div className="space-y-6 text-ash/80 font-light font-sans text-lg text-right">
              <p>You cannot kill the shadow. You can only shine the light of the Observer upon it.</p>
              <p><span className="text-bone uppercase tracking-widest text-xs font-medium block mb-1">Spiritual Perspective</span> Tantra teaches that nothing is rejected. The poison becomes the medicine when it is fully witnessed without judgment.</p>
            </div>
          </section>

          <section className="text-center bg-obsidian/80 backdrop-blur-md p-12 border border-ash/10">
            <h2 className="font-serif text-3xl text-bone mb-8">Observation Exercise</h2>
            <div className="space-y-6 text-ash/70 font-light font-sans text-lg text-left">
              <p>Recall a recent moment when you overreacted. A moment of intense defensiveness or anger.</p>
              <p>Do not judge the reaction. Instead, ask the mechanism: <span className="italic text-bone">"What were you trying to protect?"</span></p>
            </div>

            <div className="pt-12 border-t border-ash/10 mt-12 space-y-8">
              <h3 className="font-serif text-xl text-ash uppercase tracking-widest">Reflection</h3>
              <p className="font-serif italic text-bone/90 max-w-lg mx-auto">
                "What is a recurring negative pattern in my life, and what hidden fear is secretly keeping it alive?"
              </p>

              <button
                onClick={() => setIsJournalOpen(true)}
                className="inline-flex items-center gap-3 border border-blood/30 bg-blood/5 px-8 py-4 font-serif uppercase tracking-widest text-sm text-bone hover:border-blood hover:bg-blood/20 transition-all"
              >
                Open Journal
              </button>
            </div>
          </section>

          <section className="text-center pt-[10vh]">
            <p className="font-serif text-ash/50 uppercase tracking-[0.4em] mb-12">
              End of Sector 04
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/hub"
                  className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-ash/50 transition-all"
                >
                  Return to Hub
                </Link>
                {/* <Link
                  href="/hub/chamber-5"
                  className="border border-ash/20 px-8 py-3 font-serif uppercase tracking-widest text-xs text-ash hover:text-bone hover:border-ash/50 transition-all opacity-50 cursor-not-allowed"
                >
                  Proceed to Chamber V
                </Link> */}
              </div>
          </section>

        </div>
      </main>
      
      {/* Scroll Progress Bar at the right edge */}
      <div className="absolute right-0 top-0 w-1 h-full bg-obsidian z-50">
        <div 
          className="w-full bg-blood transition-all duration-75"
          style={{ height: `${scrollDepth}%` }}
        />
      </div>

      <JournalModal
        chamber="Chamber IV: The Shadow"
        prompt="What is a recurring negative pattern in my life, and what hidden fear is secretly keeping it alive?"
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
      />
    </div>
  );
}
