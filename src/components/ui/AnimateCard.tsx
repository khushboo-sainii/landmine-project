"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { fadeUpChild } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  useTopBar?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  padding = "p-7",
  useTopBar = true,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!useTopBar || !ref.current) return;
    const bar = ref.current.querySelector<HTMLElement>(".ac-bar");
    if (bar) bar.style.transform = "scaleX(1)";
  };
  const handleLeave = () => {
    if (!useTopBar || !ref.current) return;
    const bar = ref.current.querySelector<HTMLElement>(".ac-bar");
    if (bar) bar.style.transform = "scaleX(0)";
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUpChild}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,36,99,.13)" }}
      transition={{ duration: 0.25 }}
      className={`card ${padding} relative overflow-hidden ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {useTopBar && (
        <div
          className="ac-bar absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(90deg, #00B4D8, #0A2463)",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform .3s ease",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
