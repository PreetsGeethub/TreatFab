"use client";

/**
 * Homepage Section 2 — Brand Statement / Introduction.
 * Answers: "What exactly is Treatfab?"
 *
 * Revision notes (v4):
 * - Background texture restored to match the version that was liked —
 *   asymmetric opacity per axis (0.024 / 0.02), tighter 5px spacing,
 *   matching what was in the pasted v3.5 rather than the flattened
 *   values I'd drifted to.
 * - Eyebrow marker changed from a horizontal gold tick ("hyphen") to
 *   a small rotated gold square (a diamond/lozenge) — a classic
 *   editorial kicker ornament, reads as more intentional than a line.
 * - Reveal animation rebuilt on Framer Motion (a mainstream, widely
 *   used animation library — not a decorative-effects package) rather
 *   than a hand-rolled IntersectionObserver. Same behavior: one
 *   staggered reveal, fires once, respects reduced motion (Framer's
 *   useReducedMotion). Deliberately NOT using spotlight/glow/particle
 *   style components — those are the specific effects worth avoiding,
 *   not animation libraries in general.
 *
 * Still holding: no cards, no rounded containers, no gradients-as-
 * decoration, no generic SaaS stepper patterns.
 */

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { solutionsProcesses } from "@/components/navbar/navbar.data";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";

const PROCESS_PREVIEW: { number: string; label: string; slug: string }[] = [
  { number: "01", label: "Pre-treatment", slug: "pre-treatment" },
  { number: "02", label: "Dyeing", slug: "yarn-dyeing" },
  { number: "03", label: "Printing", slug: "printing" },
  { number: "04", label: "Denim", slug: "denim" },
  { number: "05", label: "Finishing", slug: "finishing" },
];

if (process.env.NODE_ENV !== "production") {
  const knownSlugs = new Set(solutionsProcesses.map((p) => p.slug));
  PROCESS_PREVIEW.forEach((p) => {
    if (!knownSlugs.has(p.slug)) {
      // eslint-disable-next-line no-console
      console.warn(
        `BrandStatement: "${p.slug}" is not in navbar.data's solutionsProcesses.`
      );
    }
  });
}

export default function BrandStatement() {
  const reduceMotion = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
      style={{
        backgroundColor: WARM_WHITE,
        // Faint woven cross-hatch — restored to the values that read
        // well: asymmetric opacity per axis, 5px spacing.
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(20,37,28,0.024) 0px, rgba(20,37,28,0.024) 1px, transparent 1px, transparent 5px),
          repeating-linear-gradient(90deg, rgba(20,37,28,0.02) 0px, rgba(20,37,28,0.02) 1px, transparent 1px, transparent 5px)
        `,
      }}
    >
      {/* Seam device — the Navbar's rail reappearing here */}
      <div className="absolute inset-x-0 top-0 h-[2px]" style={{ backgroundColor: GOLD }} aria-hidden="true" />

      {/* Brand mark watermark — large, quiet, bleeding off the right
          edge behind the Process Index. Tinted to a single low-opacity
          forest tone via CSS mask (works with the PNG as-is; swap the
          maskImage url for a true vector source later for crisper
          edges at this scale). Hidden on mobile — only enough negative
          space to hold it at desktop widths. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-10 z-0 hidden h-[420px] w-[420px] md:block"
        style={{
          backgroundColor: "rgba(20,37,28,0.07)",
          WebkitMaskImage: "url(/brand/treatfab-tree.png)",
          maskImage: "url(/brand/treatfab-tree.png)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {/* Eyebrow row + document-style locator */}
        <motion.div className="flex items-center justify-between" variants={item}>
          <div className="flex items-center gap-3">
            <span
              className="h-[6px] w-[6px] rotate-45"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <p
              className="text-[0.78rem]"
              style={{ color: FOREST, fontVariant: "all-small-caps", letterSpacing: "0.1em", opacity: 0.7 }}
            >
              Textile Process Chemistry
            </p>
          </div>
          <p className="text-[0.78rem]" style={{ color: FOREST, opacity: 0.4, letterSpacing: "0.04em" }} aria-hidden="true">
            &sect; 02
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-14 md:grid-cols-12 md:gap-x-10">
          {/* Statement + supporting copy — the clear visual anchor */}
          <div className="md:col-span-7">
            <motion.h2
              className="max-w-[15ch] text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.015em] md:text-[3.5rem]"
              style={{ color: FOREST }}
              variants={item}
            >
              Chemistry that follows the fabric.
            </motion.h2>

            <motion.p
              className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed md:ml-[8.333%]"
              style={{ color: FOREST, opacity: 0.75 }}
              variants={item}
            >
              Treatfab supplies the textile-processing chemistry that
              moves with the fabric itself — from preparation through
              dyeing, printing, denim and finishing — for manufacturers
              who need consistency at every stage of the process.
            </motion.p>

            <motion.div variants={item}>
              <Link
                href="/solutions"
                className="group mt-8 inline-flex items-center gap-3 text-[0.8rem] md:ml-[8.333%]"
                style={{ color: FOREST, fontVariant: "all-small-caps", letterSpacing: "0.06em" }}
              >
                <span className="h-px w-6 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                <span className="transition-colors duration-200 group-hover:text-[var(--gold)]" style={{ "--gold": GOLD } as React.CSSProperties}>
                  Explore Solutions
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Process index — a bounded margin column, not a link list */}
          <motion.div
            className="border-l pl-6 md:col-span-4 md:col-start-9"
            style={{ borderColor: "rgba(20,37,28,0.18)" }}
            variants={item}
          >
            <p
              className="mb-5 text-[0.75rem]"
              style={{ color: FOREST, fontVariant: "all-small-caps", letterSpacing: "0.06em", opacity: 0.55 }}
            >
              Process Index
            </p>

            <ul className="border-t" style={{ borderColor: "rgba(20,37,28,0.12)" }}>
              {PROCESS_PREVIEW.map((proc) => (
                <li key={proc.slug} className="border-b" style={{ borderColor: "rgba(20,37,28,0.12)" }}>
                  <Link
                    href={`/solutions/${proc.slug}`}
                    className="group flex items-baseline gap-3 py-3 text-[1rem] transition-colors duration-200"
                    style={{ color: FOREST }}
                  >
                    <span className="text-[0.85rem]" style={{ color: GOLD, fontVariantNumeric: "tabular-nums" }}>
                      {proc.number}
                    </span>
                    <span
                      className="transition-colors duration-200 group-hover:text-[var(--gold)]"
                      style={{ fontVariant: "all-small-caps", letterSpacing: "0.03em", "--gold": GOLD } as React.CSSProperties}
                    >
                      {proc.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/solutions"
              className="mt-5 inline-block text-[0.8rem] transition-colors duration-200 hover:text-[var(--gold)]"
              style={{
                color: FOREST,
                opacity: 0.85,
                fontVariant: "all-small-caps",
                letterSpacing: "0.04em",
                "--gold": GOLD,
              } as React.CSSProperties}
            >
              Explore Solutions &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}