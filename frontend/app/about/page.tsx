"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Beaker,
  Building2,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Waves,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Consistency",
    text: "Reliable chemistry begins with controlled processes and a commitment to repeatable performance.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Technical thinking",
    text: "We look at chemistry through the process — understanding what happens before, during and after application.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Responsible chemistry",
    text: "Our Ethical Chemistry approach considers water, effluent and energy alongside process performance.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Long-term partnerships",
    text: "We aim to be more than a supplier — supporting customers with practical, process-focused solutions.",
    icon: Building2,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Start with the textile process, fibre, equipment and requirement.",
  },
  {
    number: "02",
    title: "Formulate & source",
    text: "Develop our own chemistry or connect the requirement with an appropriate established brand.",
  },
  {
    number: "03",
    title: "Support",
    text: "Work around the application rather than treating chemistry as a standalone product.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Build dependable supply and relationships that can grow with the customer.",
  },
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <main className="overflow-hidden bg-[#f5f3ec] text-[#0B1F3A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#0B3D24] text-white">

        {/* background geometry */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#E8B830]/15" />

          <svg
            className="absolute right-0 top-0 h-full w-[55%] opacity-[0.12]"
            viewBox="0 0 700 900"
            fill="none"
          >
            <path
              d="M580 40C440 170 470 290 610 380C720 450 650 570 510 610C350 655 350 820 520 875"
              stroke="#E8B830"
              strokeWidth="1.5"
            />
            <path
              d="M650 0C510 140 540 250 680 340C780 405 720 510 570 555C390 610 390 770 570 840"
              stroke="white"
              strokeWidth="1"
            />

            <circle cx="580" cy="40" r="7" fill="#E8B830" />
            <circle cx="610" cy="380" r="7" fill="#E8B830" />
            <circle cx="510" cy="610" r="7" fill="#E8B830" />
          </svg>
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] items-center px-6 py-24 lg:px-12">

          <div className="max-w-5xl">

            <motion.div {...reveal}>
              <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B830]">
                <span className="h-px w-10 bg-[#E8B830]" />
                About Treatfab
              </div>

              <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                Chemistry
                <br />
                <span className="text-[#E8B830]">with purpose.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Treatfab brings together textile chemistry, process thinking
                and responsible business to support manufacturers from fibre
                preparation through finishing.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut" as const,
              }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8B830] px-6 py-3.5 text-sm font-semibold text-[#0B1F3A] transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore our solutions
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Talk to our team
              </Link>
            </motion.div>

          </div>
        </div>

        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/40 lg:left-12">
          <ArrowDownRight size={15} />
          Our story
        </div>
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="relative bg-[#f5f3ec] py-28 lg:py-40">

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">

          <motion.div {...reveal}>
            <div className="sticky top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B3D24]">
                01 — Who we are
              </p>

              <div className="mt-5 h-px w-20 bg-[#E8B830]" />
            </div>
          </motion.div>

          <motion.div {...reveal} className="max-w-4xl">
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#0B1F3A] md:text-6xl">
              Built around the process,
              <span className="text-[#0B3D24]"> not just the product.</span>
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-8 text-[#0B1F3A]/65">
              <p>
                Treatfab Chemicals Pvt. Ltd. is a textile chemical company
                built around two complementary business verticals.
              </p>

              <p>
                The first is our own Treatfab brand, focused on developing and
                manufacturing textile chemistry. The second is our trading and
                distribution business, supplying chemicals from established
                brands.
              </p>

              <p>
                Together, these two sides allow us to approach textile
                processing from both a manufacturing and supply perspective —
                helping customers find chemistry suited to the stage of their
                process.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 md:grid-cols-2">

              <div className="bg-white p-8 md:p-10">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D24] text-white">
                  <Beaker size={20} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3D24]">
                  Own brand
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Treatfab Chemistry
                </h3>

                <p className="mt-4 leading-7 text-[#0B1F3A]/60">
                  Our own manufacturing vertical, developed around textile
                  processing requirements and the principles of Ethical
                  Chemistry.
                </p>
              </div>

              <div className="bg-[#0B1F3A] p-8 text-white md:p-10">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8B830] text-[#0B1F3A]">
                  <Building2 size={20} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8B830]">
                  Distribution
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Established Brands
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  A distribution business connecting textile manufacturers
                  with established chemical brands and their product ranges.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          ETHICAL CHEMISTRY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1F3A] py-28 text-white lg:py-36">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-[#E8B830]/10" />
          <div className="absolute -left-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/10" />

          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#0B3D24]/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">

          <motion.div {...reveal} className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B830]">
              02 — Ethical Chemistry
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Better chemistry isn't
              <br />
              only about the{" "}
              <span className="text-[#E8B830]">end result.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Our Ethical Chemistry philosophy looks beyond performance alone,
              considering the wider process — including water, effluent,
              energy and the choice of chemical inputs.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut" as const,
            }}
            className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: Waves,
                title: "Water",
                text: "Process efficiency with attention to water use.",
              },
              {
                icon: Leaf,
                title: "Effluent",
                text: "Chemistry designed with effluent considerations in mind.",
              },
              {
                icon: Beaker,
                title: "Inputs",
                text: "A focus on responsible chemical formulation.",
              },
              {
                icon: ArrowUpRight,
                title: "Efficiency",
                text: "Better process performance without losing sight of impact.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-white/10 bg-white/[0.035] p-7 transition-colors duration-300 hover:border-[#E8B830]/40 hover:bg-white/[0.06]"
                >
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#E8B830]"
                  />

                  <h3 className="mt-12 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
   {/* =========================================================
    HOW WE WORK
========================================================= */}
<section className="relative overflow-hidden bg-white py-28 lg:py-36">

{/* Background detail */}
<div className="pointer-events-none absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#0B3D24]/[0.05]" />

<div className="mx-auto max-w-[1400px] px-6 lg:px-12">

  {/* SECTION INTRO */}
  <motion.div
    {...reveal}
    className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
  >

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B3D24]">
        03 — How we work
      </p>

      <div className="mt-5 h-px w-20 bg-[#E8B830]" />
    </div>

    <div>
      <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-6xl">
        From process requirement
        <br />
        <span className="text-[#0B3D24]">
          to practical chemistry.
        </span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-7 text-[#0B1F3A]/55 md:text-lg">
        We start with the process, understand the requirement, and work
        towards a chemistry and supply approach suited to the application.
      </p>
    </div>

  </motion.div>


  {/* PROCESS JOURNEY */}
  <div className="relative mt-20">

    {/* Connecting line */}
    <div className="pointer-events-none absolute left-[28px] top-8 bottom-8 hidden w-px bg-[#0B1F3A]/10 md:block" />

    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,
        ease: "easeOut" as const,
      }}
      style={{ transformOrigin: "top" }}
      className="pointer-events-none absolute left-[28px] top-8 bottom-8 hidden w-px bg-[#E8B830] md:block"
    />


    {process.map((item, index) => (

      <motion.div
        key={item.number}
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: "easeOut" as const,
        }}
        className="group relative mb-4 last:mb-0"
      >

        <div className="relative grid overflow-hidden rounded-[1.75rem] border border-[#0B1F3A]/10 bg-[#f5f3ec] transition-all duration-500 hover:-translate-y-1 hover:border-[#0B3D24]/25 hover:bg-[#0B3D24] hover:shadow-[0_25px_70px_rgba(11,61,36,0.12)] md:grid-cols-[100px_1fr_auto] md:items-center">

          {/* NUMBER */}
          <div className="relative flex items-center px-7 pt-7 md:h-full md:px-0 md:pt-0 md:justify-center">

            {/* node */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#0B3D24]/15 bg-[#f5f3ec] transition-all duration-500 group-hover:border-[#E8B830] group-hover:bg-[#E8B830]">

              <span className="text-xs font-bold tracking-[0.18em] text-[#0B3D24] transition-colors duration-500 group-hover:text-[#0B1F3A]">
                {item.number}
              </span>

            </div>

          </div>


          {/* CONTENT */}
          <div className="px-7 pb-8 pt-5 md:px-8 md:py-9">

            <div className="flex items-center gap-3">

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B3D24]/45 transition-colors duration-500 group-hover:text-[#E8B830]">
                Process stage
              </span>

              <span className="h-px w-8 bg-[#E8B830]/60" />

            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0B1F3A] transition-colors duration-500 md:text-3xl group-hover:text-white">
              {item.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#0B1F3A]/55 transition-colors duration-500 md:text-base group-hover:text-white/60">
              {item.text}
            </p>

          </div>


          {/* RIGHT SIDE VISUAL */}
          <div className="hidden self-stretch border-l border-[#0B1F3A]/10 px-8 md:flex md:min-w-[180px] md:items-center md:justify-center transition-colors duration-500 group-hover:border-white/10">

            <div className="relative flex h-20 w-20 items-center justify-center">

              {/* orbit */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                className="absolute inset-0 rounded-full border border-dashed border-[#0B3D24]/15 group-hover:border-[#E8B830]/40"
              />

              {/* inner circle */}
              <div className="h-3 w-3 rounded-full bg-[#0B3D24] transition-colors duration-500 group-hover:bg-[#E8B830]" />

              {/* arrow */}
              <ArrowUpRight
                size={19}
                className="absolute right-[-2px] top-[-2px] text-[#0B3D24] opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E8B830] group-hover:opacity-100"
              />

            </div>

          </div>

        </div>

      </motion.div>

    ))}

  </div>


  {/* FINAL FLOW */}
  <motion.div
    {...reveal}
    className="mt-12 overflow-hidden rounded-[1.5rem] border border-[#0B1F3A]/10 bg-[#0B1F3A]"
  >

    <div className="flex flex-col md:flex-row md:items-center">

      {[
        "Requirement",
        "Chemistry",
        "Process",
        "Partnership",
      ].map((item, index) => (

        <div
          key={item}
          className="group relative flex flex-1 items-center justify-between border-b border-white/10 px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8 md:py-7"
        >

          <div className="flex items-center gap-4">

            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E8B830]">
              0{index + 1}
            </span>

            <span className="text-sm font-medium text-white/75 transition-colors group-hover:text-white md:text-base">
              {item}
            </span>

          </div>

          {index < 3 && (
            <ArrowUpRight
              size={16}
              className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E8B830]"
            />
          )}

        </div>

      ))}

    </div>

  </motion.div>

