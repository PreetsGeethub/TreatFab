"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

const FOREST = "#14251C";
const FOREST_DEEP = "#0D2017";
const GOLD = "#C6972F";
const GOLD_LIGHT = "#E4C77A";
const CREAM = "#F7F4EC";
const MOSS = "#526B58";
const INK_SOFT = "#526058";

interface ProductRangeItem {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  kind: "fibre" | "yarn" | "pretreat" | "dye" | "print" | "denim" | "finish";
}

const PRODUCTS: ProductRangeItem[] = [
  {
    number: "01",
    eyebrow: "Fibre & Spinning",
    title: "Fibre dyeing, spin finish & texturing chemicals",
    description:
      "Dyeing auxiliaries for loose fibre, spin finish oils for smoother draw and less breakage, and texturising/antistatic agents for synthetic filament yarn.",
    chips: ["Fibre Dyeing", "Spin Finish Oils", "Texturising Agents"],
    kind: "fibre",
  },
  {
    number: "02",
    eyebrow: "Yarn Preparation",
    title: "Sizing & yarn dyeing chemicals",
    description:
      "Film-forming size agents that reduce warp breakage and improve weaving efficiency, plus package/hank dyeing auxiliaries.",
    chips: ["Cotton", "Polyester", "P/C Blends", "Yarn Dyeing"],
    kind: "yarn",
  },
  {
    number: "03",
    eyebrow: "Fabric Pre-Treatment",
    title: "Desizing, scouring, bleaching & mercerizing",
    description:
      "Enzyme desizing, scouring agents, peroxide stabilisers and mercerizing auxiliaries that prepare fabric for a clean, even dye uptake.",
    chips: ["Low Foam", "Caustic Stable", "Enzyme Desizing"],
    kind: "pretreat",
  },
  {
    number: "04",
    eyebrow: "Dyeing",
    title: "Fabric & piece dyeing chemicals, and dyes",
    description:
      "Levelling, dispersing and fixing agents for shade consistency, alongside our range of dyes for cotton, polyester and blends.",
    chips: ["Reactive", "Disperse", "Dyes"],
    kind: "dye",
  },
  {
    number: "05",
    eyebrow: "Printing",
    title: "Pigment, reactive & digital printing chemicals",
    description:
      "Binders, thickeners and fixing agents formulated for sharp, wash-fast prints across printing methods.",
    chips: ["Pigment Printing", "Reactive Printing", "Digital Printing"],
    kind: "print",
  },
  {
    number: "06",
    eyebrow: "Denim",
    title: "Indigo dyeing & denim wash chemicals",
    description:
      "Reduction, oxidation, sizing and enzyme-wash auxiliaries built for high-turbulence rope and slasher dyeing lines.",
    chips: ["Rope Dyeing", "Slasher Compatible", "Enzyme Wash"],
    kind: "denim",
  },
  {
    number: "07",
    eyebrow: "Finishing & Garment",
    title: "Finishing, garment processing & lubricants",
    description:
      "Softeners and functional finishes — easy-care, water-repellent, anti-microbial — plus garment dyeing, washing and bio-polishing chemicals.",
    chips: ["Softeners", "Lubricants", "Garment Washing"],
    kind: "finish",
  },
];

