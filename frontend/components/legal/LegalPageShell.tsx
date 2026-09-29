"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FOREST = "#0B3D24";
const GOLD = "#C6972F";
const CREAM = "#F7F5EE";
const NAVY = "#0B1F3A";

export default function LegalPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F5F3EC] pt-24" style={{ color: NAVY }}>
      <section
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: CREAM, borderColor: "rgba(11,61,36,0.10)" }}
      >
        <div
          className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border"
          style={{ borderColor: "rgba(198,151,47,0.18)" }}
        />
        <div
          className="pointer-events-none absolute -left-28 bottom-[-12rem] h-80 w-80 rounded-full"
          style={{ background: "rgba(11,61,36,0.05)" }}
        />

        <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-[7px] w-[7px] rotate-45"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]"
                style={{ color: FOREST }}
              >
                {eyebrow}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-[#0B1F3A]/60 md:text-lg">
              {intro}
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-[#0B1F3A]/40">
              Last updated: 30 September 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[220px_1fr]"
        >
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Legal
            </p>
            <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">
              <Link className="text-sm text-[#0B1F3A]/60 transition-colors hover:text-[#0B3D24]" href="/privacy-policy">Privacy Policy</Link>
              <Link className="text-sm text-[#0B1F3A]/60 transition-colors hover:text-[#0B3D24]" href="/terms-of-use">Terms of Use</Link>
              <Link className="text-sm text-[#0B1F3A]/60 transition-colors hover:text-[#0B3D24]" href="/cookie-policy">Cookie Policy</Link>
              <Link className="text-sm text-[#0B1F3A]/60 transition-colors hover:text-[#0B3D24]" href="/grievance-redressal">Grievance Redressal</Link>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl space-y-10">
            {children}
          </article>
        </motion.div>
      </section>
    </main>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#0B1F3A]/10 pt-7">
      <div className="flex gap-5">
        <span className="pt-1 text-xs font-semibold tracking-[0.16em]" style={{ color: GOLD }}>
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#0B3D24]">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-[#0B1F3A]/65">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
