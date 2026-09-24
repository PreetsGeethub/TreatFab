import Link from "next/link";
import { solutionsProcesses } from "@/components/navbar/navbar.data";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";

const PROCESS_PREVIEW = [
  { number: "01", label: "Pre-treatment", slug: "pre-treatment" },
  { number: "02", label: "Dyeing", slug: "yarn-dyeing" },
  { number: "03", label: "Printing", slug: "printing" },
  { number: "04", label: "Denim", slug: "denim" },
  { number: "05", label: "Finishing", slug: "finishing" },
];

export default function ProcessSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: FOREST, color: WARM_WHITE }}
    >
      {/* Large Treatfab tree mark: a quiet architectural brand element. */}
      <div
        className="pointer-events-none absolute -right-[9vw] top-1/2 hidden -translate-y-1/2 md:block"
        aria-hidden="true"
      >
        <img
          src="/images/treatfab-tree.svg"
          alt=""
          className="h-[620px] w-[620px] object-contain opacity-[0.075]"
        />
      </div>

      <div
        className="pointer-events-none absolute -right-24 bottom-[-100px] md:hidden"
        aria-hidden="true"
      >
        <img
          src="/images/treatfab-tree.svg"
          alt=""
          className="h-[340px] w-[340px] object-contain opacity-[0.065]"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="h-[6px] w-[6px] rotate-45"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <p
              className="text-[0.75rem]"
              style={{
                fontVariant: "all-small-caps",
                letterSpacing: "0.1em",
                opacity: 0.72,
              }}
            >
              The Process
            </p>
          </div>

          <p
            className="text-[0.72rem]"
            style={{ opacity: 0.35, letterSpacing: "0.04em" }}
            aria-hidden="true"
          >
            § 03
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-14 md:mt-16 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-5">
            <h2
              className="max-w-[12ch] text-[2.8rem] font-semibold leading-[1.04] tracking-[-0.02em] md:text-[4.25rem]"
              style={{ color: WARM_WHITE }}
            >
              One fabric.
              <br />
              Five stages.
            </h2>

            <p
              className="mt-7 max-w-[36ch] text-[1rem] leading-relaxed md:ml-[8.333%]"
              style={{ opacity: 0.68 }}
            >
              From preparation to finishing, Treatfab stays with the process
              so every stage works toward the same finished cloth.
            </p>

            <Link
              href="/solutions"
              className="group mt-9 inline-flex items-center gap-3 text-[0.78rem] md:ml-[8.333%]"
              style={{
                fontVariant: "all-small-caps",
                letterSpacing: "0.06em",
              }}
            >
              <span
                className="h-px w-7 transition-all duration-300 group-hover:w-11"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />
              <span className="transition-colors duration-200 group-hover:text-[#C6972F]">
                Explore all solutions
              </span>
            </Link>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div
              className="border-t"
              style={{ borderColor: "rgba(250,247,240,0.2)" }}
            >
              {PROCESS_PREVIEW.map((process) => (
                <Link
                  key={process.slug}
                  href={`/solutions/${process.slug}`}
                  className="group relative flex items-center justify-between border-b py-5 transition-colors duration-300"
                  style={{ borderColor: "rgba(250,247,240,0.2)" }}
                >
                  <span className="flex items-center gap-5">
                    <span
                      className="w-7 text-[0.72rem]"
                      style={{
                        color: GOLD,
                        fontVariantNumeric: "tabular-nums",
                        opacity: 0.9,
                      }}
                    >
                      {process.number}
                    </span>

                    <span
                      className="text-[1.05rem] transition-transform duration-300 group-hover:translate-x-2 md:text-[1.15rem]"
                      style={{
                        fontVariant: "all-small-caps",
                        letterSpacing: "0.045em",
                      }}
                    >
                      {process.label}
                    </span>
                  </span>

                  <span
                    className="mr-1 text-lg opacity-35 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100 group-hover:text-[#C6972F]"
                    aria-hidden="true"
                  >
                    →
                  </span>

                  <span
                    className="absolute bottom-[-1px] left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: GOLD }}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-6 md:mt-20 md:flex md:items-center md:justify-between"
          style={{ borderColor: "rgba(250,247,240,0.12)" }}
        >
          <p
            className="max-w-[50ch] text-[0.82rem] leading-relaxed"
            style={{ opacity: 0.48 }}
          >
            Chemistry is not one step in textile production. It is the thread
            connecting the entire process.
          </p>

          <span
            className="mt-4 hidden text-[0.68rem] md:mt-0 md:block"
            style={{
              color: GOLD,
              fontVariant: "all-small-caps",
              letterSpacing: "0.08em",
              opacity: 0.8,
            }}
          >
            Treatfab / Textile Chemistry
          </span>
        </div>
      </div>
    </section>
  );
}
