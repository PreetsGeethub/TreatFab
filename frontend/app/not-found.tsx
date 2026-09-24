"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const FOREST = "#0B3D24";
const DARK = "#062718";
const GOLD = "#C6972F";
const CREAM = "#F7F5EE";

const molecules = [
  { x: "12%", y: "18%", size: 7, delay: 0 },
  { x: "27%", y: "38%", size: 5, delay: 0.8 },
  { x: "44%", y: "16%", size: 6, delay: 1.4 },
  { x: "66%", y: "29%", size: 8, delay: 0.4 },
  { x: "82%", y: "15%", size: 5, delay: 1.1 },
  { x: "91%", y: "52%", size: 7, delay: 1.8 },
  { x: "74%", y: "72%", size: 5, delay: 0.6 },
  { x: "49%", y: "82%", size: 7, delay: 1.5 },
  { x: "19%", y: "74%", size: 6, delay: 0.2 },
];

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: DARK,
        color: CREAM,
      }}
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.16, 0.24, 0.16],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute -left-[15%] -top-[15%] h-[650px] w-[650px] rounded-full bg-[#2D7048] blur-[120px]"
        />

        {/* Gold glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute -bottom-[20%] -right-[10%] h-[550px] w-[550px] rounded-full bg-[#C6972F] blur-[130px]"
        />

        {/* Hex grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.055]"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="hex-pattern"
              width="72"
              height="62"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M36 2L64 17V45L36 60L8 45V17L36 2Z"
                fill="none"
                stroke={CREAM}
                strokeWidth="0.7"
              />
            </pattern>
          </defs>

          <rect
            width="1200"
            height="900"
            fill="url(#hex-pattern)"
          />
        </svg>
      </div>

      {/* =========================================================
          NAV / BRAND
      ========================================================= */}

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-7 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <span
              className="absolute inset-0 rotate-45 border"
              style={{ borderColor: GOLD }}
            />

            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <div>
            <div className="text-sm font-semibold tracking-[0.18em]">
              TREATFAB
            </div>

            <div className="text-[0.48rem] uppercase tracking-[0.25em] text-white/35">
              Ethical Chemistry
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-white/35 md:flex">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: GOLD }}
          />
          System / 404
        </div>
      </div>

      {/* =========================================================
          MOLECULE FIELD
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M120 125 L270 265 L440 110 L660 205 L820 105"
            fill="none"
            stroke={GOLD}
            strokeWidth="1"
            strokeOpacity="0.14"
            strokeDasharray="5 10"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear" as const,
            }}
          />

          <motion.path
            d="M190 520 L350 390 L500 575 L740 500 L900 350"
            fill="none"
            stroke={CREAM}
            strokeWidth="1"
            strokeOpacity="0.08"
            strokeDasharray="4 12"
            animate={{
              strokeDashoffset: [0, 120],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear" as const,
            }}
          />
        </svg>

        {/* Floating molecule nodes */}
        {molecules.map((node, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 4 + index * 0.35,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: node.size,
                height: node.size,
                backgroundColor: GOLD,
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: node.size * 4,
                height: node.size * 4,
                borderColor: `${GOLD}30`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 flex min-h-[calc(100vh-90px)] items-center">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 pb-20 pt-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:pb-28">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="h-[7px] w-[7px] rotate-45"
                style={{ backgroundColor: GOLD }}
              />

              <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/45">
                Process interruption
              </span>
            </motion.div>

            {/* 404 */}
            <div className="relative">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="select-none text-[clamp(8rem,22vw,20rem)] font-semibold leading-[0.7] tracking-[-0.09em]"
              >
                404
              </motion.h1>

              {/* Gold underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mt-8 h-[2px]"
                style={{ backgroundColor: GOLD }}
              />
            </div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="mt-10 max-w-[600px]"
            >
              <h2 className="text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.045em]">
                This reaction
                <br />
                <span style={{ color: GOLD }}>
                  didn&apos;t go as planned.
                </span>
              </h2>

              <p className="mt-7 max-w-[500px] text-base leading-7 text-white/50 md:text-lg">
                The page you&apos;re looking for has moved, changed,
                or never made it into the process.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/"
                className="group flex w-fit items-center gap-4 px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.17em] transition-all duration-300"
                style={{
                  backgroundColor: GOLD,
                  color: DARK,
                }}
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                Back to home
              </Link>

              <Link
                href="/solutions"
                className="group flex w-fit items-center gap-4 border border-white/15 px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:border-[#C6972F]/60 hover:bg-white/[0.04]"
              >
                Explore solutions

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — CHEMISTRY VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear" as const,
              }}
              className="absolute inset-[5%] rounded-full border border-white/[0.08] border-dashed"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear" as const,
              }}
              className="absolute inset-[18%] rounded-full border border-[#C6972F]/20"
            />

            {/* Central molecule */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
                className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full border border-[#C6972F]/30 md:h-[240px] md:w-[240px]"
              >
                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }}
                  className="absolute inset-[-25px] rounded-full border border-white/[0.08]"
                >
                  <span
                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                </motion.div>

                {/* Inner hex */}
                <motion.div
                  animate={{
                    rotate: [0, 60, 120, 180],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }}
                  className="flex h-24 w-24 rotate-45 items-center justify-center border border-[#C6972F]/50"
                >
                  <div
                    className="h-3 w-3 -rotate-45 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                </motion.div>

                {/* Core */}
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-[#0B3D24] shadow-[0_0_60px_rgba(198,151,47,0.18)]">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating labels */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              className="absolute left-[5%] top-[25%] border border-white/10 bg-[#0B3D24]/70 px-4 py-3 backdrop-blur-md"
            >
              <div className="text-[0.52rem] uppercase tracking-[0.2em] text-white/30">
                Stage
              </div>

              <div className="mt-1 text-xs font-medium text-white/70">
                Unresolved
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              className="absolute bottom-[20%] right-[2%] border border-[#C6972F]/20 bg-[#0B3D24]/70 px-4 py-3 backdrop-blur-md"
            >
              <div className="text-[0.52rem] uppercase tracking-[0.2em] text-white/30">
                Status
              </div>

              <div
                className="mt-1 text-xs font-medium"
                style={{ color: GOLD }}
              >
                Not found
              </div>
            </motion.div>

            {/* Corner coordinates */}
            <span className="absolute left-0 top-[48%] text-[0.55rem] uppercase tracking-[0.2em] text-white/20">
              TF / 00
            </span>

            <span className="absolute bottom-[10%] left-[30%] text-[0.55rem] uppercase tracking-[0.2em] text-white/20">
              Chemistry / Process / 404
            </span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER SIGNAL
      ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div
          className="h-[2px] w-full"
          style={{ backgroundColor: GOLD }}
        />

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 text-[0.55rem] uppercase tracking-[0.2em] text-white/25 md:px-12">
          <span>Treatfab Chemicals</span>

          <span>Ethical Chemistry</span>
        </div>
      </div>
    </main>
  );
}