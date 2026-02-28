"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  SITE_CONFIG,
  STATS,
  SERVICES_WITH_ICONS,
  SERVICE_SECTION_CONTENT,
  PROJECTS,
  WHY_ITEMS,
  TESTIMONIALS,
  CTA_CONTENT,
  TESTIMONIALS_DESCRIPTION,
  WHY_SECTION_CONTENT,
  FEATURED_SECTION_CONTENT,
} from "@/lib/constants";
import { fadeUp, fadeUpStagger, fadeUpChild } from "@/lib/animations";

import SectionHeader from "@/components/ui/SectionHeader";
import StatsSection from "@/components/ui/StatsSection";
import AnimatedCard from "@/components/ui/AnimateCard";
import TestiCard from "@/components/ui/TestiCard";

// ===============================HOME PAGE===================================
export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* <!-- Background Video --> */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero/home-hero.mp4" type="video/mp4" />
        </video>

        {/* <!-- Dark Overlay --> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* <!-- Content --> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gray-300">Reinvent</span>
            <br />
            <span className="text-cyan-400">What's</span>
            <br />
            <span className="text-white">Possible</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg">
            Building intelligent digital solutions for tomorrow.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/signup" className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition inline-block">
              Get Started                     
            </Link>
            <Link href="/about" className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <StatsSection stats={STATS} dark={true} />

      {/* ══ SERVICES ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label={SERVICE_SECTION_CONTENT.label}
            title={SERVICE_SECTION_CONTENT.title}
            description={SERVICE_SECTION_CONTENT.description}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SERVICES_WITH_ICONS.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={service.id} padding="p-7">
                  <div
                    className="icon-box"
                    style={{ background: service.iconBg }}
                  >
                    <Icon
                      size={22}
                      color={service.iconColor}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-[1.1rem] text-[#0D1B3E] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-[1.7]">
                    {service.description}
                  </p>
                  <Link href="/services" className="flex items-center gap-1 mt-5 text-[#00B4D8] text-[0.85rem] font-semibold transition-colors hover:text-[#0A2463]">
                    Learn More <ArrowRight size={13} />
                  </Link>
                </AnimatedCard>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURED WORK ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label={FEATURED_SECTION_CONTENT.label}
            title={FEATURED_SECTION_CONTENT.title}
            description={FEATURED_SECTION_CONTENT.description}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="/work" className="btn-outline">
              View All Case Studies <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="section-label">{WHY_SECTION_CONTENT.label}</span>
              <h2 className="section-title">
                {WHY_SECTION_CONTENT.title}
                <br />
                <span className="text-gradient-brand">
                  Choose {SITE_CONFIG.name}
                </span>
              </h2>
              <span className="section-bar ml-0" />
              <p className="section-description ml-0">
                {WHY_SECTION_CONTENT.description}
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  About Us <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {WHY_ITEMS.map((item) => (
                <AnimatedCard
                  key={item.title}
                  useTopBar={false}
                  padding="p-6"
                  className="hover:border-[#1A3A8F]"
                >
                  <div className="icon-box bg-[#EBF0FF] text-[1.4rem] w-12 h-12">
                    {item.icon}
                  </div>
                  <h4 className="text-[0.95rem] text-[#0D1B3E] mb-[0.4rem]">
                    {item.title}
                  </h4>
                  <p className="text-[0.82rem] text-[#4A5568] leading-[1.65]">
                    {item.desc}
                  </p>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <SectionHeader
            label={TESTIMONIALS_DESCRIPTION.label}
            title={TESTIMONIALS_DESCRIPTION.title}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {TESTIMONIALS.map((t) => (
              <TestiCard
                key={t.initials}
                quote={t.quote}
                author={t.author}
                company={t.company}
                initials={t.initials}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-[#0A2463] via-[#1A3A8F] to-[#00B4D8]">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute pointer-events-none rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,180,216,.08)_0%,transparent_70%)]" />

        <motion.div
          className="section-center pt-0 pb-0 relative z-10 max-w-[640px] mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label text-[rgba(202,240,248,0.7)]">
            Let's Build Together
          </span>
          <h2 className="section-title text-white">
            {CTA_CONTENT.title1}
            <br />
            {CTA_CONTENT.title2}
          </h2>
          <span className="section-bar" />
          <p className="section-description text-white/60">
            {CTA_CONTENT.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              href={CTA_CONTENT.ctaLink1}
              className="btn-primary bg-[#00B4D8] text-white border border-[#00B4D8] text-base py-[0.85rem] px-8 transition-all duration-200 ease-in-out hover:bg-[#0096C7] hover:border-[#0096C7] hover:-translate-y-[2px]"
            >
              {CTA_CONTENT.ctaText1} <ArrowRight size={17} />
            </Link>
            <Link
              href={CTA_CONTENT.ctaLink2}
              className="btn-outline border border-white/35 text-white text-base py-[0.85rem] px-8 transition-all duration-200 ease-in-out hover:border-[#00B4D8] hover:text-[#00B4D8] hover:bg-[#00B4D8]/10"
            >
              {CTA_CONTENT.ctaText2} <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
