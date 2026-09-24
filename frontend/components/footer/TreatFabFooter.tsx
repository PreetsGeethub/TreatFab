"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const FOREST = "#0B3D24";
const FOREST_DEEP = "#062718";
const GOLD = "#C6972F";
const CREAM = "#F7F5EE";

const productLinks = [
  { label: "Pre-Treatment", href: "#products" },
  { label: "Dyeing", href: "#products" },
  { label: "Denim", href: "#products" },
  { label: "Sizing & Finishing", href: "#products" },
];

const companyLinks = [
  { label: "About Treatfab", href: "#why" },
  { label: "Our Brands", href: "#brands" },
  { label: "Quality", href: "#quality" },
  { label: "Sustainability", href: "#commitment" },
];

const processLinks = [
  { label: "Process Stages", href: "#process" },
  { label: "Product Range", href: "#products" },
  { label: "Why Treatfab", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: FOREST_DEEP, color: CREAM }}
    >
      {/* Atmospheric textile / molecule background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-[12%] -top-[8%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "rgba(44, 105, 67, 0.28)" }}
        />
        <div
          className="absolute -bottom-[20%] -left-[12%] h-[560px] w-[560px] rounded-full blur-3xl"
          style={{ background: "rgba(198, 151, 47, 0.08)" }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.075]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="footer-grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path
                d="M23 2L42 13V35L23 46L4 35V13L23 2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <circle cx="23" cy="2" r="1.5" fill="currentColor" />
              <circle cx="42" cy="13" r="1.5" fill="currentColor" />
              <circle cx="4" cy="13" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#footer-grid)" />
        </svg>

        {/* Gold-green ribbon — brand motif */}
        <motion.svg
          className="absolute -bottom-4 left-[-8%] w-[116%] opacity-60"
          viewBox="0 0 1400 250"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <path
            d="M-40 176C130 45 260 45 400 148C540 251 650 258 785 132C920 6 1045 8 1170 105C1260 175 1340 188 1440 110"
            stroke={GOLD}
            strokeWidth="2"
          />
          <path
            d="M-40 193C130 62 260 62 400 165C540 268 650 275 785 149C920 23 1045 25 1170 122C1260 192 1340 205 1440 127"
            stroke="#4B8A63"
            strokeWidth="1"
          />
        </motion.svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Big closing statement */}
        <div className="border-b border-white/10 py-20 md:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="h-[7px] w-[7px] rotate-45"
                  style={{ backgroundColor: GOLD }}
                />
                <span
                  className="text-[0.7rem] font-medium uppercase tracking-[0.22em]"
                  style={{ color: "rgba(247,245,238,0.65)" }}
                >
                  Treatfab Chemicals Pvt. Ltd.
                </span>
              </div>

              <h2
                className="max-w-[900px] text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
                style={{ color: CREAM }}
              >
                Chemistry for a
                <br />
                <span style={{ color: GOLD }}>cleaner tomorrow.</span>
              </h2>

              <p
                className="mt-8 max-w-[570px] text-[1rem] leading-7"
                style={{ color: "rgba(247,245,238,0.66)" }}
              >
                Textile chemistry built around performance, consistency and a
                more considered approach to water, energy and environmental load.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-fit items-center gap-5 border px-6 py-4 text-[0.76rem] font-semibold uppercase tracking-[0.14em] transition-colors"
              style={{
                borderColor: "rgba(198,151,47,0.7)",
                color: CREAM,
              }}
            >
              Request a Quote
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: GOLD }}
              >
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Navigation / contact */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Contact block */}
          <div>
          <Link
  href="/"
  className="group inline-flex items-center"
  aria-label="Treatfab home"
>
  <Image
    src="/images/treatfab-logo3.png"
    alt="Treatfab"
    width={220}
    height={90}
    className="
      h-auto
      w-[145px]
      transition-opacity
      duration-300
      group-hover:opacity-90
      md:w-[185px]
    "
  />
</Link>

            <p
              className="mt-7 max-w-[310px] text-sm leading-6"
              style={{ color: "rgba(247,245,238,0.55)" }}
            >
              Textile processing chemicals for mills and processing houses
              across India — own manufacturing plus trusted distribution.
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <a
                href="mailto:treatfabchem@gmail.com"
                className="block transition-colors hover:text-white"
                style={{ color: "rgba(247,245,238,0.72)" }}
              >
                treatfabchem@gmail.com
              </a>
              <a
                href="tel:+919829093188"
                className="block transition-colors hover:text-white"
                style={{ color: "rgba(247,245,238,0.72)" }}
              >
                +91 98290 93188
              </a>
              <a
                href="tel:+919116739555"
                className="block transition-colors hover:text-white"
                style={{ color: "rgba(247,245,238,0.72)" }}
              >
                +91 91167 39555
              </a>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Explore" links={processLinks} />
        </div>

        {/* Address / legal strip */}
        <div
          className="grid gap-8 border-t border-white/10 py-9 text-[0.68rem] uppercase tracking-[0.12em] md:grid-cols-[1.5fr_1fr_1fr]"
          style={{ color: "rgba(247,245,238,0.42)" }}
        >
          <div>
            <span className="mb-2 block" style={{ color: "rgba(247,245,238,0.65)" }}>
              Registered Office
            </span>
            Office No. 3, III Floor, Orient Arcade,
            <br />
            Transport Nagar, Bhilwara – 311001 (Raj)
          </div>

          <div>
            <span className="mb-2 block" style={{ color: "rgba(247,245,238,0.65)" }}>
              Corporate Identity
            </span>
            CIN: U20224RJ2025PTC105469
            <br />
            PAN: AAMCT1928P
          </div>

          <div className="md:text-right">
            <span className="mb-2 block" style={{ color: "rgba(247,245,238,0.65)" }}>
              Connect
            </span>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="transition-colors hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Final micro footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[0.65rem] uppercase tracking-[0.14em] md:flex-row md:items-center md:justify-between">
          <span style={{ color: "rgba(247,245,238,0.34)" }}>
            © 2026 Treatfab Chemicals Private Limited. All rights reserved.
          </span>

          <span className="flex items-center gap-3" style={{ color: GOLD }}>
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
            Ethical Chemistry, Better Tomorrow
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em]"
        style={{ color: GOLD }}
      >
        {title}
      </h3>

      <div className="space-y-3.5">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group flex w-fit items-center gap-2 text-sm transition-colors"
            style={{ color: "rgba(247,245,238,0.58)" }}
          >
            <span
              className="h-px w-0 transition-all duration-300 group-hover:w-4"
              style={{ backgroundColor: GOLD }}
            />
            <span className="transition-colors duration-200 group-hover:text-white">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
