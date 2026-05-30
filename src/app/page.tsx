"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function InitiationRite() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  // Cinematic timings
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Allow scrolling to progress steps
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && step < 4) {
        // Debounce scrolling
        const currentStep = step;
        setTimeout(() => setStep(currentStep + 1), 800);
      }
    };
    
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [step]);

  // Click to progress for mobile/easier nav
  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleEnter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length > 0) {
      setIsSubmitting(true);
      try {
        const { data, error } = await supabase
          .from('initiates')
          .select('*')
          .eq('username', username.trim())
          .single();

        let initiateId;

        if (error && error.code === 'PGRST116') {
          // User doesn't exist, create them
          const { data: newUser, error: insertError } = await supabase
            .from('initiates')
            .insert([{ username: username.trim(), progress: {} }])
            .select()
            .single();

          if (insertError) throw insertError;
          initiateId = newUser.id;
        } else if (data) {
          // User exists
          initiateId = data.id;
        }

        if (initiateId) {
          localStorage.setItem("initiate_username", username.trim());
          localStorage.setItem("initiate_id", initiateId);
          router.push("/hub");
        }
      } catch (err) {
        console.error("Failed to initialize vessel:", err);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-obsidian text-bone flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={nextStep}
      ref={scrollContainerRef}
    >
      
      {/* Background ambient noise/grain */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("/assets/hardik-p-pawPQMgJj08-unsplash.jpg")', backgroundSize: 'cover' }}></div>
      
      {/* Subtle pulsing gradient in the center */}
      <motion.div 
        className="fixed inset-0 pointer-events-none radial-gradient-dark"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(circle at center, rgba(138, 3, 3, 0.05) 0%, rgba(11, 12, 16, 1) 70%)'
        }}
      />

      <AnimatePresence mode="wait">
        
        {step === 0 && (
          <motion.div 
            key="warning-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
            className="max-w-2xl text-center px-6"
          >
            <p className="font-serif text-sm md:text-base text-ash tracking-[0.3em] uppercase mb-8 opacity-60">System Warning</p>
            <h1 className="font-serif text-3xl md:text-5xl mb-10 leading-tight">
              You are about to enter an architecture <br/>
              built to <span className="text-crimson">deconstruct</span> you.
            </h1>
            <p className="font-sans font-light text-ash leading-relaxed opacity-80 max-w-lg mx-auto">
              This is not self-help. This is not motivation. <br/>
              This is a descent into the machinery of your own perception.
            </p>
            <motion.p 
              className="mt-20 text-xs text-ash/40 uppercase tracking-[0.2em]"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Scroll or tap to descend
            </motion.p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div 
            key="warning-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
            className="max-w-2xl text-center px-6"
          >
            <div className="w-16 h-16 mx-auto mb-10 border border-crimson/30 rotate-45 flex items-center justify-center">
              <div className="w-8 h-8 border border-blood/50 rotate-[-45deg]" />
            </div>
            <h2 className="font-serif text-2xl md:text-4xl mb-8 leading-snug">
              Every day, you operate through a <br/>
              <span className="text-ash opacity-50 italic">filtering mechanism</span> you call &quot;myself.&quot;
            </h2>
            <p className="font-sans font-light text-ash leading-relaxed opacity-80">
              The stress you feel, the noise in your head, the rigid identity you defend... <br/>
              These are not absolute truths. They are acquired software.
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="warning-3"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
            className="max-w-2xl text-center px-6"
          >
             <div className="relative w-32 h-32 mx-auto mb-12">
               <motion.div 
                 className="absolute inset-0 border-[0.5px] border-ash/20 rounded-full"
                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                 transition={{ duration: 4, repeat: Infinity }}
               />
               <motion.div 
                 className="absolute inset-4 border-[0.5px] border-ash/30 rounded-full"
                 animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 3, repeat: Infinity }}
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-2 h-2 bg-crimson rounded-full shadow-[0_0_15px_rgba(138,3,3,0.8)]" />
               </div>
             </div>
            <h2 className="font-serif text-2xl md:text-4xl mb-8 leading-snug">
              We are going to isolate the <span className="text-bone">Observer</span>.
            </h2>
            <p className="font-sans font-light text-ash leading-relaxed opacity-80 mb-6">
              To proceed is to agree to witness your own mind <br/>
              as a mechanism, rather than your identity.
            </p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="max-w-md w-full px-6"
            onClick={(e) => e.stopPropagation()} // Prevent click from advancing to non-existent step
          >
            <div className="border border-ash/10 bg-obsidian/80 backdrop-blur-md p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
              
              <h3 className="font-serif text-xl tracking-widest text-center mb-8 uppercase text-ash">
                Initiation Log
              </h3>
              
              <form onSubmit={handleEnter} className="space-y-8">
                <div className="relative">
                  <label htmlFor="username" className="block text-xs uppercase tracking-widest text-ash/50 mb-3">
                    Designate your temporary vessel (Username)
                  </label>
                  <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-transparent border-b border-ash/30 pb-2 text-xl font-serif text-bone focus:outline-none focus:border-blood focus:ring-0 transition-colors placeholder:text-ash/20"
                    placeholder="..."
                    autoComplete="off"
                    required
                  />
                </div>
                
                <div className="pt-4 flex justify-center">
                  <button 
                    type="submit"
                    disabled={!username.trim() || isSubmitting}
                    className="group relative px-8 py-3 overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <div className="absolute inset-0 border border-ash/20 group-hover:border-blood/50 transition-colors" />
                    <div className="absolute inset-0 bg-blood/0 group-hover:bg-blood/10 transition-colors" />
                    <span className="relative font-serif tracking-[0.2em] text-sm group-hover:text-bone transition-colors">
                      {isSubmitting ? "SYNCING..." : "ENTER THE CODEX"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <p className="mt-8 text-center text-[10px] text-ash/30 tracking-widest uppercase">
              Your progress will be permanently etched to this designation.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
