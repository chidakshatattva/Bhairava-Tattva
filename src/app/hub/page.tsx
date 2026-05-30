"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Hexagon, CircleDashed, Orbit, BookOpen, Fingerprint, Focus, Activity } from "lucide-react";
import { useUser } from "@/components/UserProvider";

const chambers = [
  {
    id: "chamber-1",
    path: "/hub/chamber-1",
    title: "Chamber I: The Fractured Self",
    subtitle: "Identity vs Conditioning",
    status: "unlocked",
    icon: <Fingerprint className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-2",
    path: "/hub/chamber-2",
    title: "Chamber II: The Observer",
    subtitle: "Mechanics of Perception",
    status: "unlocked",
    icon: <Eye className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-3",
    path: "/hub/chamber-3",
    title: "Chamber III: Architecture of Perception",
    subtitle: "Inner Silence",
    status: "unlocked",
    icon: <CircleDashed className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-4",
    path: "/hub/chamber-4",
    title: "Chamber IV: The Shadow",
    subtitle: "Unconscious Mechanics",
    status: "unlocked", // For this build, making all unlocked
    icon: <Hexagon className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-5",
    path: "/hub/chamber-5",
    title: "Chamber V: Field of Awareness",
    subtitle: "Stillness & Presence",
    status: "unlocked",
    icon: <Focus className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-6",
    path: "/hub/chamber-6",
    title: "Chamber VI: The Bhāirava Gate",
    subtitle: "Tantric Nonduality",
    status: "unlocked",
    icon: <Orbit className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-7",
    path: "/hub/chamber-7",
    title: "Chamber VII: Collapse of Separation",
    subtitle: "Direct Experience",
    status: "unlocked",
    icon: <Activity className="w-6 h-6 text-ash" />
  },
  {
    id: "chamber-8",
    path: "/hub/chamber-8",
    title: "Chamber VIII: The Great Return",
    subtitle: "Embodied Living",
    status: "unlocked",
    icon: <Orbit className="w-6 h-6 text-ash" />
  }
];

export default function Hub() {
  const { username, logout } = useUser();

  if (!username) return null;

  return (
    <div className="min-h-screen bg-obsidian text-bone p-6 md:p-12 relative overflow-hidden flex flex-col">
      {/* Ambient background styling */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/5 via-obsidian to-obsidian"></div>
      
      {/* Top Bar */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-ash/10 pb-6 mb-12 gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-ash opacity-80 tracking-widest uppercase">The Bhāirava Codex</h1>
          <p className="font-sans text-xs text-ash/40 tracking-[0.2em] uppercase mt-2">Ancient Consciousness. Modern Perception. Inner Revolution.</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="text-right">
            <p className="font-sans text-[10px] text-ash/50 uppercase tracking-widest mb-1">Active Vessel</p>
            <p className="font-serif text-lg text-crimson/80 tracking-wider">{username}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/hub/journal" className="flex items-center gap-2 border border-ash/20 px-4 py-2 hover:bg-ash/5 transition-colors group">
              <BookOpen className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-ash group-hover:text-bone">Central Log</span>
            </Link>
            <button onClick={logout} className="border border-ash/20 px-4 py-2 hover:bg-ash/5 transition-colors group">
              <span className="font-sans text-[10px] uppercase tracking-widest text-ash group-hover:text-blood">Disconnect</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid / Navigation Architecture */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24">
        {chambers.map((chamber, index) => {
          const isLocked = chamber.status === "locked";
          return (
            <motion.div
              key={chamber.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={index === chambers.length - 1 ? "md:col-span-2 lg:col-span-1" : ""} // Fix grid alignment for 8 items
            >
              <Link 
                href={isLocked ? "#" : chamber.path}
                className={`group relative flex flex-col h-full min-h-[200px] border ${isLocked ? 'border-ash/5 bg-obsidian/20 cursor-not-allowed' : 'border-ash/20 bg-obsidian/60 hover:bg-obsidian hover:border-blood/40'} p-6 transition-all duration-500 overflow-hidden backdrop-blur-sm`}
              >
                {/* Decorative corner brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ash/30" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ash/30" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ash/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ash/30" />

                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40 group-hover:text-ash/70 transition-colors">
                    Sector 0{index + 1}
                  </span>
                  <div className={`p-2 rounded-full border ${isLocked ? 'border-ash/10' : 'border-ash/20 group-hover:border-blood/50 group-hover:bg-blood/5'} transition-all`}>
                    {chamber.icon}
                  </div>
                </div>

                <div className="mt-auto">
                  <h2 className={`font-serif text-lg md:text-xl mb-2 tracking-wide ${isLocked ? 'text-ash/30' : 'text-bone group-hover:text-blood'} transition-colors`}>
                    {chamber.title}
                  </h2>
                  <p className={`font-sans text-[11px] font-light uppercase tracking-widest ${isLocked ? 'text-ash/20' : 'text-ash/50'} transition-colors`}>
                    {chamber.subtitle}
                  </p>
                </div>
                
                {isLocked && (
                  <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-[0.4em] text-ash/40 border border-ash/10 px-4 py-2">
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
      <footer className="relative z-10 text-center border-t border-ash/10 pt-6 pb-2">
        <p className="font-sans text-[10px] text-ash/30 uppercase tracking-[0.3em]">
          Knowledge is sequential. Observe carefully.
        </p>
      </footer>
    </div>
  );
}
