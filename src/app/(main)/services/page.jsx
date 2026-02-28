"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  SERVICES_PAGE_HERO,
  SERVICES_DETAIL,
  TECH_STACK,
  INDUSTRIES,
  STATS,
} from "@/lib/constants";
import { fadeUpStagger, fadeUpChild } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import StatsSection from "@/components/ui/StatsSection";
import AnimatedCard from "@/components/ui/AnimateCard";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero/service-hero.avif"
            alt="background"
            fill
            priority
            className="object-cover blur-[4px] scale-105"
          />
        </div>

        <div className="container-main relative z-10 py-28">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            animate="show"
            className="max-w-[680px]"
          >
            <motion.span
              variants={fadeUpChild}
              className="inline-block text-[.72rem] font-extrabold tracking-[0.15em] uppercase text-[#00B4D8] mb-2 drop-shadow-md"
            >
              {SERVICES_PAGE_HERO.label}
            </motion.span>
            <motion.h1
              variants={fadeUpChild}
              className="font-[var(--font-heading)] font-extrabold text-white mt-2 mb-5 leading-[1.08] text-[clamp(2.6rem,5vw,4rem)] drop-shadow-xl"
            >
              {SERVICES_PAGE_HERO.title}
              <span className="block text-gradient-white drop-shadow-md">
                {SERVICES_PAGE_HERO.titleAccent}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpChild}
              className="text-[1.125rem] leading-[1.6] max-w-[660px] text-white/90 mb-8 drop-shadow-md"
            >
              {SERVICES_PAGE_HERO.description}
            </motion.p>
            <motion.div variants={fadeUpChild} className="flex gap-4 flex-wrap">
              <Link
                href="#services"
                className="btn-primary bg-white text-[#0A2463] border border-white hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white transition-all"
              >
                {SERVICES_PAGE_HERO.cta1} <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="btn-outline border border-white/40 text-white hover:border-[#00B4D8] hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 transition-all"
              >
                {SERVICES_PAGE_HERO.cta2}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <StatsSection stats={STATS} dark={true} />

      {/* ══ SERVICE DETAILS ══ */}
      <section id="services" className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="OUR SERVICES"
            title={
              <>
                Everything You Need to{" "}
                <span className="text-gradient-brand">Build & Scale</span>
              </>
            }
            description="End-to-end technology solutions — from idea to deployment and beyond."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {SERVICES_DETAIL.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUpChild}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 24px 48px ${service.accent}22`,
                  }}
                  transition={{ duration: 0.28 }}
                  style={{
                    "--service-accent": service.accent,
                    "--service-accent-bg": service.accentBg,
                    "--service-accent-hover": service.accent + "66",
                  }}
                  className="group relative flex flex-col rounded-[20px] overflow-hidden bg-white border border-[#DDE3F0] transition-colors duration-250 hover:border-[var(--service-accent-hover)]"
                >
                  {/* ── Coloured header band ── */}
                  <div className="relative px-6 pt-7 pb-6 flex flex-col gap-4 bg-[var(--service-accent-bg)]">
                    {/* icon + tag row */}
                    <div className="flex items-center justify-between">
                      <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shadow-sm bg-white">
                        <Icon
                          size={24}
                          color={service.iconColor}
                          strokeWidth={1.75}
                        />
                      </div>
                      <span className="text-[.68rem] font-[800] tracking-[.14em] uppercase px-3 py-1 rounded-full text-[var(--service-accent)] bg-[var(--service-accent)]/10">
                        {service.tag}
                      </span>
                    </div>

                    {/* title */}
                    <h3 className="font-[var(--font-heading)] font-bold leading-[1.25] text-[clamp(1.05rem,1.5vw,1.25rem)] text-[#0D1B3E]">
                      {service.title}
                    </h3>

                    {/* overview */}
                    <p className="text-[.85rem] text-[#4A5568] leading-[1.7]">
                      {service.overview}
                    </p>

                    {/* subtle bottom divider */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--service-accent)]/20" />
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-col flex-1 px-6 py-5 gap-5">
                    {/* deliverables */}
                    <div>
                      <p className="text-[.68rem] font-[800] tracking-[.14em] uppercase mb-3 text-[var(--service-accent)]">
                        What We Deliver
                      </p>
                      <ul className="flex flex-col gap-[7px]">
                        {service.deliverables.slice(0, 4).map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-[.82rem] text-[#4A5568]"
                          >
                            <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[.6rem] font-bold text-white bg-[var(--service-accent)]">
                              ✓
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ── CTA footer ── */}
                  <div className="px-6 pb-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[.85rem] font-[700] transition-all duration-200 group-hover:gap-3 text-[var(--service-accent)]"
                    >
                      Discuss Your Project
                      <span className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 bg-[var(--service-accent-bg)]">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>

                  {/* ── Bottom accent bar (grows on hover) ── */}
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[20px]"
                    style={{
                      background: `linear-gradient(90deg, ${service.accent}, ${service.accentBg})`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label="INDUSTRIES WE SERVE"
            title={
              <>
                Built for{" "}
                <span className="text-gradient-brand">Your Industry</span>
              </>
            }
            description="We understand the unique challenges of each sector — and we build solutions that fit."
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {INDUSTRIES.map((ind) => (
              <AnimatedCard key={ind.name} padding="p-6">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-[var(--font-heading)] font-bold text-[1rem] text-[#0D1B3E] mb-1">
                  {ind.name}
                </h3>
                <p className="text-[.85rem] text-[#4A5568] leading-[1.65]">
                  {ind.desc}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="TECHNOLOGIES"
            title={
              <>
                Technologies{" "}
                <span className="text-gradient-brand">We Master</span>
              </>
            }
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {TECH_STACK.map((t) => (
              <motion.div
                key={t.category}
                variants={fadeUpChild}
                className="bg-[#F7F9FC] border border-[#DDE3F0] rounded-2xl p-5 hover:border-[#1A3A8F] hover:shadow-md transition-all duration-300"
              >
                <div className="font-[var(--font-heading)] font-bold text-[.75rem] tracking-[.12em] uppercase text-[#00B4D8] mb-2">
                  {t.category}
                </div>
                <p className="text-[.88rem] text-[#4A5568] leading-[1.65]">
                  {t.items}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
