"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import { useUser } from "@/components/UserProvider";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface JournalModalProps {
  chamber: string;
  prompt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function JournalModal({ chamber, prompt, isOpen, onClose }: JournalModalProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { initiateId } = useUser();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !initiateId) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('journals')
        .insert([{
          initiate_id: initiateId,
          chamber,
          content: content.trim()
        }]);

      if (error) throw error;

      setContent("");
      onClose();
      router.push("/hub"); // Optionally redirect to hub or journal
    } catch (err) {
      console.error("Failed to save journal:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-2xl bg-black border border-ash/20 shadow-2xl relative flex flex-col max-h-[90vh]"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-ash/50 hover:text-bone transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 border-b border-ash/10">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blood" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-ash">
                  Log Entry: {chamber}
                </span>
              </div>
              <p className="font-serif text-xl text-bone/90 leading-relaxed italic">
                "{prompt}"
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 flex-grow flex flex-col gap-6 overflow-hidden">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Observe. Record..."
                className="w-full flex-grow min-h-[200px] bg-transparent resize-none font-sans font-light text-bone/80 text-lg leading-relaxed focus:outline-none placeholder:text-ash/30 custom-scrollbar"
                autoFocus
              />

              <div className="flex justify-end pt-4 border-t border-ash/10">
                <button
                  type="submit"
                  disabled={!content.trim() || isSubmitting}
                  className="px-8 py-3 bg-blood/10 border border-blood/40 hover:bg-blood hover:text-bone text-blood font-serif uppercase tracking-widest text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Scribing..." : "Commit to Archive"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
