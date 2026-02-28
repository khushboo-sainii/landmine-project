"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-14 ${centered ? "flex flex-col items-center text-center" : "flex flex-col items-start"}`}
    >
      <span className={`section-label ${light ? "text-teal-light" : ""}`}>{label}</span>
      <h2 className={`section-title mt-1 ${light ? "text-white" : ""}`}>{title}</h2>
      <span className={`section-bar ${centered ? "" : "ml-0"}`} />
      {description && (
        <p className={`section-description ${centered ? "" : "ml-0"} ${light ? "text-white/60" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}