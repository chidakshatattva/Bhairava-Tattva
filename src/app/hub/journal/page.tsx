"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { useUser } from "@/components/UserProvider";
import { supabase } from "@/lib/supabase";

export default function JournalArchive() {
  const { initiateId, username } = useUser();
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initiateId) {
      fetchLogs();
    }
  }, [initiateId]);

  const fetchLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('journals')
        .select('*')
        .eq('initiate_id', initiateId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLogs(data || []);
    } catch (err) {
      console.error("Failed to fetch logs:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-bone overflow-hidden flex flex-col relative">
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/hub" className="pointer-events-auto group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4 text-ash group-hover:text-blood transition-colors" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ash">Return to Archive</span>
        </Link>
        <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-ash/40">
          The Central Log
        </div>
      </header>

      <main className="relative z-10 flex-grow max-w-4xl w-full mx-auto px-6 pt-32 pb-24 flex flex-col">
        <div className="mb-16 border-b border-ash/10 pb-8 flex items-end justify-between">
          <div>
            <h1 className="font-serif text-3xl md:text-5xl text-bone flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-blood" />
              Journal of {username}
            </h1>
            <p className="font-sans font-light text-ash/50 mt-4 tracking-wide uppercase text-sm">
              Records of observation and self-deconstruction
            </p>
          </div>
        </div>

        <div className="space-y-8 flex-grow">
          {loading ? (
            <div className="text-center text-ash/40 font-serif animate-pulse">Accessing records...</div>
          ) : logs.length === 0 ? (
            <div className="text-center p-12 border border-ash/10 bg-obsidian/40 text-ash/60 font-sans font-light">
              No entries found. The mind remains unrecorded.
            </div>
          ) : (
            <AnimatePresence>
              {logs.map((log, index) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-ash/20 bg-black/40 backdrop-blur-sm p-8 group hover:border-blood/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-blood/80 border border-blood/20 px-3 py-1 bg-blood/5">
                      {log.chamber}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-ash/40 flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {new Date(log.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="font-serif text-lg leading-relaxed text-bone/90 whitespace-pre-wrap">
                    {log.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </main>
    </div>
  );
}
