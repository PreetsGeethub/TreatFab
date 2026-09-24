"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionPageClient({
    solution,
    previous,
    next,
  }: {
    solution: any;
    previous: [string, any] | null;
    next: [string, any] | null;
  }) {
    return (
      // paste the JSX from the previous SolutionPage here
      <main className="overflow-hidden bg-[#F7F5EE] text-[#0B3D24]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#062718]">
        <div className="absolute inset-0">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062718] via-[#062718]/75 to-[#062718]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#062718] via-transparent to-transparent" />
        </div>

        {/* Technical pattern */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="solution-hex"
              width="58"
              height="58"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M29 3L53 17V45L29 59L5 45V17L29 3Z"
                fill="none"
                stroke="#F7F5EE"
                strokeWidth="0.7"
              />
            </pattern>
          </defs>

          <rect width="1200" height="800" fill="url(#solution-hex)" />
        </svg>

        <div className="relative mx-auto flex min-h-[90vh] max-w-[1440px] items-end px-6 pb-16 pt-32 md:px-12 md:pb-24">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#C6972F]">
                  Solution {solution.number}
                </span>

                <span className="h-px w-16 bg-[#C6972F]/60" />

                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/45">
                  {solution.eyebrow}
                </span>
              </div>

              <h1 className="max-w-[1000px] text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-[#F7F5EE]">
                {solution.title}
                <span className="text-[#C6972F]">.</span>
              </h1>

              <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-[650px] text-lg leading-8 text-white/65 md:text-xl">
                  {solution.description}
                </p>

                <a
                  href="#details"
                  className="group flex w-fit items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Explore solution

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-[#C6972F] group-hover:bg-[#C6972F] group-hover:text-[#062718]">
                    ↓
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </section>

      {/* =========================================================
          PROCESS INTRO
      ========================================================= */}
      <section
        id="details"
        className="px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
                Process Focus
              </p>

              <p className="mt-5 max-w-[240px] text-sm leading-6 text-[#0B3D24]/50">
                Chemistry organised around the requirements of this
                stage of textile production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="max-w-[950px] text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
                Chemistry designed around
                <span className="text-[#6C786F]"> the process.</span>
              </h2>

              <p className="mt-8 max-w-[700px] text-base leading-7 text-[#0B3D24]/60">
                Treatfab&apos;s approach is to look at where chemistry
                enters the textile process, what it needs to achieve,
                and how different stages work together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}
      <section className="bg-[#0B3D24] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
                Applications
              </p>

              <h2 className="mt-5 max-w-[360px] text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#F7F5EE] md:text-5xl">
                Where this chemistry works.
              </h2>
            </motion.div>

            <div className="grid border-t border-white/10 sm:grid-cols-2">
            {solution.applications.map((item: string, index: number) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between border-b border-white/10 py-7 pr-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[0.65rem] tabular-nums text-[#C6972F]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg text-white/75 transition-colors duration-300 group-hover:text-white">
                      {item}
                    </span>
                  </div>

                  <span className="text-[#C6972F] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
              Process Benefits
            </p>

            <h2 className="mt-5 max-w-[850px] text-[clamp(2.7rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Built around
              <br />
              <span className="text-[#68736C]">process performance.</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid border-t border-[#0B3D24]/10 md:grid-cols-2">
            {solution.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="border-b border-[#0B3D24]/10 py-8 md:px-4 md:py-10"
              >
                <div className="flex gap-6">
                  <span className="text-[0.68rem] font-medium text-[#C6972F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-[500px] text-xl leading-7 tracking-[-0.02em] text-[#0B3D24] md:text-2xl">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CHEMISTRY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EAE8DF] px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border border-[#0B3D24]/10" />

        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
                Chemistry Range
              </p>

              <h2 className="mt-5 max-w-[650px] text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
                Chemistry for the
                <span className="text-[#657168]"> details.</span>
              </h2>

              <p className="mt-8 max-w-[550px] text-base leading-7 text-[#0B3D24]/60">
                Explore the chemical categories relevant to this
                process stage and connect them to the products in the
                Treatfab range.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 border-t border-[#0B3D24]/15">
              {solution.chemistry.map((item: string, index: number) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="border-b border-[#0B3D24]/15 p-5 md:p-7"
                >
                  <span className="text-[0.62rem] text-[#C6972F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base leading-6 text-[#0B3D24] md:text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT PLACEHOLDER / FUTURE CONNECTION
      ========================================================= */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1440px]"
        >
          <div className="border border-[#0B3D24]/10 p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
                  Product Range
                </p>

                <h2 className="mt-5 max-w-[700px] text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
                  Chemistry matched to this process.
                </h2>

                <p className="mt-6 max-w-[600px] text-sm leading-6 text-[#0B3D24]/55">
                  Treatfab products for this solution stage can be
                  connected here as the product catalogue develops.
                </p>
              </div>

              <Link
                href="/products"
                className="group flex w-fit items-center gap-4 border border-[#0B3D24]/20 px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#0B3D24] hover:bg-[#0B3D24] hover:text-[#F7F5EE]"
              >
                View Products

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          PREVIOUS / NEXT
      ========================================================= */}
      <section className="border-t border-[#0B3D24]/10 bg-[#F7F5EE] px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
          {previous ? (
            <Link
              href={`/solutions/${previous[0]}`}
              className="group max-w-[45%]"
            >
              <span className="text-[0.62rem] uppercase tracking-[0.18em] text-[#C6972F]">
                ← Previous
              </span>

              <span className="mt-2 block text-xl font-semibold tracking-[-0.03em] text-[#0B3D24] transition-transform duration-300 group-hover:-translate-x-1 md:text-2xl">
                {previous[1].title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/solutions/${next[0]}`}
              className="group max-w-[45%] text-right"
            >
              <span className="text-[0.62rem] uppercase tracking-[0.18em] text-[#C6972F]">
                Next →
              </span>

              <span className="mt-2 block text-xl font-semibold tracking-[-0.03em] text-[#0B3D24] transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                {next[1].title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#062718] px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C6972F]/15" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1440px]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
            Talk to Treatfab
          </p>

          <h2 className="mt-6 max-w-[900px] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.87] tracking-[-0.06em] text-[#F7F5EE]">
            Have a process
            <br />
            <span className="text-[#C6972F]">to solve?</span>
          </h2>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[570px] text-base leading-7 text-white/50">
              Share your process stage, fibre type and requirement with
              our team and let&apos;s identify the right chemistry.
            </p>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 border border-[#C6972F]/70 px-7 py-5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#F7F5EE] transition-all duration-300 hover:bg-[#C6972F] hover:text-[#062718]"
            >
              Request a Quote

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
    );
  }