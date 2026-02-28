"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS, CTA_CONTENT } from "@/lib/constants";
import { fadeUp, fadeUpStagger, fadeUpChild } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimateCard";
import Image from "next/image";

export default function WorkPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero/work-hero.avif"
            alt="background"
            fill
            priority
            className="object-cover blur-[4px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060F2E]/80 via-[#0A2463]/70 to-[#0A2463]/90 z-0"></div>

        <div className="container-main relative z-10 py-28 text-center">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            animate="show"
            className="max-w-[800px] mx-auto"
          >
            <motion.span
              variants={fadeUpChild}
              className="inline-block text-[.72rem] font-extrabold tracking-[0.15em] uppercase text-[#00B4D8] mb-2 drop-shadow-md"
            >
              OUR WORK
            </motion.span>
            <motion.h1
              variants={fadeUpChild}
              className="font-[var(--font-heading)] font-extrabold text-white mt-2 mb-5 leading-[1.08] text-[clamp(2.6rem,5vw,4rem)] drop-shadow-xl"
            >
              Building Solutions That <br />
              <span className="text-gradient-white drop-shadow-md">
                Drive Growth
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpChild}
              className="text-[1.125rem] leading-[1.6] max-w-[660px] mx-auto text-white/90 mb-8 drop-shadow-md"
            >
              Explore our recent case studies and see how we've helped
              businesses transform their digital presence and operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURED WORK ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label="CASE STUDIES"
            title="Real solutions. Real results."
            description="Here's a detailed look at what we've built for our clients."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {PROJECTS.map((p) => (
              <AnimatedCard
                key={p.num}
                padding="p-0"
                useTopBar={false}
                className="flex flex-col"
              >
                <div
                  style={{
                    height: 4,
                    background: `linear-gradient(90deg, ${p.accent}, ${p.accentBg})`,
                  }}
                />
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[var(--font-heading)] text-[2.5rem] font-extrabold text-[#EEF1F8] leading-none">
                      {p.num}
                    </span>
                    <span
                      className="badge"
                      style={{
                        background: p.accentBg,
                        color: p.accent,
                        border: "none",
                        fontSize: ".68rem",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-base text-[#0D1B3E] mb-4 leading-[1.4]">
                    {p.name}
                  </h3>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="py-[0.2rem] px-[0.65rem] rounded-full text-[0.68rem] font-semibold bg-[#F7F9FC] text-[#4A5568] border border-[#DDE3F0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-[#EEF1F8]">
                    <p className="text-[0.82rem] text-[#4A5568] leading-[1.65] italic">
                      "{p.outcome}"
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="relative w-full py-20 overflow-hidden bg-[#F7F9FC]">
        <motion.div
          className="section-center pt-0 pb-0 relative z-10 max-w-[640px] mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label text-[#00B4D8]">
            Start Your Project
          </span>
          <h2 className="section-title text-[#0D1B3E]">
            {CTA_CONTENT.title1}
            <br />
            {CTA_CONTENT.title2}
          </h2>
          <span className="section-bar" />
          <p className="section-description text-[#4A5568]">
            {CTA_CONTENT.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              href={CTA_CONTENT.ctaLink1}
              className="btn-primary bg-[#00B4D8] text-white border border-[#00B4D8] text-base py-[0.85rem] px-8 transition-all duration-200 ease-in-out hover:bg-[#0096C7] hover:border-[#0096C7] hover:-translate-y-[2px]"
            >
              {CTA_CONTENT.ctaText1} <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
