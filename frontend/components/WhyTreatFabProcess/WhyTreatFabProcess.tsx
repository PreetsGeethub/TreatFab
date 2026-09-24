"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
const FOREST = "#0B3D24";
const DEEP_FOREST = "#071F15";
const GOLD = "#C6972F";
const OLIVE = "#B5A61F";
const WARM = "#F7F4EA";
const MIST = "#E7EEE5";

type ProcessStage = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Fibre Preparation",
    description: "Chemistry that helps prepare fibre for the next stage of processing.",
    tag: "FIBRE",
  },
  {
    number: "02",
    title: "Spinning & Yarn",
    description: "Lubricants for smooth fibre-to-yarn conversion.",
    tag: "YARN",
  },
  {
    number: "03",
    title: "Texturing",
    description: "Texturising oils and antistatic agents for synthetic yarn.",
    tag: "YARN",
  },
  {
    number: "04",
    title: "Yarn Dyeing",
    description: "Package and hank dyeing auxiliaries for cotton, polyester and blends.",
    tag: "DYEING",
  },
  {
    number: "05",
    title: "Sizing",
    description: "Warp sizing chemistry for cotton,Wool and polyester and blended yarns.",
    tag: "SIZING",
  },
  {
    number: "06",
    title: "Desizing & Scouring",
    description: "Enzyme desizing and scouring agents to prepare fabric for dyeing.",
    tag: "PRE-TREAT",
  },
  {
    number: "07",
    title: "Bleaching & Mercerizing",
    description: "Peroxide stabilisers, bleaching and mercerizing auxiliaries.",
    tag: "PRE-TREAT",
  },
  {
    number: "08",
    title: "Piece / Fabric Dyeing",
    description: "Levelling, dispersing and fixing agents for fabric dyeing.",
    tag: "DYEING",
  },
  {
    number: "09",
    title: "Printing",
    description: "Pigment, reactive and digital printing chemicals and binders.",
    tag: "PRINTING",
  },
  {
    number: "10",
    title: "Denim Processing",
    description: "Indigo dyeing, sizing and enzyme wash chemistry for denim.",
    tag: "DENIM",
  },
  {
    number: "11",
    title: "Finishing",
    description: "Softeners and functional finishes including easy-care, water-repellent and anti-microbial chemistry.",
    tag: "FINISH",
  },
  {
    number: "12",
    title: "Garment Processing",
    description: "Garment dyeing, washing and bio-polishing auxiliaries.",
    tag: "GARMENT",
  },
];

const WHY_TREATFAB = [
  {
    index: "01",
    title: "Two verticals. One contact.",
    text: "Own manufacturing plus distribution means fewer vendors to manage for your purchase team.",
  },
  {
    index: "02",
    title: "Consistency, batch after batch.",
    text: "Formulated and tested for repeatable results across every drum, every batch.",
  },
  {
    index: "03",
    title: "Technical support that stays close.",
    text: "Guidance on dosage and process integration — not just a data sheet and an invoice.",
  },
  {
    index: "04",
    title: "Registered & compliant.",
    text: "A fully registered private limited company for clean B2B documentation.",
  },
];

