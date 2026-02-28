"use client";

import { useState } from "react";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* ── Left panel ── */}
      <div
        className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #060F2E 0%, #0A2463 60%, #0D2E7A 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.05) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            bottom: -80,
            right: -80,
            background:
              "radial-gradient(circle, rgba(0,180,216,.18) 0%, transparent 70%)",
          }}
        />

        <Link
          href="/"
          className="relative z-10 flex items-center gap-[2px] font-[var(--font-heading)] font-extrabold text-[1.35rem] text-white"
        >
          {SITE_CONFIG.name}
          <span className="text-[#00B4D8]">.</span>
        </Link>

        {/* Perks */}
        <div className="relative z-10 flex flex-col gap-4">
          <p className="font-[var(--font-heading)] font-bold text-white text-[1.3rem] mb-2">
            Join a team that builds things that matter.
          </p>
          {[
            "Ship real features from Week 1",
            "Work with clients across India, US & UAE",
            "Structured growth — Junior to Lead",
          ].map((perk) => (
            <div key={perk} className="flex items-center gap-3">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[.65rem] font-bold text-white shrink-0"
                style={{ background: "#00B4D8" }}
              >
                ✓
              </span>
              <span className="text-white/75 text-[.88rem]">{perk}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex items-center justify-center p-6 bg-[#F7F9FC]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="w-full max-w-[420px]"
        >
          <Link
            href="/"
            className="lg:hidden flex items-center gap-[2px] font-[var(--font-heading)] font-extrabold text-[1.35rem] text-[#0A2463] mb-8"
          >
            {SITE_CONFIG.name}
            <span className="text-[#00B4D8]">.</span>
          </Link>

          <h1 className="font-[var(--font-heading)] font-bold text-[1.9rem] text-[#0D1B3E] mb-1">
            Create your account
          </h1>
          <p className="text-[.9rem] text-[#718096] mb-8">
            Get started — it only takes a minute
          </p>

          <div className="flex flex-col gap-4">
            <Field
              label="Full Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={change}
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={change}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={change}
            />
            <Field
              label="Confirm Password"
              name="confirm"
              type="password"
              placeholder="Re-enter password"
              value={form.confirm}
              onChange={change}
            />

            <button
              className="btn-primary w-full justify-center py-3 text-[.95rem] mt-1"
              style={{ background: "#0A2463" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#00B4D8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0A2463")
              }
            >
              Create Account
            </button>

            <p className="text-center text-[.75rem] text-[#718096]">
              By signing up you agree to our{" "}
              <Link href="/terms" className="text-[#00B4D8] hover:underline">
                Terms
              </Link>
              {" & "}
              <Link href="/privacy" className="text-[#00B4D8] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          <p className="text-center text-[.85rem] text-[#718096] mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#00B4D8] hover:text-[#0A2463] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        className="w-full px-4 py-3 bg-white border border-[#DDE3F0] rounded-xl text-[.88rem] text-[#4A5568] focus:outline-none focus:border-[#00B4D8] transition-colors"
      />
    </div>
  );
}
