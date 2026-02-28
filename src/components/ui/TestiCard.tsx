"use client";
import { motion } from "framer-motion";
import { fadeUpChild } from "@/lib/animations";

interface TestiCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  initials: string;
  dark?: boolean;
}

export default function TestiCard({ quote, author, role, company, initials, dark = false }: TestiCardProps) {
  return (
    <motion.div
      variants={fadeUpChild}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(10,36,99,.10)" }}
      transition={{ duration: 0.25 }}
      className={`card p-9 ${dark ? "bg-gradient-to-br from-[#060F2E] to-[#0A2463] border-[#1a2e5a]" : "bg-[#EBF0FF] border-[#DDE3F0]"}`}
    >
      <div
        className={`font-[var(--font-heading)] text-5xl leading-none mb-3 opacity-30 ${dark ? "text-teal" : "text-[#00B4D8]"}`}
      >
        "
      </div>
      <p className={`text-[0.95rem] leading-[1.8] italic mb-7 ${dark ? "text-white/70" : "text-[#4A5568]"}`}>
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-[var(--font-heading)] font-extrabold text-white text-[0.9rem]"
          style={{ background: "linear-gradient(135deg, #0A2463, #00B4D8)" }}>
          {initials}
        </div>
        <div>
          <div className={`font-bold text-[0.88rem] ${dark ? "text-white" : "text-[#0D1B3E]"}`}>{author}</div>
          {role && <div className={`text-xs ${dark ? "text-white/50" : "text-[#718096]"}`}>{role}</div>}
          {company && <div className={`text-xs ${dark ? "text-white/50" : "text-[#718096]"}`}>{company}</div>}
        </div>
      </div>
    </motion.div>
  );
}