export default function WhyTreatfabProcess() {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(3);

  const active = useMemo(
    () => PROCESS_STAGES[activeStage],
    [activeStage]
  );

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  const stageReveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
        delay: reduceMotion ? 0 : i * 0.035,
      },
    }),
  };

  return (
    <section
      id="why"
      className="relative overflow-hidden"
      style={{ backgroundColor: WARM }}
    >
      {/* Quiet organic texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 8% 15%, rgba(11,61,36,0.10) 0 1px, transparent 1.5px),
            radial-gradient(circle at 78% 72%, rgba(198,151,47,0.10) 0 1px, transparent 1.5px),
            linear-gradient(115deg, transparent 0 48%, rgba(11,61,36,0.035) 48.2%, transparent 49%)
          `,
          backgroundSize: "28px 28px, 34px 34px, 100% 100%",
        }}
      />

      {/* Top gold seam */}
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ backgroundColor: GOLD }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-[7px] w-[7px] rotate-45"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-[0.72rem] font-medium tracking-[0.2em]"
                style={{ color: FOREST }}
              >
                WHY TREATFAB / YOUR PROCESS
              </span>
            </div>

            <h2
              className="max-w-[13ch] text-[3rem] font-semibold leading-[0.96] tracking-[-0.035em] md:text-[5rem]"
              style={{ color: DEEP_FOREST }}
            >
              Chemistry should follow the{" "}
              <em className="font-normal" style={{ color: FOREST }}>
                fabric.
              </em>
            </h2>
          </div>

          <div className="md:pb-2">
            <p
              className="max-w-[48ch] text-[1.05rem] leading-[1.75]"
              style={{ color: FOREST, opacity: 0.76 }}
            >
              From yarn preparation to the final garment, Treatfab stays close
              to the process — combining its own manufactured range with
              trusted distribution brands.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-[0.68rem] uppercase tracking-[0.18em]"
                style={{ color: FOREST, opacity: 0.62 }}
              >
                Select your stage below
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main process instrument */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.34fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={reveal}
          >
            <div
              className="relative overflow-hidden border"
              style={{
                borderColor: "rgba(11,61,36,0.20)",
                backgroundColor: "rgba(255,255,255,0.42)",
              }}
            >
              {/* Textile-like moving route */}
              <div className="pointer-events-none absolute left-0 right-0 top-[5.4rem] hidden h-20 md:block">
                <svg
                  viewBox="0 0 1000 80"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M0 42 C80 5, 120 5, 200 42 S320 79, 400 42 S520 5, 600 42 S720 79, 800 42 S920 5, 1000 42"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="1.5"
                    opacity="0.52"
                  />
                  <motion.path
                    d="M0 42 C80 5, 120 5, 200 42 S320 79, 400 42 S520 5, 600 42 S720 79, 800 42 S920 5, 1000 42"
                    fill="none"
                    stroke={FOREST}
                    strokeWidth="1"
                    strokeDasharray="3 9"
                    animate={reduceMotion ? undefined : { strokeDashoffset: [0, -80] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    opacity="0.34"
                  />
                </svg>
              </div>

              <div
                className="flex items-center justify-between border-b px-5 py-4 md:px-7"
                style={{ borderColor: "rgba(11,61,36,0.14)" }}
              >
                <div>
                  <span
                    className="text-[0.64rem] uppercase tracking-[0.18em]"
                    style={{ color: FOREST, opacity: 0.55 }}
                  >
                    Process map
                  </span>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: DEEP_FOREST }}
                  >
                    Fibre → yarn → fabric → garment
                  </p>
                </div>
                <span
                  className="hidden text-[0.62rem] uppercase tracking-[0.16em] sm:block"
                  style={{ color: GOLD }}
                >
                  12 stages
                </span>
              </div>

              <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {PROCESS_STAGES.map((stage, i) => {
                  const selected = activeStage === i;

                  return (
                    <motion.button
                      key={stage.number}
                      type="button"
                      custom={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={stageReveal}
                      onClick={() => setActiveStage(i)}
                      className="group relative min-h-[170px] border-b border-r p-5 text-left transition-all duration-300 md:min-h-[190px] md:p-6"
                      style={{
                        borderColor: "rgba(11,61,36,0.12)",
                        backgroundColor: selected
                          ? FOREST
                          : "transparent",
                        color: selected ? WARM : DEEP_FOREST,
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="font-mono text-[0.68rem]"
                          style={{
                            color: selected ? GOLD : FOREST,
                            opacity: selected ? 1 : 0.58,
                          }}
                        >
                          {stage.number}
                        </span>

                        <span
                          className="text-[0.56rem] tracking-[0.16em]"
                          style={{
                            color: selected ? WARM : FOREST,
                            opacity: selected ? 0.66 : 0.42,
                          }}
                        >
                          {stage.tag}
                        </span>
                      </div>

                      <div className="mt-12">
                        <h3
                          className="max-w-[15ch] text-[1rem] font-semibold leading-[1.15] md:text-[1.08rem]"
                          style={{
                            color: selected ? WARM : DEEP_FOREST,
                          }}
                        >
                          {stage.title}
                        </h3>

                        <div
                          className="mt-3 h-px w-7 transition-all duration-300 group-hover:w-12"
                          style={{
                            backgroundColor: selected ? GOLD : GOLD,
                          }}
                        />
                      </div>

                      {selected && (
                        <motion.div
                          layoutId="active-stage-dot"
                          className="absolute bottom-4 right-5 h-2 w-2 rotate-45"
                          style={{ backgroundColor: GOLD }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Selected-stage detail */}
            <motion.div
              key={active.number}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="mt-5 flex flex-col gap-5 border-l-2 pl-5 md:flex-row md:items-start md:justify-between md:pl-7"
              style={{ borderColor: GOLD }}
            >
              <div>
                <span
                  className="text-[0.62rem] uppercase tracking-[0.18em]"
                  style={{ color: FOREST, opacity: 0.55 }}
                >
                  You selected / {active.tag}
                </span>
                <h3
                  className="mt-2 text-[1.55rem] font-semibold tracking-[-0.02em]"
                  style={{ color: DEEP_FOREST }}
                >
                  {active.title}
                </h3>
                <p
                  className="mt-2 max-w-[62ch] text-[0.96rem] leading-relaxed"
                  style={{ color: FOREST, opacity: 0.72 }}
                >
                  {active.description}
                </p>
              </div>

              <Link
  href="/contact"
  className="group inline-flex shrink-0 items-center gap-3 self-start border-b pb-2 pt-1 text-[0.72rem] uppercase tracking-[0.13em]"
  style={{
    color: FOREST,
    borderColor: "rgba(11,61,36,0.3)",
  }}
>
  Tell us about this stage

  <span
    className="transition-transform duration-300 group-hover:translate-x-1"
    style={{ color: GOLD }}
  >
    →
  </span>
</Link>
            </motion.div>
          </motion.div>

          {/* Why Treatfab rail */}
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={reveal}
            className="relative overflow-hidden p-7 md:p-8"
            style={{
              backgroundColor: FOREST,
              color: WARM,
            }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border"
              style={{ borderColor: "rgba(198,151,47,0.35)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full border"
              style={{ borderColor: "rgba(247,244,234,0.13)" }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 rotate-45"
                  style={{ backgroundColor: GOLD }}
                />
                <span className="text-[0.65rem] uppercase tracking-[0.18em] opacity-65">
                  Why Treatfab
                </span>
              </div>

              <h3 className="mt-7 max-w-[10ch] text-[2.2rem] font-semibold leading-[1] tracking-[-0.025em]">
                Less vendor noise. More process focus.
              </h3>

              <div className="mt-10">
                {WHY_TREATFAB.map((item, i) => (
                  <motion.div
                    key={item.index}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : i * 0.08,
                    }}
                    className="border-t py-5"
                    style={{ borderColor: "rgba(247,244,234,0.16)" }}
                  >
                    <div className="flex gap-4">
                      <span
                        className="font-mono text-[0.62rem]"
                        style={{ color: GOLD }}
                      >
                        {item.index}
                      </span>
                      <div>
                        <h4 className="text-[0.94rem] font-semibold">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[0.82rem] leading-relaxed opacity-65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-4 border-t pt-6"
                style={{ borderColor: "rgba(247,244,234,0.16)" }}
              >
                <p className="text-[0.68rem] uppercase tracking-[0.16em] opacity-50">
                  Own chemistry + trusted distribution
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Bottom conversion strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mt-16 border-t pt-8 md:mt-20"
          style={{ borderColor: "rgba(11,61,36,0.18)" }}
        >
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span
                className="text-[0.66rem] uppercase tracking-[0.18em]"
                style={{ color: GOLD }}
              >
                Ready when you are
              </span>
              <h3
                className="mt-2 max-w-[30ch] text-[1.7rem] font-semibold leading-tight md:text-[2.1rem]"
                style={{ color: DEEP_FOREST }}
              >
                Tell us your process stage and volume. We’ll take it from there.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-4 px-6 py-4 text-[0.72rem] uppercase tracking-[0.14em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: DEEP_FOREST,
                color: WARM,
              }}
            >
              Request a Quote
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: GOLD }}
              >
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
