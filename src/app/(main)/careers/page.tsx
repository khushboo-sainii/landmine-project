"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users } from "lucide-react";
import {
  SITE_CONFIG,
  CAREERS_HERO,
  WHY_JOIN_CONTENT,
  WHY_JOIN_ITEMS,
  HIRING_STEPS,
  OPEN_ROLES,
  DEPT_BADGE,
  MARQUEE_SKILLS,
  STATS,
} from "@/lib/constants";
import { fadeUp, fadeUpStagger, fadeUpChild } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimateCard";
import StatsSection from "@/components/ui/StatsSection";
import Link from "next/link";

// ========================== CAREERS PAGE ========================================
export default function CareersPage() {
  const [activeFilter, setFilter] = useState("All Roles");

  const filteredRoles = OPEN_ROLES.filter((r) => {
    if (activeFilter === "All Roles") return true;
    if (activeFilter === "Internships") return r.dept === "Internship";
    return r.dept === activeFilter;
  });

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/career/team-collab.jpg"
            alt="background"
            fill
            priority
            className="object-cover blur-[4px] scale-105"
          />
        </div>

        <div className="container-main w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 relative z-10">
          {/* left */}
          <motion.div variants={fadeUpStagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUpChild}
              className="flex items-center gap-3 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-[#00B4D8]" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00B4D8]" />
              </span>
              <span className="inline-block text-[.72rem] font-extrabold tracking-[0.15em] uppercase text-[#00B4D8] drop-shadow-md relative top-[1px]">
                {CAREERS_HERO.label}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpChild}
              className="font-[var(--font-heading)] font-extrabold text-white leading-[1.08] mb-6 drop-shadow-xl text-[clamp(2.4rem,4.5vw,3.8rem)]"
            >
              {CAREERS_HERO.title}
              <br />
              <span className="text-gradient-white drop-shadow-md">
                {CAREERS_HERO.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpChild}
              className="text-[1.125rem] leading-[1.6] max-w-[600px] text-white/90 mb-8 drop-shadow-md"
            >
              {CAREERS_HERO.description}
            </motion.p>

            <motion.div variants={fadeUpChild} className="flex gap-4 flex-wrap">
              <a
                href="#roles"
                className="btn-primary bg-white text-[#0A2463] border border-white hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white transition-all duration-300"
              >
                <Search size={15} /> {CAREERS_HERO.cta1}
              </a>
              <a
                href="#culture"
                className="btn-outline border border-white/40 text-white hover:border-[#00B4D8] hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 transition-all duration-300"
              >
                <Users size={15} /> {CAREERS_HERO.cta2}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <div
            className="w-[22px] h-[34px] rounded-full flex justify-center pt-[6px]"
            style={{ border: "2px solid rgba(255,255,255,.2)" }}
          >
            <div
              className="w-[3px] h-[7px] rounded-full"
              style={{ background: "#00B4D8" }}
            />
          </div>
          <span className="text-[.72rem] font-bold tracking-[.1em] uppercase text-white/35">
            Scroll
          </span>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div
        className="w-full overflow-hidden py-4"
        style={{ background: "linear-gradient(135deg, #0A2463, #00B4D8)" }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-[.78rem] font-bold tracking-[.1em] uppercase text-white/75"
            >
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 bg-[#00B4D8]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ STATS ══ */}
      <StatsSection stats={STATS} dark={true} />

      {/* ══ WHY JOIN ══ */}
      <section id="culture" className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label={WHY_JOIN_CONTENT.label}
            title={
              <>
                {WHY_JOIN_CONTENT.title}
                <br />
                <span className="text-gradient-brand">
                  {WHY_JOIN_CONTENT.titleAccent}
                </span>
              </>
            }
            description={WHY_JOIN_CONTENT.description}
            centered={false}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {WHY_JOIN_ITEMS.map((card) => (
              <AnimatedCard key={card.title}>
                <div className="icon-box bg-[#EBF0FF] text-[1.6rem]">
                  {card.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-[1.05rem] font-bold text-[#0D1B3E] mb-2">
                  {card.title}
                </h3>
                <p className="text-[.88rem] text-[#4A5568] leading-[1.7]">
                  {card.desc}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ LIFE AT — BENTO ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label={`Life at ${SITE_CONFIG.name}`}
            title={
              <>
                Real Teams.{" "}
                <span className="text-gradient-brand">Real Moments.</span>
              </>
            }
          />
          <div className="grid grid-cols-12 gap-4">
            <BentoImg
              className="col-span-12 md:col-span-5 h-[300px]"
              src="/career/team-collab.jpg"
              title="Deep Work Sessions"
              desc="Focused collaboration, zero interruptions"
              sizes="(max-width: 768px) 100vw, 42vw"
            />

            <BentoImg
              className="col-span-12 md:col-span-4 h-[300px]"
              src="/career/devs-working.jpg"
              title="Building Together"
              desc="Code reviews, pair programming, shared flow"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <BentoImg
              className="col-span-12 md:col-span-3 h-[300px]"
              src="/career/team-unity.jpg"
              title="We Celebrate Wins"
              desc="Every launch. Every milestone."
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div
              className="col-span-12 md:col-span-7 min-h-[200px] rounded-2xl flex items-center justify-center p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #060F2E, #0A2463)",
              }}
            >
              <div>
                <div className="text-3xl mb-3">💡</div>
                <p className="font-[var(--font-heading)] font-bold text-white leading-[1.5] text-[1.1rem]">
                  "The best thing about Landminesoft is the ownership. I shipped
                  my first feature in week one."
                </p>
                <p className="mt-3 text-[.78rem] text-white/60">
                  — Rahul M., Full Stack Developer
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 min-h-[200px] rounded-2xl flex items-center justify-center p-8 bg-[#EBF0FF]">
              <div className="text-center">
                <span className="badge mb-3">🌱 Culture First</span>
                <h3 className="font-[var(--font-heading)] font-bold text-[#0A2463] text-[1rem] mb-2">
                  Meritocracy, Not Hierarchy
                </h3>
                <p className="section-description text-[.85rem]">
                  The best ideas win — regardless of title. Open feedback.
                  Direct communication. Intellectual honesty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="Our Hiring Process"
            title={
              <>
                Simple. Transparent.{" "}
                <span className="text-gradient-brand">Fast.</span>
              </>
            }
            description="We respect your time. Here's exactly what to expect — no surprises."
          />
          <div className="relative grid grid-cols-1 md:grid-cols-5">
            <div
              className="hidden md:block absolute top-9 left-[10%] right-[10%] h-[2px]"
              style={{
                background: "linear-gradient(90deg, #DDE3F0, #00B4D8, #DDE3F0)",
              }}
            />
            {HIRING_STEPS.map((s) => (
              <ProcessStep key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPEN ROLES ══ */}
      <section id="roles" className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label="Open Positions"
            title={
              <>
                Find Your{" "}
                <span className="text-gradient-brand">Perfect Role</span>
              </>
            }
            description="We're growing fast. Here's where you fit in."
            centered={false}
          />

          <motion.div
            className="flex flex-col gap-3"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {filteredRoles.map((r) => (
              <RoleCard key={r.title} {...r} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        className="relative w-full py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A2463 0%, #1A3A8F 50%, #00B4D8 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="container-main text-center relative z-10 max-w-[680px] mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label text-[rgba(202,240,248,0.7)]">
            Don't See Your Role?
          </span>
          <h2 className="section-title text-white mt-1">
            We're Always Looking for Exceptional People
          </h2>
          <span className="section-bar" />
          <p className="section-description text-white/80">
            Send your resume and tell us what you're great at. If you're the
            right fit, we'll build a role around you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a
              href={`mailto:${SITE_CONFIG.careersEmail}`}
              className="btn-primary bg-white text-[#0A2463] border border-white hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white transition-all duration-300"
            >
              Email Your Resume <ArrowRight size={15} />
            </a>
            <a
              href="#roles"
              className="btn-outline border border-white/40 text-white hover:border-[#00B4D8] hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 transition-all duration-300"
            >
              View All Open Roles <ArrowRight size={15} />
            </a>
          </div>
          <p className="mt-5 text-[.82rem] text-white/40">
            📧 {SITE_CONFIG.careersEmail} · We respond within 24 hours
          </p>
        </motion.div>
      </section>
    </>
  );
}

// ==================== SUB-COMPONENTS ====================================

function BentoImg({
  className,
  src,
  title,
  desc,
  sizes,
}: {
  className: string;
  src: string;
  title: string;
  desc: string;
  sizes?: string;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(6,15,46,.7), transparent)",
        }}
      />
      <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h4 className="font-[var(--font-heading)] font-bold text-white text-[1rem]">
          {title}
        </h4>
        <p className="text-[.78rem] text-white/80 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function ProcessStep({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUpChild}
      className="text-center px-4 relative z-10"
    >
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 cursor-default font-[var(--font-heading)] font-extrabold text-[1.2rem] text-[#0A2463] bg-white border-2 border-[#DDE3F0] transition-all duration-300 hover:bg-[#0A2463] hover:text-white hover:scale-110"
        style={{ boxShadow: "0 4px 12px rgba(10,36,99,.08)" }}
      >
        {num}
      </div>
      <h4 className="font-[var(--font-heading)] font-bold text-[.95rem] text-[#0D1B3E] mb-2">
        {title}
      </h4>
      <p className="text-[.8rem] text-[#718096] leading-[1.6]">{desc}</p>
    </motion.div>
  );
}

function RoleCard({
  title,
  location,
  exp,
  type,
  dept,
}: {
  title: string;
  location: string;
  exp: string;
  type: string;
  dept: string;
}) {
  const badge = DEPT_BADGE[dept];
  return (
    <motion.div
      variants={fadeUpChild}
      className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 overflow-hidden bg-white border-[1.5px] border-[#DDE3F0] rounded-[14px] px-8 py-6 transition-all duration-300 hover:border-[#1A3A8F] hover:shadow-[0_8px_24px_rgba(10,36,99,.10)] hover:translate-x-1"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[14px] bg-gradient-to-b from-[#00B4D8] to-[#0A2463] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
      <div>
        <h3 className="font-[var(--font-heading)] font-bold text-[1.05rem] text-[#0D1B3E] mb-2">
          {title}
        </h3>
        <div className="flex gap-5 flex-wrap">
          {[
            ["📍", location],
            ["⏱", exp],
            ["💼", type],
          ].map(([ico, val]) => (
            <span
              key={val}
              className="flex items-center gap-1 text-[.75rem] font-semibold text-[#718096]"
            >
              {ico} {val}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span
          className="px-3 py-1 rounded-full text-[.72rem] font-bold tracking-[.08em] uppercase"
          style={{
            background: badge.bg,
            color: badge.color,
            border: `1px solid ${badge.border}`,
          }}
        >
          {dept}
        </span>
        <Link
          href="/contact"
          className="btn-primary text-[.85rem] py-2 px-5 rounded-lg bg-[#0A2463] text-white border border-[#0A2463] hover:bg-[#00B4D8] hover:border-[#00B4D8] transition-colors duration-200"
        >
          Apply Now →
        </Link>
      </div>
    </motion.div>
  );
}
