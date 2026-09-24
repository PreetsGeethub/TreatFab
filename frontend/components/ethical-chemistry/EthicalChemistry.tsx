"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";

interface Commitment {
  number: string;
  title: string;
  description: string;
  icon: "leaf" | "water" | "sprout" | "waves" | "carbon" | "growth";
}

const COMMITMENTS: Commitment[] = [
  {
    number: "01",
    title: "Safer Chemistry",
    description:
      "Formulations built around organic, lower-toxicity chemical inputs wherever the process allows.",
    icon: "leaf",
  },
  {
    number: "02",
    title: "Water Conservation",
    description:
      "Low-foam, high-efficiency auxiliaries that reduce rinse cycles and water consumption per batch.",
    icon: "water",
  },
  {
    number: "03",
    title: "Lower BOD & COD",
    description:
      "Formulated to keep Biochemical & Chemical Oxygen Demand low in discharged process water.",
    icon: "sprout",
  },
  {
    number: "04",
    title: "Minimum ETP Load",
    description:
      "Readily biodegradable chemistry that eases the burden — and cost — on your effluent treatment plant.",
    icon: "waves",
  },
  {
    number: "05",
    title: "Lower Carbon Footprint",
    description:
      "Process-efficient chemistry that cuts energy use across dyeing, washing and finishing stages.",
    icon: "carbon",
  },
  {
    number: "06",
    title: "Built to Grow",
    description:
      "Textile chemistry today — the same ethical-chemistry standard is built to extend into wider chemical manufacturing as we grow.",
    icon: "growth",
  },
];

function CommitmentIcon({ type }: { type: Commitment["icon"] }) {
  const common = {
    fill: "none",
    stroke: FOREST,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <path {...common} d="M49 13C29 14 15 24 15 40c0 5 3 9 8 11 9-4 18-13 23-24 2-5 3-10 3-14Z" />
        <path {...common} d="M13 52c7-12 16-20 29-27" />
      </svg>
    );
  }

  if (type === "water") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <path {...common} d="M32 8S18 25 18 36a14 14 0 0 0 28 0C46 25 32 8 32 8Z" />
        <path {...common} d="M26 47c2 2 5 3 8 3" />
      </svg>
    );
  }

  if (type === "sprout") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <path {...common} d="M32 51V28" />
        <path {...common} d="M31 31C20 31 14 24 15 14c10 0 18 5 18 15" />
        <path {...common} d="M33 35c1-11 8-17 19-17 0 11-7 18-19 18" />
      </svg>
    );
  }

  if (type === "waves") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <path {...common} d="M9 22c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
        <path {...common} d="M9 32c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
        <path {...common} d="M9 42c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
      </svg>
    );
  }

  if (type === "carbon") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <path {...common} d="M48 13C29 14 16 25 16 40c0 5 3 9 8 11 9-4 17-12 22-23 2-5 3-10 2-15Z" />
        <path {...common} d="M13 52c8-12 17-21 30-28" />
        <path {...common} d="M37 23c4 1 7 3 10 6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
      <path {...common} d="M12 51h40" />
      <path {...common} d="M17 45V35h7v10M29 45V27h7v18M41 45V18h7v27" />
      <path {...common} d="M13 27c8 1 17-2 24-8 5-4 8-7 13-12" />
      <path {...common} d="M42 8h8v8" />
    </svg>
  );
}

function GoldWave() {
  return (
    <svg
      viewBox="0 0 420 90"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-[6%] top-[54px] hidden h-[78px] w-[88%] lg:block"
      aria-hidden="true"
    >
      <path
        d="M0 44 C58 5 88 5 145 44 S232 83 286 44 S365 6 420 44"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.2"
        opacity="0.7"
      />
    </svg>
  );
}

