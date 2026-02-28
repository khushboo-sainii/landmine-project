"use client";

import { useState } from "react";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
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
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,216,.05) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* orb */}
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

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-[2px] font-[var(--font-heading)] font-extrabold text-[1.35rem] text-white"
        >
          {SITE_CONFIG.name}
          <span className="text-[#00B4D8]">.</span>
        </Link>

        {/* Quote */}
        <div className="relative z-10">
          <p className="font-[var(--font-heading)] font-bold text-white text-[1.6rem] leading-[1.4] mb-4">
            "We don't just build software.
            <br />
            We remove obstacles."
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg,#0A2463,#00B4D8)" }}
            >
              LM
            </div>
            <div>
              <div className="text-white text-[.85rem] font-semibold">
                {SITE_CONFIG.name}
              </div>
              <div className="text-white/50 text-[.75rem]">
                Technology Partner
              </div>
            </div>
          </div>
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
          {/* Mobile logo */}
          <Link
            href="/"
            className="lg:hidden flex items-center gap-[2px] font-[var(--font-heading)] font-extrabold text-[1.35rem] text-[#0A2463] mb-8"
          >
            {SITE_CONFIG.name}
            <span className="text-[#00B4D8]">.</span>
          </Link>

          <h1 className="font-[var(--font-heading)] font-bold text-[1.9rem] text-[#0D1B3E] mb-1">
            Welcome back
          </h1>
          <p className="text-[.9rem] text-[#718096] mb-8">
            Sign in to your account to continue
          </p>

          <div className="flex flex-col gap-4">
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={change}
            />
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[.82rem] font-semibold text-[#0D1B3E]">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[.78rem] font-semibold text-[#00B4D8] hover:text-[#0A2463] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={change}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-[#DDE3F0] rounded-xl text-[.88rem] text-[#4A5568] focus:outline-none focus:border-[#00B4D8] transition-colors"
              />
            </div>

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
              Sign In
            </button>
          </div>

          <p className="text-center text-[.85rem] text-[#718096] mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#00B4D8] hover:text-[#0A2463] transition-colors"
            >
              Create one
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
