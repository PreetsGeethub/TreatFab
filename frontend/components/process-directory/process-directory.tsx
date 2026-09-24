"use client";

/**
 * Homepage Section 3 — Solutions by Process.
 *
 * REVISION v7 — tighter autoplay, more breathing room around the watermark, and a cinematic transition:
 * 1. Autoplay shortened to 2.8s so the section feels alive without
 *    feeling rushed.
 * 2. Slide changes use a restrained crossfade + micro-scale transition
 *    (no horizontal sliding) for a more editorial / premium feel.
 * 3. Caption remains stable while the image transitions, avoiding a
 *    distracting second animation competing with the photograph.
 * 4. Slideshow breaks out of the max-w-[1440px] container via
 *    `-mx-6 md:-mx-12` (canceling the section's own horizontal
 *    padding) so the photography reaches the section edges instead
 *    of sitting in a narrower padded column.
 * 5. Watermark stays beside the copy, but with more intentional
 *    breathing room so it reads as a brand mark rather than touching
 *    the headline.
 *
 * Everything else — typography, colors, image treatment, the gold
 * vertical rule on the caption, the numbered 01–12 navigation,
 * autoplay, and progress line — stays intact.
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";
const SLIDE_DURATION_MS = 2800;

interface ProcessStage {
  number: string;
  label: string;
  examples: string;
  slug: string;
  image: string | null;
}

const PROCESS_STAGES: ProcessStage[] = [
  { number: "01", label: "Fibre Dyeing", examples: "Dyeing auxiliaries, dispersing agents, levelling aids", slug: "fibre-dyeing", image: "/process/fibre-dyeing.jpeg" },
  { number: "02", label: "Spinning", examples: "Spin finish oils, antistatic agents", slug: "spinning", image: "/process/spinning.jpeg" },
  { number: "03", label: "Texturing", examples: "Texturising oils, lubricants", slug: "texturing", image: "/process/texturing.jpeg" },
  { number: "04", label: "Yarn Dyeing", examples: "Package & hank dyeing auxiliaries", slug: "yarn-dyeing", image: "/process/yarn-dying.png" },
  { number: "05", label: "Sizing", examples: "Warp sizing agents, film formers", slug: "sizing", image: "/process/sizing.jpeg" },
  { number: "06", label: "Desizing & Scouring", examples: "Enzyme desizing, scouring agents", slug: "desizing-scouring", image: "/process/desizing-scouring.jpeg" },
  { number: "07", label: "Bleaching & Mercerizing", examples: "Peroxide stabilisers, wetting agents", slug: "bleaching-mercerizing", image: "/process/bleaching-mercerizing.jpeg" },
  { number: "08", label: "Piece / Fabric Dyeing", examples: "Levelling, dispersing, fixing agents", slug: "piece-fabric-dyeing", image: "/process/piece-fabric-dyeing.jpeg" },
  { number: "09", label: "Printing", examples: "Pigment, reactive & disperse printing aids", slug: "printing", image: "/process/printing.jpeg" },
  { number: "10", label: "Denim Processing", examples: "Indigo dyeing & finishing auxiliaries", slug: "denim-processing", image: "/process/denim-processing.jpeg" },
  { number: "11", label: "Finishing", examples: "Softeners, easy-care & functional finishes", slug: "finishing", image: "/process/finishing.jpeg" },
  { number: "12", label: "Garment Processing", examples: "Garment dyeing & washing auxiliaries", slug: "garment-processing", image: "/process/garment-processing.jpeg" },
];

export default function ProcessDirectory() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = PROCESS_STAGES[index];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const block: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const goTo = (i: number) =>
    setIndex((i + PROCESS_STAGES.length) % PROCESS_STAGES.length);

  useEffect(() => {
    if (reduceMotion || paused) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % PROCESS_STAGES.length);
    }, SLIDE_DURATION_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, paused]);

  return (
    <section
      className="relative px-6 py-20 md:px-12 md:py-28"
      style={{
        backgroundColor: WARM_WHITE,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(20,37,28,0.024) 0px,
            rgba(20,37,28,0.024) 1px,
            transparent 1px,
            transparent 5px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(20,37,28,0.02) 0px,
            rgba(20,37,28,0.02) 1px,
            transparent 1px,
            transparent 5px
          )
        `,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ backgroundColor: GOLD }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Eyebrow + document locator */}
        <motion.div
          className="flex items-center justify-between"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={block}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-[6px] w-[6px] rotate-45"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <p
              className="text-[0.78rem]"
              style={{
                color: FOREST,
                fontVariant: "all-small-caps",
                letterSpacing: "0.1em",
                opacity: 0.7,
              }}
            >
              How We&rsquo;re Organised
            </p>
          </div>

          <p
            className="text-[0.78rem]"
            style={{
              color: FOREST,
              opacity: 0.4,
              letterSpacing: "0.04em",
            }}
            aria-hidden="true"
          >
            &sect; 03
          </p>
        </motion.div>

        {/* Copy + watermark: close enough to feel like one composition */}
        <motion.div
          className="relative mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-center md:gap-16 lg:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={block}
        >
          <div className="min-w-0 flex-1">
            <h2
              className="max-w-[16ch] text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.02em] md:text-[3.25rem]"
              style={{ color: FOREST }}
            >
              Find the right chemical by process stage.
            </h2>

            <p
              className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed md:ml-[8.333%]"
              style={{ color: FOREST, opacity: 0.75 }}
            >
              Our range covers the complete textile value chain — fibre,
              yarn, fabric and garment stage — not a generic catalogue
              list.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none relative z-0 hidden shrink-0 md:block"
            style={{ width: 150, height: 150 }}
          >
            <div
              className="h-full w-full"
              style={{
                backgroundColor: "rgba(20,37,28,0.065)",
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
          </div>
        </motion.div>

        {/* Premium framed carousel */}
        <motion.div
          className="relative mt-14 md:mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={block}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Outer border makes the photograph feel designed into the page,
              rather than pasted onto it. */}
          <div
            className="relative rounded-[20px] p-[5px] shadow-[0_18px_50px_rgba(20,37,28,0.08)]"
            style={{
              border: "1px solid rgba(198,151,47,0.62)",
              backgroundColor: "rgba(255,255,255,0.34)",
            }}
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[15px] sm:aspect-[16/10] md:aspect-[21/9]"
              style={{
                border: "1px solid rgba(250,247,240,0.72)",
                backgroundColor: "#8A8172",
              }}
            >
              <AnimatePresence initial={false} mode="sync">
                {active.image ? (
                  <motion.div
                    key={active.slug}
                    className="absolute inset-0 will-change-transform"
                    initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.012 }}
                    transition={{
                      opacity: { duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] as const, },
                      scale: { duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] as const,},
                    }}
                  >
                    <Image
                      src={active.image}
                      alt={active.label}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 1440px"
                      className="object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={active.slug}
                    className="absolute inset-0 will-change-transform"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] as const,}}
                    style={{ backgroundColor: "#8A8172" }}
                  />
                )}
              </AnimatePresence>

              {/* Soft cinematic shade for caption readability */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to top,
                      rgba(20,37,28,0.88) 0%,
                      rgba(20,37,28,0.54) 25%,
                      rgba(20,37,28,0.08) 55%,
                      rgba(20,37,28,0) 72%
                    )
                  `,
                }}
                aria-hidden="true"
              />

              {/* Large image-edge navigation — no tiny buttons underneath */}
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="group absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 md:left-6 md:h-16 md:w-16"
                style={{
                  borderColor: "rgba(250,247,240,0.62)",
                  backgroundColor: "rgba(20,37,28,0.30)",
                  color: WARM_WHITE,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                }}
                aria-label="Previous process"
              >
                <span
                  className="text-[2rem] font-light leading-none transition-transform duration-300 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                >
                  &lsaquo;
                </span>
              </button>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="group absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-105 md:right-6 md:h-16 md:w-16"
                style={{
                  borderColor: "rgba(250,247,240,0.62)",
                  backgroundColor: "rgba(20,37,28,0.30)",
                  color: WARM_WHITE,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                }}
                aria-label="Next process"
              >
                <span
                  className="text-[2rem] font-light leading-none transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  &rsaquo;
                </span>
              </button>

              {/* Caption remains inside the image, with controlled spacing */}
              <motion.div
                key={`${active.slug}-caption`}
                className="absolute bottom-0 left-0 z-10 flex max-w-[44ch] items-stretch gap-4 px-6 py-7 md:px-10 md:py-9"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
              >
                <span
                  className="w-[2px] shrink-0 rounded-full"
                  style={{ backgroundColor: GOLD }}
                  aria-hidden="true"
                />

                <div>
                  <span
                    className="block text-[0.82rem] font-medium"
                    style={{
                      color: GOLD,
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {active.number}
                  </span>

                  <h3
                    className="mt-1 text-[1.65rem] font-semibold leading-tight md:text-[2.1rem]"
                    style={{
                      color: WARM_WHITE,
                      textShadow: "0 2px 14px rgba(0,0,0,0.35)",
                    }}
                  >
                    {active.label}
                  </h3>

                  <p
                    className="mt-2 text-[0.95rem] leading-relaxed"
                    style={{ color: WARM_WHITE, opacity: 0.88 }}
                  >
                    {active.examples}
                  </p>

                  {!active.image && (
                    <p
                      className="mt-2 text-[0.72rem]"
                      style={{
                        color: WARM_WHITE,
                        opacity: 0.6,
                        fontVariant: "all-small-caps",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Photograph pending
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide index / progress — deliberately lighter than the hero */}
          <div className="mt-7 flex flex-col items-center gap-4 md:mt-8">
            <div
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              role="tablist"
              aria-label="Process stages"
            >
              {PROCESS_STAGES.map((stage, i) => (
                <button
                  key={stage.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className="relative py-1 text-[0.76rem] transition-all duration-200"
                  style={{
                    color: i === index ? GOLD : FOREST,
                    opacity: i === index ? 1 : 0.34,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {stage.number}
                  {i === index && (
                    <span
                      className="absolute -bottom-1 left-1/2 h-px w-5 -translate-x-1/2"
                      style={{ backgroundColor: GOLD }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div
              className="h-px w-40 overflow-hidden"
              style={{ backgroundColor: "rgba(20,37,28,0.12)" }}
              aria-hidden="true"
            >
              {!reduceMotion && !paused && (
                <motion.div
                  key={active.slug}
                  className="h-full"
                  style={{ backgroundColor: GOLD }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: SLIDE_DURATION_MS / 1000,
                    ease: "linear" as const,
                  }}
                />
              )}
            </div>

            <a
              href="/processes"
              className="group inline-flex items-center gap-3 pt-1 text-[0.76rem] transition-opacity duration-200 hover:opacity-70"
              style={{
                color: FOREST,
                fontVariant: "all-small-caps",
                letterSpacing: "0.12em",
              }}
            >
              <span>Explore All Processes</span>
              <span
                className="text-base transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: GOLD }}
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>
          </div>

          <p className="sr-only" aria-live="polite">
            {`Showing ${active.number} — ${active.label}`}
          </p>
        </motion.div>

        {/* Small closing detail */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-3 border-t pt-8 md:mt-16"
          style={{ borderColor: "rgba(20,37,28,0.12)" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={block}
        >
          <span
            className="h-[5px] w-[5px] rotate-45"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />
          <p
            className="text-[0.75rem]"
            style={{
              color: FOREST,
              fontVariant: "all-small-caps",
              letterSpacing: "0.12em",
              opacity: 0.55,
            }}
          >
            Ethical Chemistry, in Practice
          </p>
          <span
            className="h-[5px] w-[5px] rotate-45"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