export default function EthicalChemistry() {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="commitment"
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: WARM_WHITE }}
    >
      {/* Clean artwork only — no baked-in typography. */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/treat-fab-ethical-chemistry.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Keep the centre quiet enough for live HTML typography. */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,247,240,.91) 0%, rgba(250,247,240,.72) 40%, rgba(250,247,240,.34) 72%, rgba(250,247,240,.16) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,247,240,.18) 0%, transparent 36%, rgba(20,37,28,.12) 100%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-[2px]" style={{ backgroundColor: GOLD }} aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-9 md:px-12 md:py-28 lg:py-32">
        {/* Editorial hero */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative max-w-[920px]"
        >
          <div className="flex items-center gap-3">
            <span className="h-[8px] w-[8px] rotate-45" style={{ backgroundColor: GOLD }} aria-hidden="true" />
            <span
              className="text-[0.68rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: FOREST, opacity: 0.78 }}
            >
              Ethical Chemistry, in Practice
            </span>
          </div>

          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_250px]">
            <div>
              <h2
                className="max-w-[760px] text-[3.05rem] leading-[0.94] tracking-[-0.045em] sm:text-[4rem] md:text-[5.15rem]"
                style={{ color: FOREST, fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Chemistry for
                <br />
                <span> a Cleaner Tomorrow.</span>
              </h2>

              <div className="mt-7 h-[2px] w-20" style={{ backgroundColor: GOLD }} aria-hidden="true" />

              <p
                className="mt-6 max-w-[680px] text-[1rem] leading-[1.72] sm:text-[1.08rem]"
                style={{ color: FOREST, opacity: 0.78 }}
              >
                Every Treatfab formulation is designed to reduce environmental impact — using less water,
                less energy and safer chemistry, without compromising on performance.
              </p>
            </div>

            <div className="hidden pb-2 lg:block">
              <p
                className="text-right text-[1.55rem] leading-[1.08] italic"
                style={{ color: FOREST, fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Cleaner Fabrics
                <br />
                Brighter Tomorrows
              </p>
              <div className="ml-auto mt-4 h-[2px] w-20 rotate-[-10deg]" style={{ backgroundColor: GOLD }} />
            </div>
          </div>
        </motion.div>

        {/* Six commitments — deliberately shaped like the reference: number + icon + title + copy. */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <GoldWave />

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {COMMITMENTS.map((commitment, index) => (
              <motion.article
                key={commitment.number}
                custom={index}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                className="group relative"
              >
                <div className="relative flex items-center gap-3 lg:h-[104px]">
                  <span
                    className="text-[2rem] font-semibold leading-none tracking-[-0.05em] sm:text-[2.25rem]"
                    style={{ color: GOLD, fontVariantNumeric: "tabular-nums" }}
                  >
                    {commitment.number}
                  </span>

                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.045, rotate: -2 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border bg-[rgba(250,247,240,.48)] backdrop-blur-[2px]"
                    style={{ borderColor: "rgba(198,151,47,.78)" }}
                  >
                    <CommitmentIcon type={commitment.icon} />
                    <span
                      className="absolute inset-[-5px] rounded-full border border-dashed opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                      style={{ borderColor: GOLD }}
                    />
                  </motion.div>
                </div>

                <div className="mt-5 pl-1 sm:pl-2">
                  <h3
                    className="text-[1.42rem] leading-[1.1] tracking-[-0.025em] sm:text-[1.58rem]"
                    style={{ color: FOREST, fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {commitment.title}
                  </h3>
                  <p
                    className="mt-3 max-w-[34ch] text-[0.94rem] leading-[1.62] sm:text-[0.98rem]"
                    style={{ color: FOREST, opacity: 0.72 }}
                  >
                    {commitment.description}
                  </p>
                  <div
                    className="mt-5 h-[2px] w-11 transition-all duration-500 group-hover:w-16"
                    style={{ backgroundColor: GOLD }}
                    aria-hidden="true"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom signature */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-16 flex items-end justify-end gap-4 sm:mt-20"
        >
          <div className="h-10 w-px" style={{ backgroundColor: GOLD }} />
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em]" style={{ color: FOREST, opacity: 0.72 }}>
              Textiles Today
            </p>
            <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.22em]" style={{ color: FOREST, opacity: 0.72 }}>
              A Cleaner Tomorrow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
