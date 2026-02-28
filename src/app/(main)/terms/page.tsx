"use client";

import { SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/lib/animations";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#F7F9FC] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,180,216,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-main relative z-10">
          <SectionHeader
            label="LEGAL"
            title={
              <>
                Terms and{" "}
                <span className="text-gradient-brand">Conditions</span>
              </>
            }
            description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          className="container-main max-w-4xl mx-auto"
          variants={fadeUpStagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUpChild}
            className="prose prose-lg text-[#4A5568] max-w-none"
          >
            <p className="mb-6">
              Welcome to {SITE_CONFIG.name}! These terms and conditions outline
              the rules and regulations for the use of {SITE_CONFIG.name}'s
              Website, located at landminesoft.com.
            </p>
            <p className="mb-10">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use {SITE_CONFIG.name} if you do
              not agree to take all of the terms and conditions stated on this
              page.
            </p>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              1. Definitions
            </h3>
            <p className="mb-10">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company’s terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client’s needs in respect of
              provision of the Company’s stated services, in accordance with and
              subject to, prevailing law.
            </p>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              2. License
            </h3>
            <p className="mb-4">
              Unless otherwise stated, {SITE_CONFIG.name} and/or its licensors
              own the intellectual property rights for all material on{" "}
              {SITE_CONFIG.name}. All intellectual property rights are reserved.
              You may access this from {SITE_CONFIG.name} for your own personal
              use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mb-2 font-semibold text-[#0D1B3E]">You must not:</p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Republish material from {SITE_CONFIG.name}</li>
              <li>
                Sell, rent or sub-license material from {SITE_CONFIG.name}
              </li>
              <li>
                Reproduce, duplicate or copy material from {SITE_CONFIG.name}
              </li>
              <li>Redistribute content from {SITE_CONFIG.name}</li>
            </ul>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              3. Client Engagements & Services
            </h3>
            <p className="mb-4">
              Any direct services (software development, design, consulting,
              etc.) provided by {SITE_CONFIG.name} will be governed by a
              separate Service Level Agreement (SLA) or Master Services
              Agreement (MSA) signed by both parties. In the event of a conflict
              between these Terms of Service and an MSA, the valid MSA will take
              precedence.
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>
                Timelines and deliverables are strictly estimates unless
                explicitly stated as fixed in your signed contract.
              </li>
              <li>
                All intellectual property produced under a valid contract will
                remain the property of the Client upon final completion of
                payments, as directed in the project agreement.
              </li>
            </ul>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              4. Disclaimer
            </h3>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p className="mb-10">
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>

            <div className="mt-12 p-6 bg-[#F7F9FC] border border-[#DDE3F0] rounded-2xl">
              <h4 className="font-bold text-[#0D1B3E] mb-2 font-[var(--font-heading)]">
                Contact Us
              </h4>
              <p className="text-sm">
                If you have any questions about these Terms, You can contact us:
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm flex flex-col gap-2">
                <li>
                  By email:{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#00B4D8] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  By phone number:{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[#00B4D8] hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
