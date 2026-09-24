"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    number: "01",
    title: "Pre-Treatment",
    slug: "pre-treatment",
    description:
      "Prepare fibres and fabrics for consistent colour, cleaner processing and improved downstream performance.",
    applications: [
      "Desizing",
      "Scouring",
      "Bleaching",
      "Wetting",
      "Peroxide Stabilisation",
      "Mercerizing",
    ],
    image: "/process/desizing-scouring.jpeg",
    tag: "Prepare",
  },
  {
    number: "02",
    title: "Yarn Dyeing",
    slug: "yarn-dyeing",
    description:
      "Chemistry designed to support controlled yarn dyeing, even colour distribution and reliable batch-to-batch performance.",
    applications: [
      "Package Dyeing",
      "Hank Dyeing",
      "Levelling",
      "Dispersing",
      "Fixing",
      "Dyeing Auxiliaries",
    ],
    image: "/process/yarn-dying.png",
    tag: "Colour",
  },
  {
    number: "03",
    title: "Denim",
    slug: "denim",
    description:
      "Process chemistry for denim production, from indigo dyeing through washing and finishing.",
    applications: [
      "Indigo Dyeing",
      "Denim Washing",
      "Desizing",
      "Finishing",
      "Anti-Backstaining",
      "Denim Auxiliaries",
    ],
    image: "/process/denim-processing.jpeg",
    tag: "Indigo",
  },
  {
    number: "04",
    title: "Cotton",
    slug: "cotton",
    description:
      "Solutions for cotton and cotton-rich textiles across preparation, dyeing, washing and finishing.",
    applications: [
      "Pre-Treatment",
      "Reactive Dyeing",
      "Washing",
      "Levelling",
      "Fixing",
      "Finishing",
    ],
    image: "/process/fibre-dyeing.jpeg",
    tag: "Natural Fibre",
  },
  {
    number: "05",
    title: "Polyester",
    slug: "polyester",
    description:
      "Chemistry for polyester processing focused on controlled dyeing, dispersion and consistent final results.",
    applications: [
      "Pre-Treatment",
      "Disperse Dyeing",
      "Levelling",
      "Dispersing",
      "Washing",
      "Finishing",
    ],
    image: "/process/piece-fabric-dyeing.jpeg",
    tag: "Synthetic Fibre",
  },
  {
    number: "06",
    title: "Sizing",
    slug: "sizing",
    description:
      "Chemistry for warp preparation, helping improve yarn strength, weaving performance and process stability.",
    applications: [
      "Sizing Agents",
      "Film Formers",
      "Lubricants",
      "Anti-Static Chemistry",
      "Warp Preparation",
      "Weaving Support",
    ],
    image: "/process/sizing.jpeg",
    tag: "Weaving",
  },
  {
    number: "07",
    title: "Printing",
    slug: "printing",
    description:
      "Process auxiliaries supporting textile printing with controlled application, colour development and fabric performance.",
    applications: [
      "Pigment Printing",
      "Reactive Printing",
      "Disperse Printing",
      "Printing Auxiliaries",
      "Wetting",
      "Fixing",
    ],
    image: "/process/printing.jpeg",
    tag: "Print",
  },
  {
    number: "08",
    title: "Finishing",
    slug: "finishing",
    description:
      "Final-stage chemistry that helps define the hand feel, appearance and functional performance of finished textiles.",
    applications: [
      "Softeners",
      "Easy-Care Finishes",
      "Functional Finishes",
      "Surface Modification",
      "Hand Feel",
      "Performance Finishes",
    ],
    image: "/process/finishing.jpeg",
    tag: "Finish",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Solutions() {
  return (
    <main className="overflow-hidden bg-[#F7F5EE] text-[#0B3D24]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#062718]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[15%] -top-[20%] h-[600px] w-[600px] rounded-full bg-[#2d7048]/20 blur-3xl" />

          <div className="absolute -bottom-[25%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#C6972F]/10 blur-3xl" />

          <svg
            className="absolute inset-0 h-full w-full opacity-[0.08]"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="solution-grid"
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

                <circle cx="29" cy="3" r="1.5" fill="#C6972F" />
                <circle cx="53" cy="17" r="1.5" fill="#C6972F" />
                <circle cx="5" cy="17" r="1.5" fill="#C6972F" />
              </pattern>
            </defs>

            <rect
              width="1200"
              height="800"
              fill="url(#solution-grid)"
            />
          </svg>
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 md:px-12 md:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-[1000px]"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[7px] w-[7px] rotate-45 bg-[#C6972F]" />

              <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/55">
                Textile Process Chemistry
              </span>
            </div>

            <h1 className="max-w-[1000px] text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#F7F5EE]">
              Chemistry mapped
              <br />
              <span className="text-[#C6972F]">to your process.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[590px] text-base leading-7 text-white/60 md:text-lg">
                From fibre preparation to the final finish, explore
                Treatfab chemistry across the stages that shape modern
                textile production.
              </p>

              <a
                href="#process"
                className="group flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F5EE]"
              >
                Explore the process

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C6972F] group-hover:bg-[#C6972F] group-hover:text-[#062718]">
                  ↓
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#F7F5EE] px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-end"
        >
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
              Our Solutions
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[clamp(2.3rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#0B3D24]">
              Every stage has its chemistry.
              <br />
              <span className="text-[#6A756D]">
                We map it clearly.
              </span>
            </h2>

            <p className="mt-8 max-w-[720px] text-base leading-7 text-[#0B3D24]/60">
              Treatfab&apos;s solution range follows the textile process
              rather than forcing every requirement into a generic
              catalogue. Select a stage to explore the chemistry,
              applications and products relevant to it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          PROCESS JOURNEY
      ========================================================= */}
      <section
        id="process"
        className="bg-[#F7F5EE] px-4 pb-24 md:px-8 md:pb-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between px-2 md:mb-16 md:px-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#C6972F]">
                Process Journey
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0B3D24] md:text-3xl">
                Explore by process stage
              </h2>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.16em] text-[#0B3D24]/35 md:block">
              08 stages
            </span>
          </div>

          <div className="space-y-6 md:space-y-10">
            {solutions.map((solution, index) => (
              <SolutionStage
                key={solution.slug}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B3D24] px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#C6972F]/20" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[330px] w-[330px] rounded-full border border-[#C6972F]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2d7048]/20 blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative mx-auto max-w-[1440px]"
        >
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[7px] w-[7px] rotate-45 bg-[#C6972F]" />

                <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-white/50">
                  Need technical guidance?
                </span>
              </div>

              <h2 className="max-w-[850px] text-[clamp(2.7rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#F7F5EE]">
                Not sure what your
                <br />
                <span className="text-[#C6972F]">process needs?</span>
              </h2>

              <p className="mt-8 max-w-[580px] text-base leading-7 text-white/55">
                Tell us your process stage, fibre type and production
                requirement. Our team can help identify the chemistry
                suited to your application.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 border border-[#C6972F]/70 px-7 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#F7F5EE] transition-all duration-300 hover:bg-[#C6972F] hover:text-[#062718]"
            >
              Talk to our team

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

/* =============================================================
   SOLUTION STAGE
============================================================= */

function SolutionStage({
  solution,
  index,
}: {
  solution: (typeof solutions)[number];
  index: number;
}) {
  const reversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.8,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group"
    >
      <div
        className={`grid overflow-hidden rounded-[2px] bg-[#0B3D24] md:min-h-[600px] md:grid-cols-2 ${
          reversed ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="relative min-h-[380px] overflow-hidden md:min-h-[600px]">
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="absolute inset-0"
          >
            <Image
              src={solution.image}
              alt={`${solution.title} textile processing`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#062718]/70 via-transparent to-[#062718]/10" />

          <div className="absolute left-6 top-6 md:left-10 md:top-10">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/70">
              Stage
            </span>

            <div className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {solution.number}
            </div>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="border border-white/30 bg-[#062718]/30 px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {solution.tag}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-7 md:p-12 lg:p-16">
          <div>
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#C6972F]">
                Treatfab Solutions
              </span>

              <span className="h-px w-16 bg-[#C6972F]/40" />
            </div>

            <h3 className="max-w-[550px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#F7F5EE]">
              {solution.title}
            </h3>

            <p className="mt-7 max-w-[520px] text-base leading-7 text-white/55">
              {solution.description}
            </p>

            <div className="mt-10 grid max-w-[540px] grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-7 sm:grid-cols-3">
              {solution.applications.map((application, i) => (
                <motion.div
                  key={application}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.04,
                  }}
                  className="flex items-center gap-2 text-[0.72rem] text-white/55"
                >
                  <span className="h-1 w-1 rounded-full bg-[#C6972F]" />

                  {application}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href={`/solutions/${solution.slug}`}
              className="group/link inline-flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-[#F7F5EE]"
            >
              Explore {solution.title}

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover/link:border-[#C6972F] group-hover/link:bg-[#C6972F] group-hover/link:text-[#062718]">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}