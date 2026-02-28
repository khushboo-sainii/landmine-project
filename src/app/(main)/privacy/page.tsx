"use client";

import { SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/lib/animations";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#F7F9FC] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,180,216,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-main relative z-10">
          <SectionHeader
            label="LEGAL"
            title={
              <>
                Privacy <span className="text-gradient-brand">Policy</span>
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
              At {SITE_CONFIG.name}, accessible from landminesoft.com, one of
              our main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by {SITE_CONFIG.name} and how we use it.
            </p>
            <p className="mb-10">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us at{" "}
              {SITE_CONFIG.email}.
            </p>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              1. Information We Collect
            </h3>
            <p className="mb-6">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </li>
              <li>
                When you register for an Account or submit a project inquiry, we
                may ask for your contact information, including items such as
                name, company name, address, email address, and telephone
                number.
              </li>
            </ul>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              2. How We Use Your Information
            </h3>
            <p className="mb-4">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails relating to your project or inquiry</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              3. Log Files
            </h3>
            <p className="mb-10">
              {SITE_CONFIG.name} follows a standard procedure of using log
              files. These files log visitors when they visit websites. All
              hosting companies do this and a part of hosting services'
              analytics. The information collected by log files include internet
              protocol (IP) addresses, browser type, Internet Service Provider
              (ISP), date and time stamp, referring/exit pages, and possibly the
              number of clicks. These are not linked to any information that is
              personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users' movement
              on the website, and gathering demographic information.
            </p>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              4. Security of Your Data
            </h3>
            <p className="mb-10">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>

            <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#0D1B3E] mt-8 mb-4">
              5. Changes to This Privacy Policy
            </h3>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mb-10">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <div className="mt-12 p-6 bg-[#F7F9FC] border border-[#DDE3F0] rounded-2xl">
              <h4 className="font-bold text-[#0D1B3E] mb-2 font-[var(--font-heading)]">
                Contact Us
              </h4>
              <p className="text-sm">
                If you have any questions about this Privacy Policy, You can
                contact us:
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
                <li>By mail: {SITE_CONFIG.address}</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
