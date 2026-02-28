"use client";
import { motion, cubicBezier } from "framer-motion";

const easing = cubicBezier(0.16, 1, 0.3, 1);
const fadeUpStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUpChild = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing },
  },
};


interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  dark?: boolean;
}

export default function StatsSection({
  stats,
  dark = true,
}: StatsSectionProps) {
  return (
    <section
      className="w-full py-14"
      style={{
        background: dark
          ? "linear-gradient(135deg, #060F2E, #0A2463, #0D2E7A)"
          : "#F7F9FC",
      }}
    >
      <div className="container-main">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUpChild} className="py-4">
              <div
                className={`font-[var(--font-heading)] font-extrabold leading-none mb-1 ${dark ? "text-white" : "text-[#0A2463]"}`}
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
              >
                {stat.value}
                {dark && <span className="text-[#00B4D8]">+</span>}
              </div>
              {dark && (
                <div
                  className="w-8 h-[3px] rounded-full mx-auto mt-3 mb-2"
                  style={{
                    background: "linear-gradient(90deg, #00B4D8, transparent)",
                  }}
                />
              )}
              <div
                className={`text-[0.85rem] font-medium ${dark ? "text-white/45" : "text-[#718096]"}`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