function ProcessIcon({ kind }: { kind: ProductRangeItem["kind"] }) {
  const common = {
    width: 54,
    height: 54,
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (kind === "fibre") {
    return (
      <svg {...common}>
        <path d="M8 31C15 22 21 22 27 31C33 40 39 40 46 31" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 22C15 13 21 13 27 22C33 31 39 31 46 22" stroke="currentColor" strokeWidth="1.7" opacity=".55" />
        <circle cx="27" cy="27" r="4.5" stroke={GOLD} strokeWidth="1.7" />
      </svg>
    );
  }

  if (kind === "yarn") {
    return (
      <svg {...common}>
        <path d="M16 10C16 10 13 20 18 27C23 34 17 44 17 44" stroke="currentColor" strokeWidth="1.8" />
        <path d="M27 10C27 10 24 20 29 27C34 34 28 44 28 44" stroke={GOLD} strokeWidth="1.8" />
        <path d="M38 10C38 10 35 20 40 27C45 34 39 44 39 44" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 15H20M23 15H31M34 15H42" stroke="currentColor" strokeWidth="1.2" opacity=".5" />
      </svg>
    );
  }

  if (kind === "pretreat") {
    return (
      <svg {...common}>
        <rect x="10" y="27" width="34" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M27 8C31 15 35 19 35 24C35 28.4 31.4 32 27 32C22.6 32 19 28.4 19 24C19 19 23 15 27 8Z" fill={GOLD} opacity=".9" />
        <path d="M16 35H38" stroke="currentColor" strokeWidth="1.2" opacity=".45" />
      </svg>
    );
  }

  if (kind === "dye") {
    return (
      <svg {...common}>
        <path d="M22 9H32V20L40 39C41.2 42 39 45 35.8 45H18.2C15 45 12.8 42 14 39L22 20V9Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19 36C23 33 27 38 31 35C34 33 37 36 39 37" stroke={GOLD} strokeWidth="2" />
        <circle cx="25" cy="25" r="2" fill={GOLD} />
      </svg>
    );
  }

  if (kind === "print") {
    return (
      <svg {...common}>
        <rect x="9" y="9" width="36" height="36" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 21H45M9 33H45M21 9V45M33 9V45" stroke="currentColor" strokeWidth="1.1" opacity=".42" />
        <circle cx="27" cy="27" r="4.2" fill={GOLD} />
      </svg>
    );
  }

  if (kind === "denim") {
    return (
      <svg {...common}>
        <path d="M27 7C34 18 40 25 40 32C40 39.2 34.2 45 27 45C19.8 45 14 39.2 14 32C14 25 20 18 27 7Z" fill={FOREST} opacity=".9" />
        <path d="M16 33C21 30.5 33 30.5 38 33M17 39C22 36.5 32 36.5 37 39" stroke={GOLD_LIGHT} strokeWidth="1.4" opacity=".85" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M17 13L27 19L37 13L44 19L39 27L35 24V44H19V24L15 27L10 19L17 13Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M23 27C24 30 30 30 31 27" stroke={GOLD} strokeWidth="1.8" />
    </svg>
  );
}

function TextileTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -left-[5%] top-[34%] h-[42%] w-[110%] opacity-[0.11]"
        viewBox="0 0 1200 360"
        preserveAspectRatio="none"
      >
        <path
          d="M-30 230C130 100 230 105 360 215C500 335 625 330 760 195C885 70 1010 80 1230 245"
          stroke={FOREST}
          strokeWidth="70"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-30 230C130 100 230 105 360 215C500 335 625 330 760 195C885 70 1010 80 1230 245"
          stroke={CREAM}
          strokeWidth="58"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-30 230C130 100 230 105 360 215C500 335 625 330 760 195C885 70 1010 80 1230 245"
          stroke={MOSS}
          strokeWidth="1.2"
          strokeDasharray="5 8"
          fill="none"
        />
      </svg>

      <div
        className="absolute -right-24 top-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(82,107,88,.13)" }}
      />
      <div
        className="absolute -left-24 bottom-16 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(198,151,47,.09)" }}
      />
    </div>
  );
}

