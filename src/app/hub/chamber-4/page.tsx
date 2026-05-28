"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Orbit } from "lucide-react";

export default function ChamberFour() {
  const [scrollDepth, setScrollDepth] = useState(0);

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
          Chamber IV: Architecture
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
        
        {/* The center point (Bhairava consciousness / The Absolute) */}
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
              The Architecture <br/> of Experience
            </h1>
            <p className="font-sans font-light text-ash/70 text-lg leading-relaxed max-w-lg mx-auto">
              Ancient traditions map consciousness through polarity. <br/>
              The Stillness (The Observer) and The Movement (The Experience).
            </p>
            <div className="mt-24 text-[10px] uppercase tracking-[0.3em] text-ash/30 animate-pulse">
              Scroll downward to descend
            </div>
          </section>

          <section className="relative">
            <div className="absolute -left-8 top-0 w-[1px] h-full bg-gradient-to-b from-blood/50 to-transparent"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-crimson mb-6">1. The Canvas (Shiva)</h2>
            <div className="space-y-6 text-ash/80 font-light font-sans text-lg">
              <p>Consider a movie screen. The screen itself never burns when a fire is projected onto it. It never gets wet when an ocean is shown.</p>
              <p>This is pure awareness. It is the underlying, unchanging, empty reality that allows all things to exist.</p>
              <p className="italic text-bone">It is the silence you found in Chamber III.</p>
            </div>
          </section>

          <section className="relative">
             <div className="absolute -right-8 top-0 w-[1px] h-full bg-gradient-to-b from-ash/50 to-transparent"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-ash mb-6 text-right">2. The Projection (Shakti)</h2>
            <div className="space-y-6 text-ash/80 font-light font-sans text-lg text-right">
              <p>If awareness is the screen, <span className="text-bone">experience</span> is the light dancing upon it.</p>
              <p>Your thoughts, your emotions, the physical sensations of your body, the sound of the world... this is the dynamic, ever-changing energy of reality.</p>
              <p>Suffering occurs when the screen believes it is the movie.</p>
            </div>
          </section>

          <section className="text-center bg-obsidian/80 backdrop-blur-md p-12 border border-ash/10">
            <h2 className="font-serif text-3xl text-bone mb-8">Non-Separation</h2>
            <div className="space-y-6 text-ash/70 font-light font-sans text-lg">
              <p>The deepest teachings of the Vijnana Bhairava Tantra do not tell you to escape the world to find peace.</p>
              <p>They teach that the chaos of the world *is* the expression of the silence.</p>
              <p className="font-medium text-blood mt-8 text-xl italic">
                &quot;When you realize the observer and the observed are the same machinery, the illusion of isolation collapses.&quot;
              </p>
            </div>
          </section>

          <section className="text-center pt-[20vh]">
            <p className="font-serif text-ash/50 uppercase tracking-[0.4em] mb-12">
              End of Sequence
            </p>
            <Link 
              href="/hub"
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden"
            >
              <div className="absolute inset-0 border border-blood/40 group-hover:bg-blood/10 transition-all duration-500"></div>
              <span className="relative font-serif tracking-[0.2em] text-sm text-bone group-hover:text-white">
                COMPLETE INITIALIZATION
              </span>
            </Link>
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

    </div>
  );
}
