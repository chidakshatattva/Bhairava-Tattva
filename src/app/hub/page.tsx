"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Hexagon, CircleDashed, Orbit } from "lucide-react";

const chambers = [
  {
    id: "chamber-1",
    path: "/hub/chamber-1",
    title: "Chamber I: The Illusion of Self",
    subtitle: "Awareness vs Identity",
    status: "unlocked",
    icon: <Eye className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-2",
    path: "/hub/chamber-2",
    title: "Chamber II: The Observer",
    subtitle: "Mechanics of Perception",
    status: "unlocked",
    icon: <CircleDashed className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-3",
    path: "/hub/chamber-3",
    title: "Chamber III: The Void",
    subtitle: "Inner Silence",
    status: "unlocked",
    icon: <Hexagon className="w-6 h-6 text-ash/30" />
  },
  {
    id: "chamber-4",
    path: "/hub/chamber-4",
    title: "Chamber IV: Reality Architecture",
    subtitle: "Nondual Mechanics",
    status: "unlocked",
    icon: <Orbit className="w-6 h-6 text-ash/30" />
  }
];

export default function Hub() {
  const [username, setUsername] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("initiate_username");
    setMounted(true);
    if (!user) {
      router.push("/");
    } else {
      setUsername(user);
    }
  }, [router]);

  if (!mounted || !username) return null;

  return (
    <div className="min-h-screen bg-obsidian text-bone p-6 md:p-12 relative overflow-hidden flex flex-col">
      {/* Ambient background styling */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/5 via-obsidian to-obsidian"></div>
      
      {/* Top Bar */}
      <header className="relative z-10 flex justify-between items-end border-b border-ash/10 pb-6 mb-16">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-ash opacity-80 tracking-widest uppercase">The Bhāirava Codex</h1>
          <p className="font-sans text-xs text-ash/40 tracking-[0.2em] uppercase mt-2">Ancient Consciousness. Modern Perception. Inner Revolution.</p>
        </div>
        <div className="text-right">
          <p className="font-sans text-[10px] text-ash/50 uppercase tracking-widest mb-1">Active Vessel</p>
          <p className="font-serif text-lg text-crimson/80 tracking-wider">{username}</p>
        </div>
      </header>

      {/* Main Grid / Navigation Architecture */}
      <main className="relative z-10 flex-grow max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {chambers.map((chamber, index) => {
          const isLocked = chamber.status === "locked";
          return (
            <motion.div
              key={chamber.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Link 
                href={isLocked ? "#" : chamber.path}
                className={`group relative block h-full border ${isLocked ? 'border-ash/5 bg-obsidian/20 cursor-not-allowed' : 'border-ash/20 bg-obsidian/60 hover:bg-obsidian hover:border-blood/40'} p-8 transition-all duration-500 overflow-hidden backdrop-blur-sm`}
              >
                {/* Decorative corner brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ash/30" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ash/30" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ash/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ash/30" />

                <div className="flex items-center justify-between mb-12">
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-ash/40 group-hover:text-ash/70 transition-colors">
                    Sector 0{index + 1}
                  </span>
                  <div className={`p-3 rounded-full border ${isLocked ? 'border-ash/10' : 'border-ash/20 group-hover:border-blood/50 group-hover:bg-blood/5'} transition-all`}>
                    {chamber.icon}
                  </div>
                </div>

                <div>
                  <h2 className={`font-serif text-xl md:text-2xl mb-2 tracking-wide ${isLocked ? 'text-ash/30' : 'text-bone group-hover:text-blood'} transition-colors`}>
                    {chamber.title}
                  </h2>
                  <p className={`font-sans text-sm font-light ${isLocked ? 'text-ash/20' : 'text-ash/60'} tracking-wide`}>
                    {chamber.subtitle}
                  </p>
                </div>
                
                {isLocked && (
                  <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-[0.4em] text-ash/30 border border-ash/10 px-4 py-2">
                      Access Restricted
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          );
        })}
      </main>

      {/* Footer metadata */}
      <footer className="relative z-10 mt-16 text-center border-t border-ash/10 pt-6 pb-2">
        <p className="font-sans text-[10px] text-ash/30 uppercase tracking-[0.3em]">
          Knowledge is sequential. Observe carefully.
        </p>
      </footer>
    </div>
  );
}