export default function ProductRange() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden border-t"
      style={{
        background: CREAM,
        borderColor: "rgba(20,37,28,.12)",
        color: FOREST,
      }}
    >
      <TextileTexture />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-[7px] w-[7px] rotate-45"
              style={{ background: GOLD }}
            />
            <span
              className="text-[.72rem] font-semibold uppercase tracking-[.22em]"
              style={{ color: MOSS }}
            >
              Product Range
            </span>
          </div>

          <h2
            className="max-w-[850px] text-[clamp(2.45rem,5vw,5rem)] font-semibold leading-[.98] tracking-[-.045em]"
            style={{ color: FOREST_DEEP }}
          >
            Chemistry for cotton, polyester, wool
            <br className="hidden md:block" /> & every blend in between.
          </h2>

          <p
            className="mt-7 max-w-[650px] text-[1.02rem] leading-[1.75] md:text-[1.1rem]"
            style={{ color: INK_SOFT }}
          >
            From fibre preparation to the final finish, our chemistry follows
            the textile through every stage — with formulations designed for
            consistency, efficiency and cleaner processing.
          </p>
        </motion.div>

        {/* Process line */}
        <div className="relative mt-20 md:mt-28">
          {/* Desktop animated textile route */}
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[86px] hidden h-[170px] md:block">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 180"
              preserveAspectRatio="none"
            >
              <path
                d="M0 92 C70 22 115 22 180 92 S300 162 360 92 S480 22 540 92 S660 162 720 92 S840 22 1000 92"
                pathLength="1"
                stroke="rgba(20,37,28,.13)"
                strokeWidth="1.5"
                fill="none"
              />
              <motion.path
                d="M0 92 C70 22 115 22 180 92 S300 162 360 92 S480 22 540 92 S660 162 720 92 S840 22 1000 92"
                pathLength="1"
                stroke={GOLD}
                strokeWidth="2.2"
                fill="none"
                strokeDasharray="0.055 0.945"
                animate={
                  reduceMotion
                    ? undefined
                    : { strokeDashoffset: [0, -1] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: "linear" }
                }
              />
            </svg>
          </div>

          {/* Desktop stations */}
          <div className="relative hidden grid-cols-7 gap-3 md:grid">
            {PRODUCTS.map((product, index) => (
              <motion.article
                key={product.number}
                initial={{ opacity: 0, y: index % 2 === 0 ? 22 : -22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                <div
                  className={`flex min-h-[455px] flex-col ${
                    index % 2 === 0 ? "pt-0" : "pt-[132px]"
                  }`}
                >
                  <div
                    className="relative flex min-h-[305px] flex-col overflow-hidden rounded-[2px] border px-5 pb-6 pt-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(20,37,28,.10)]"
                    style={{
                      background:
                        index % 2 === 0
                          ? "rgba(255,255,255,.72)"
                          : "rgba(20,37,28,.96)",
                      borderColor:
                        index % 2 === 0
                          ? "rgba(20,37,28,.13)"
                          : "rgba(255,255,255,.12)",
                      color: index % 2 === 0 ? FOREST : CREAM,
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                      style={{ background: GOLD }}
                    />

                    <div className="flex items-start justify-between">
                      <span
                        className="font-mono text-[.72rem] tracking-[.14em]"
                        style={{
                          color: index % 2 === 0 ? GOLD : GOLD_LIGHT,
                        }}
                      >
                        {product.number}
                      </span>

                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                        style={{
                          borderColor:
                            index % 2 === 0
                              ? "rgba(198,151,47,.48)"
                              : "rgba(228,199,122,.35)",
                          color: index % 2 === 0 ? FOREST : CREAM,
                        }}
                      >
                        <ProcessIcon kind={product.kind} />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <p
                        className="mb-2 text-[.67rem] font-semibold uppercase tracking-[.14em]"
                        style={{
                          color: index % 2 === 0 ? MOSS : GOLD_LIGHT,
                        }}
                      >
                        {product.eyebrow}
                      </p>

                      <h3
                        className="text-[1.08rem] font-semibold leading-[1.18] tracking-[-.02em]"
                        style={{
                          color: index % 2 === 0 ? FOREST_DEEP : "#fff",
                        }}
                      >
                        {product.title}
                      </h3>

                      <p
                        className="mt-3 text-[.78rem] leading-[1.6]"
                        style={{
                          color:
                            index % 2 === 0
                              ? INK_SOFT
                              : "rgba(247,244,236,.68)",
                        }}
                      >
                        {product.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border px-2 py-1 text-[.58rem] font-medium"
                            style={{
                              borderColor:
                                index % 2 === 0
                                  ? "rgba(20,37,28,.14)"
                                  : "rgba(255,255,255,.15)",
                              color:
                                index % 2 === 0
                                  ? FOREST
                                  : "rgba(247,244,236,.82)",
                              background:
                                index % 2 === 0
                                  ? "rgba(255,255,255,.55)"
                                  : "rgba(255,255,255,.045)",
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Station marker */}
                  <div
                    className={`absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] ${
                      index % 2 === 0 ? "top-[78px]" : "top-[210px]"
                    }`}
                    style={{
                      background: CREAM,
                      borderColor: GOLD,
                      boxShadow: "0 0 0 6px rgba(247,244,236,.75)",
                    }}
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile vertical journey */}
          <div className="relative md:hidden">
            <div
              className="absolute bottom-6 left-[13px] top-6 w-px"
              style={{ background: "rgba(20,37,28,.16)" }}
            />

            <motion.div
              className="absolute left-[11px] top-6 w-[5px] rounded-full"
              style={{ background: GOLD }}
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 48px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 1.8,
                ease: "easeInOut",
              }}
            />

            <div className="space-y-5">
              {PRODUCTS.map((product, index) => (
                <motion.article
                  key={product.number}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease: "easeOut",
                  }}
                  className="relative pl-9"
                >
                  <div
                    className="absolute left-0 top-7 z-10 h-7 w-7 rounded-full border-[3px]"
                    style={{
                      background: CREAM,
                      borderColor: GOLD,
                      boxShadow: "0 0 0 5px rgba(247,244,236,.95)",
                    }}
                  />

                  <div
                    className="rounded-[2px] border p-6"
                    style={{
                      background:
                        index % 2 === 0
                          ? "rgba(255,255,255,.76)"
                          : FOREST_DEEP,
                      borderColor:
                        index % 2 === 0
                          ? "rgba(20,37,28,.12)"
                          : "rgba(255,255,255,.1)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span
                          className="font-mono text-[.7rem] tracking-[.15em]"
                          style={{ color: GOLD }}
                        >
                          {product.number}
                        </span>
                        <p
                          className="mt-3 text-[.67rem] font-semibold uppercase tracking-[.14em]"
                          style={{
                            color:
                              index % 2 === 0 ? MOSS : GOLD_LIGHT,
                          }}
                        >
                          {product.eyebrow}
                        </p>
                      </div>

                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
                        style={{
                          borderColor:
                            index % 2 === 0
                              ? "rgba(198,151,47,.45)"
                              : "rgba(228,199,122,.3)",
                          color: index % 2 === 0 ? FOREST : CREAM,
                        }}
                      >
                        <ProcessIcon kind={product.kind} />
                      </div>
                    </div>

                    <h3
                      className="mt-5 text-[1.25rem] font-semibold leading-[1.15] tracking-[-.025em]"
                      style={{
                        color:
                          index % 2 === 0 ? FOREST_DEEP : "#fff",
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      className="mt-3 text-[.9rem] leading-[1.65]"
                      style={{
                        color:
                          index % 2 === 0
                            ? INK_SOFT
                            : "rgba(247,244,236,.68)",
                      }}
                    >
                      {product.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {product.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border px-2.5 py-1 text-[.62rem]"
                          style={{
                            borderColor:
                              index % 2 === 0
                                ? "rgba(20,37,28,.14)"
                                : "rgba(255,255,255,.15)",
                            color:
                              index % 2 === 0
                                ? FOREST
                                : "rgba(247,244,236,.82)",
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mt-16 flex flex-col gap-5 border-t pt-7 md:mt-24 md:flex-row md:items-end md:justify-between"
          style={{ borderColor: "rgba(20,37,28,.13)" }}
        >
          <p
            className="max-w-2xl text-[.88rem] leading-[1.7]"
            style={{ color: INK_SOFT }}
          >
            One chemistry partner across the process — from the first fibre
            treatment to the final garment finish.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-[.72rem] font-semibold uppercase tracking-[.15em]"
            style={{ color: FOREST }}
          >
            <span
              className="h-px w-7 transition-all duration-300 group-hover:w-12"
              style={{ background: GOLD }}
            />
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
