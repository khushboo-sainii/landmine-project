"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import {
  CONTACT_HERO,
  CONTACT_INFO,
  RESPONSE_TIMES,
  CONTACT_FAQ,
  CONTACT_FORM_OPTIONS,
  SITE_CONFIG,
} from "@/lib/constants";
import { fadeUp, fadeUpStagger, fadeUpChild } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
    source: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    // Validation
    const currentErrors: Record<string, string> = {};
    if (!form.name.trim()) currentErrors.name = "Name is required";
    if (!form.email.trim()) {
      currentErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      currentErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) currentErrors.message = "Message is required";

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#060F2E]">
        {/* Background Image Setup */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[4px] scale-105 opacity-80"
          style={{ backgroundImage: "url('/hero/contact-hero.jpg')" }}
        />
        <div className="container-main relative z-10 py-24">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            animate="show"
            className="max-w-[640px]"
          >
            <motion.span
              variants={fadeUpChild}
              className="inline-block text-[.72rem] font-extrabold tracking-[0.15em] uppercase text-[#00B4D8] mb-2 drop-shadow-md"
            >
              {CONTACT_HERO.label}
            </motion.span>
            <motion.h1
              variants={fadeUpChild}
              className="font-[var(--font-heading)] font-extrabold text-white mt-2 mb-4 leading-[1.08] drop-shadow-xl text-[clamp(2.4rem,4.5vw,3.8rem)]"
            >
              {CONTACT_HERO.title}
              <span className="block text-gradient-white drop-shadow-md">
                {CONTACT_HERO.titleAccent}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpChild}
              className="text-[1.125rem] leading-[1.6] max-w-[600px] text-white/90 drop-shadow-md"
            >
              {CONTACT_HERO.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT INFO CARDS ══ */}
      <section className="w-full py-12 bg-[#F7F9FC]">
        <div className="container-main">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CONTACT_INFO.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeUpChild}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 36px rgba(10,36,99,.12)",
                  borderColor: "#1A3A8F",
                }}
                transition={{ duration: 0.25 }}
                className="card p-6"
              >
                <div className="text-2xl mb-3">{info.icon}</div>
                <h3 className="font-[var(--font-heading)] font-bold text-[.85rem] text-[#0D1B3E] mb-2">
                  {info.label}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-[.83rem] text-[#4A5568]">
                    {line}
                  </p>
                ))}
                <a
                  href={info.link}
                  className="inline-flex items-center gap-1 mt-3 text-[.78rem] font-semibold text-[#00B4D8] hover:text-[#0A2463] transition-colors"
                >
                  {info.linkText}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FORM + RESPONSE TIMES ══ */}
      <section className="w-full py-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <span className="section-label">SEND A MESSAGE</span>
              <h2
                className="section-title mt-1 mb-1"
                style={{ textAlign: "left" }}
              >
                Tell Us About Your Project
              </h2>
              <span className="section-bar ml-0" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-8 bg-[#E6F7F3] border border-[#00A878] rounded-2xl text-center"
                >
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-[var(--font-heading)] font-bold text-[1.1rem] text-[#0D1B3E] mb-2">
                    Message Received!
                  </h3>
                  <p className="text-[.9rem] text-[#4A5568]">
                    Thank you! We've received your message and will get back to
                    you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name *"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <FormField
                      label="Email Address *"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Company / Organization"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[.82rem] font-semibold text-[#0D1B3E] mb-1">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiry"
                        value={form.inquiry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F7F9FC] border border-[#DDE3F0] rounded-xl text-[.88rem] text-[#4A5568] focus:outline-none focus:border-[#00B4D8] transition-colors"
                      >
                        <option value="">Select inquiry type</option>
                        {CONTACT_FORM_OPTIONS.inquiryTypes.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[.82rem] font-semibold text-[#0D1B3E] mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        name="source"
                        value={form.source}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F7F9FC] border border-[#DDE3F0] rounded-xl text-[.88rem] text-[#4A5568] focus:outline-none focus:border-[#00B4D8] transition-colors"
                      >
                        <option value="">Select a source</option>
                        {CONTACT_FORM_OPTIONS.referralSources.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[.82rem] font-semibold text-[#0D1B3E] mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or question..."
                      className={`w-full px-4 py-3 bg-[#F7F9FC] border ${errors.message ? "border-red-500" : "border-[#DDE3F0]"} rounded-xl text-[.88rem] text-[#4A5568] resize-none focus:outline-none focus:border-[#00B4D8] transition-colors`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn-primary self-start text-base py-[.85rem] px-8 bg-[#0A2463] text-white border border-[#0A2463] hover:bg-[#00B4D8] hover:border-[#00B4D8] transition-colors duration-200"
                  >
                    Send Message → <Send size={15} />
                  </button>
                </div>
              )}
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              className="flex flex-col gap-6"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Response times */}
              <motion.div variants={fadeUpChild} className="card p-6">
                <h3 className="font-[var(--font-heading)] font-bold text-[1rem] text-[#0D1B3E] mb-4">
                  Our Promise to You
                </h3>
                <div className="flex flex-col gap-3">
                  {RESPONSE_TIMES.map((rt) => (
                    <div key={rt.channel} className="flex flex-col gap-[2px]">
                      <span className="text-[.8rem] font-semibold text-[#0D1B3E]">
                        {rt.channel}
                      </span>
                      <span className="text-[.78rem] text-[#718096]">
                        {rt.time}
                      </span>
                      <div className="w-full h-[1px] bg-[#EEF1F8] mt-2" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUpChild} className="card p-6">
                <h3 className="font-[var(--font-heading)] font-bold text-[1rem] text-[#0D1B3E] mb-4">
                  Find Us Online
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "LinkedIn",
                      href: SITE_CONFIG.linkedin,
                      icon: "💼",
                    },
                    {
                      label: "Twitter / X",
                      href: SITE_CONFIG.twitter,
                      icon: "🐦",
                    },
                    { label: "GitHub", href: SITE_CONFIG.github, icon: "⚙️" },
                    {
                      label: "Instagram",
                      href: SITE_CONFIG.instagram,
                      icon: "📸",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[.85rem] text-[#4A5568] hover:text-[#00B4D8] transition-colors"
                    >
                      <span>{s.icon}</span> {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="w-full py-20 bg-[#F7F9FC]">
        <div className="container-main">
          <SectionHeader
            label="FAQ"
            title={
              <>
                Common <span className="text-gradient-brand">Questions</span>
              </>
            }
            description="Quick answers to the things people ask us most."
          />
          <motion.div
            className="max-w-[720px] mx-auto flex flex-col gap-3"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {CONTACT_FAQ.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUpChild}
                className="card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-[var(--font-heading)] font-bold text-[.95rem] text-[#0D1B3E]">
                    {faq.q}
                  </span>
                  <span
                    className="text-[#00B4D8] text-xl shrink-0 ml-3 transition-transform duration-300"
                    style={{
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5 text-[.88rem] text-[#4A5568] leading-[1.75] border-t border-[#EEF1F8] pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-[#0A2463] via-[#1A3A8F] to-[#00B4D8]">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          className="container-main text-center relative z-10 max-w-[620px] mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label text-white/60">
            Still Have Questions?
          </span>
          <h2 className="section-title text-white mt-1">
            Our Team is Happy to Jump on a Call
          </h2>
          <span className="section-bar" />
          <p className="section-description text-white/60">
            No commitment required. Just a conversation to understand your
            needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="btn-primary bg-[#00B4D8] text-white border-[#00B4D8] text-base py-[.85rem] px-8 hover:bg-[#0096C7]"
            >
              Schedule a Free Call <ArrowRight size={17} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="btn-outline border-white/35 text-white text-base py-[.85rem] px-8 hover:border-[#00B4D8] hover:text-[#00B4D8]"
            >
              Send Us an Email
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

// ─── Form Field Component ─────────────────────────────────────────────────────
function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[.82rem] font-semibold text-[#0D1B3E] mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
       className={`w-full px-4 py-3 bg-[#F7F9FC] border ${
  error ? "border-red-500" : "border-[#DDE3F0]"
} rounded-xl text-[.88rem] text-[#4A5568] focus:outline-none focus:border-[#00B4D8] transition-colors`}
      />
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
    </div>
  );
}