</div>

</section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="bg-[#ebe9e1] py-28 lg:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

          <motion.div {...reveal} className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B3D24]">
                04 — What we stand for
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-6xl">
                A supplier relationship
                <br />
                <span className="text-[#0B3D24]">built for the long term.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#0B1F3A]/50">
              The Treatfab approach is grounded in consistency, technical
              thinking and responsible chemistry.
            </p>

          </motion.div>

          <div className="mt-20 grid gap-px overflow-hidden border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 md:grid-cols-2 lg:grid-cols-4">

            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  {...reveal}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: "easeOut" as const,
                  }}
                  className="group min-h-[330px] bg-[#f5f3ec] p-8 transition-colors duration-300 hover:bg-[#0B3D24] hover:text-white md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#0B3D24] group-hover:text-[#E8B830]">
                      {item.number}
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#0B3D24] transition-colors duration-300 group-hover:text-[#E8B830]"
                    />
                  </div>

                  <div className="mt-28">
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#0B1F3A]/55 transition-colors duration-300 group-hover:text-white/60">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          COMPANY IDENTITY
      ========================================================= */}
      <section className="bg-[#f5f3ec] py-28 lg:py-36">

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-12 lg:items-center">

          <motion.div {...reveal}>

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0B3D24]">
              05 — The company
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-6xl">
              Rooted in
              <br />
              <span className="text-[#0B3D24]">Bhilwara.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#0B1F3A]/60">
              Treatfab Chemicals Pvt. Ltd. operates from Bhilwara, Rajasthan —
              a location closely connected with India's textile industry.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#0B3D24]"
            >
              Contact Treatfab
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>


          <motion.div {...reveal} className="relative">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#0B3D24] p-8 text-white md:p-12">

              <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#E8B830]/20" />

              <div className="relative">

                <div className="mb-12">
                  <Image
                    src="/images/treatfab-logo3.png"
                    alt="Treatfab"
                    width={220}
                    height={90}
                    className="w-[170px] object-contain object-left brightness-0 invert"
                  />
                </div>

                <div className="space-y-0 divide-y divide-white/10">

                  <div className="py-5 first:pt-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8B830]">
                      Company
                    </p>
                    <p className="mt-2 text-lg">
                      Treatfab Chemicals Pvt. Ltd.
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8B830]">
                      CIN
                    </p>
                    <p className="mt-2 font-mono text-sm text-white/70">
                      U20224RJ2025PTC105469
                    </p>
                  </div>

                  <div className="py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8B830]">
                      PAN
                    </p>
                    <p className="mt-2 font-mono text-sm text-white/70">
                      AAMCT1928P
                    </p>
                  </div>

                  <div className="py-5 pb-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8B830]">
                      Office
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Office No. 3, III Floor, Orient Arcade,
                      <br />
                      Transport Nagar, Bhilwara – 311001
                      <br />
                      Rajasthan, India
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B3D24] py-28 text-white lg:py-36">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8B830]/15" />
        </div>

        <motion.div
          {...reveal}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B830]">
            Work with Treatfab
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Let's build better
            <br />
            <span className="text-[#E8B830]">textile processes.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg">
            Tell us about your process, requirement or chemical enquiry and
            let's start a conversation.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#E8B830] px-7 py-4 text-sm font-semibold text-[#0B1F3A] transition-transform duration-300 hover:scale-[1.03]"
          >
            Talk to our team
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

      </section>

    </main>
  );
}