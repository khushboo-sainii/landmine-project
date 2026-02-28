"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  ABOUT_HERO,
  ABOUT_STORY,
  MISSION_VISION,
  CORE_VALUES,
  TEAM,
  DIFFERENTIATORS,
  COMPANY_FACTS,
  CULTURE_ITEMS,
  STATS,
  CTA_CONTENT,
  SITE_CONFIG,
} from "@/lib/constants";
import { fadeUp, fadeUpStagger, fadeUpChild } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimateCard";
import StatsSection from "@/components/ui/StatsSection";

export default function AboutPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero/about-hero.avif"
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
            className="max-w-[700px]"
          >
            <motion.span
              variants={fadeUpChild}
              className="inline-block text-[.72rem] font-extrabold tracking-[0.15em] uppercase text-[#00B4D8] mb-2 drop-shadow-md"
            >
              {ABOUT_HERO.label}
            </motion.span>
            <motion.h1
              variants={fadeUpChild}
              className="font-[var(--font-heading)] font-extrabold text-white mt-2 mb-5 leading-[1.08] drop-shadow-xl text-[clamp(2.6rem,5vw,4rem)]"
            >
              {ABOUT_HERO.title}{" "}
              <span className="text-gradient-white drop-shadow-md">
                {ABOUT_HERO.titleAccent}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpChild}
              className="text-[1.125rem] leading-[1.6] max-w-[660px] text-white/90 mb-8 drop-shadow-md"
            >
              {ABOUT_HERO.description}
            </motion.p>
            <motion.div variants={fadeUpChild} className="flex gap-4 flex-wrap">
              <a
                href="#team"
                className="btn-primary bg-white text-[#0A2463] border border-white hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white transition-all duration-300"
              >
                {ABOUT_HERO.cta1} <ArrowRight size={15} />
              </a>
              <Link
                href="/work"
                className="btn-outline border border-white/40 text-white hover:border-[#00B4D8] hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 transition-all duration-300"
              >
                {ABOUT_HERO.cta2}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <StatsSection stats={STATS} dark={true} />

      {/* ══ STORY ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="section-label">{ABOUT_STORY.label}</span>
              <h2 className="section-title mt-1 mb-4">{ABOUT_STORY.title}</h2>
              <span className="section-bar ml-0" />
              <div className="flex flex-col gap-4 mt-2">
                {ABOUT_STORY.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[#4A5568] text-[0.95rem] leading-[1.8]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
            {/* right: bento facts */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {COMPANY_FACTS.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={fadeUpChild}
                  className="bg-[#F7F9FC] border border-[#DDE3F0] rounded-2xl p-5 hover:border-[#1A3A8F] hover:shadow-md transition-all duration-300"
                >
                  <div className="text-[.72rem] font-bold tracking-[.12em] uppercase text-[#00B4D8] mb-1">
                    {fact.label}
                  </div>
                  <div className="font-[var(--font-heading)] font-bold text-[.95rem] text-[#0D1B3E] leading-[1.4]">
                    {fact.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="WHAT DRIVES US"
            title={
              <>
                Mission & <span className="text-gradient-brand">Vision</span>
              </>
            }
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {MISSION_VISION.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpChild}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 36px rgba(10,36,99,.12)",
                }}
                transition={{ duration: 0.25 }}
                className="card p-8"
              >
                <div
                  className="icon-box text-3xl mb-4"
                  style={{ background: item.accentBg }}
                >
                  {item.icon}
                </div>
                <span className="section-label mb-2">{item.label}</span>
                <h3 className="font-[var(--font-heading)] font-bold text-[1.2rem] text-[#0D1B3E] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-[0.95rem] leading-[1.8]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label="CORE VALUES"
            title={
              <>
                The Principles{" "}
                <span className="text-gradient-brand">We Work By</span>
              </>
            }
            description="What we believe in — and how those beliefs show up in every project we take on."
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {CORE_VALUES.map((v) => (
              <AnimatedCard key={v.title}>
                <div className="icon-box bg-[#EBF0FF] text-2xl">{v.icon}</div>
                <h3 className="font-[var(--font-heading)] font-bold text-[1rem] text-[#0D1B3E] mb-2">
                  {v.title}
                </h3>
                <p className="text-[.87rem] text-[#4A5568] leading-[1.7]">
                  {v.desc}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section id="team" className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="OUR LEADERSHIP"
            title={
              <>
                The Minds Behind{" "}
                <span className="text-gradient-brand">the Machine</span>
              </>
            }
            description="Engineers, designers, product thinkers, and problem-solvers — brought together by a shared obsession with great software."
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {TEAM.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeUpChild}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(10,36,99,.13)",
                }}
                transition={{ duration: 0.25 }}
                className="card p-0 overflow-hidden text-center"
              >
                <div className="relative h-[200px] bg-gradient-to-br from-[#0A2463] to-[#00B4D8]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-heading)] font-bold text-[1rem] text-[#0D1B3E]">
                    {member.name}
                  </h3>
                  <p className="text-[.82rem] text-[#718096] mt-1">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-1 mt-3 text-[.78rem] font-semibold text-[#00B4D8] hover:text-[#0A2463] transition-colors"
                  >
                    LinkedIn <ArrowRight size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ DIFFERENTIATORS ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label="WHY US"
            title={
              <>
                Landminesoft{" "}
                <span className="text-gradient-brand">vs The Rest</span>
              </>
            }
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {DIFFERENTIATORS.map((d) => (
              <motion.div
                key={d.feature}
                variants={fadeUpChild}
                whileHover={{
                  y: -4,
                  borderColor: "#1A3A8F",
                  boxShadow: "0 12px 28px rgba(10,36,99,.10)",
                }}
                transition={{ duration: 0.25 }}
                className="flex gap-4 p-5 bg-[#F7F9FC] border border-[#DDE3F0] rounded-2xl"
              >
                <span className="text-[#00B4D8] font-bold text-lg mt-[2px] shrink-0">
                  ✓
                </span>
                <div>
                  <div className="font-[var(--font-heading)] font-bold text-[.95rem] text-[#0D1B3E]">
                    {d.feature}
                  </div>
                  <div className="text-[.82rem] text-[#718096] mt-1 leading-[1.55]">
                    {d.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CULTURE ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="OUR CULTURE"
            title={
              <>
                Life at{" "}
                <span className="text-gradient-brand">{SITE_CONFIG.name}</span>
              </>
            }
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {CULTURE_ITEMS.map((item) => (
              <AnimatedCard key={item.title} padding="p-6">
                <div className="icon-box bg-[#EBF0FF] text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-[.95rem] text-[#0D1B3E] mb-2">
                  {item.title}
                </h3>
                <p className="text-[.83rem] text-[#4A5568] leading-[1.65]">
                  {item.desc}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
